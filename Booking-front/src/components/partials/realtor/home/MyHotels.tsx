import HotelCard from "components/partials/customer/HotelCard.tsx";
import { useGetHotelsPageQuery } from "services/hotel.ts";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import showToast from "utils/toastShow.ts";
import { IHotel } from "interfaces/hotel/IHotel.ts";
import { useRealtorActivePage } from "components/contexts/RealtorActivePage.tsx";

const MyHotels = () => {
    const navigate = useNavigate();
    const { setActivePage } = useRealtorActivePage();
    const [pageSize, setPageSize] = useState(3);
    const [hotels, setHotels] = useState<IHotel[]>([]);

    const { data: hotelsData, isLoading, error } = useGetHotelsPageQuery({
        onlyOwn: true,
        isArchived: false,
        pageIndex: 0,
        pageSize,
    });

    useEffect(() => {
        if (hotelsData) {
            setHotels(hotelsData.data);
        }
    }, [hotelsData]);

    const hasMoreHotels = (hotelsData?.itemsAvailable ?? 0) > pageSize;
    
    const handleHotelClick = () => {
        setActivePage("hotels");
        navigate("/realtor/hotels");
    };

    if (isLoading) return <p className="isLoading-error">Завантаження...</p>;
    if (error) {
        showToast("Помилка завантаження даних", "error");
        return null;
    }

    return (
        <div className="hotels-container">
            <div className="container1">
                <p className="pre-title">Мої готелі</p>
                {hotels.length > 0 ? (
                    <div className="hotels-and-reviews" onClick={handleHotelClick}>
                        {hotels.map((item) => (
                            <HotelCard key={item.id} item={item} />
                        ))}
                    </div>
                ) : (
                    <p className="isLoading-error">У вас немає готелів</p>
                )}
            </div>

            {hasMoreHotels && (
                <div className="main-button">
                    <button onClick={() => setPageSize(prev => prev + 3)}>
                        Більше
                    </button>
                </div>
            )}
        </div>
    );
};

export default MyHotels;