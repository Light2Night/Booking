import React, { useState } from 'react';
import { IconLock, IconLockOpen } from "@tabler/icons-react";
import { Button } from 'components/ui/Button.tsx'; // Ensure this path is correct
import { useGetAllCustomersQuery, useBlockUserMutation, useUnlockUserMutation } from 'services/user.ts';
import { API_URL } from 'utils/getEnvData.ts';
import { useSelector } from 'react-redux';
import { RootState } from 'store/index.ts';
import { getToken } from 'store/slice/userSlice.ts';
import ModalComponent from 'components/ModalComponent'; // Adjust the path accordingly

const CustomersListPage: React.FC = () => {
    const [blockUser, { isLoading: isBlockLoading }] = useBlockUserMutation();
    const [unlockUser, { isLoading: isUnblockLoading }] = useUnlockUserMutation();
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

    const { data: customersData, isLoading, error, refetch } = useGetAllCustomersQuery();

    const token = useSelector((state: RootState) => getToken(state));
    const payload = token ? JSON.parse(atob(token.split('.')[1])) : null;
    const userRole = payload ? payload["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] : null;

    const isAdmin = userRole === "Admin";

    if (!isAdmin) {
        return <p>Ви не маєте доступу до цієї сторінки. Тільки адміністратори можуть переглядати список користувачів.</p>;
    }

    if (isLoading) return <p>Завантаження...</p>;
    if (error) return <p>Помилка завантаження даних</p>;

    const handleBlockUserClick = (id: number) => {
        setSelectedUserId(id);
        setModalOpen(true);
    };

    const handleBlockUser = async (date: Date) => {
        if (selectedUserId) {
            try {
                const utcDate = new Date(date.toISOString());
                console.log( utcDate);
                console.log("Sending date to API:", utcDate.toISOString());
                await blockUser({ id: selectedUserId, lockoutEnd: utcDate }).unwrap();
                refetch();
            } catch (err) {
                console.error("Помилка при блокуванні користувача:", err);
                alert("Не вдалося заблокувати користувача.");
            } finally {
                setModalOpen(false);
            }
        }
    };

    const handleUnlockUser = async (id: number) => {
        if (confirm("Ви впевнені, що хочете розблокувати цього користувача?")) {
            try {
                await unlockUser(id).unwrap();
                refetch();
            } catch (err) {
                console.error("Помилка при розблокуванні користувача:", err);
                alert("Не вдалося розблокувати користувача.");
            }
        }
    };

    const customers = customersData?.data || [];

    return (
        <div className="container mx-auto mt-5 max-w-4xl mx-auto">
            <h1 className="pb-5 text-2xl text-center text-black font-main font-bold">
                Список Клієнтів
            </h1>
            <div className="overflow-x-auto sm:rounded-lg">
                <table className="text-sm font-bold min-w-full bg-white border text-left">
                    <thead className="text-xs uppercase bg-slate-200">
                    <tr>
                        <th className="px-6 py-3">Ім'я</th>
                        <th className="px-6 py-3">Прізвище</th>
                        <th className="px-6 py-3">Електронна пошта</th>
                        <th className="px-6 py-3">Фото</th>
                        <th className="px-6 py-3"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {customers.map((user) => (
                        <tr key={user.id} className="bg-white border-b hover:bg-gray-50">
                            <td className="px-6 py-4">{user.firstName}</td>
                            <td className="px-6 py-4">{user.lastName}</td>
                            <td className="px-6 py-4">{user.email}</td>
                            <td className="px-6 py-4">
                                {user.photo && (
                                    <img
                                        src={`${API_URL}/images/800_${user.photo}`}
                                        alt={`${user.firstName} ${user.lastName}`}
                                        className="h-20 w-20 object-cover"
                                    />
                                )}
                            </td>
                            <td className="px-6 py-3 text-center">
                                {user.blocked ? (
                                    <>
                                        <p className="text-red-800">Заблоковано до: {new Date(user.lockoutEnd).toLocaleDateString()}</p>
                                        <Button
                                            onClick={() => handleUnlockUser(user.id)}
                                            variant="icon"
                                            size="iconmd"
                                            title="Розблокувати"
                                            disabled={isUnblockLoading}
                                        >
                                            <IconLock className="text-green-500" />
                                        </Button>
                                    </>
                                ) : (
                                    <Button
                                        onClick={() => handleBlockUserClick(user.id)}
                                        variant="icon"
                                        size="iconmd"
                                        title="Заблокувати"
                                        disabled={isBlockLoading}
                                    >
                                        <IconLockOpen className="text-red-500" />
                                    </Button>
                                )}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            <ModalComponent
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                onConfirm={handleBlockUser}
            />
        </div>
    );
};

export default CustomersListPage;
