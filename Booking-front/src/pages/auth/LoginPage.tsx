import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "store/index.ts";
import { getUserLocation, setToken } from "store/slice/userSlice.ts";

import React, { useEffect } from "react";
import TextInput from "components/ui/design/TextInput.tsx";
import VerticalPad from "components/ui/VerticalPad.tsx";
import getEmptySymbol from "utils/emptySymbol.ts";
import { useSignInMutation } from "services/user.ts";
import SignInRegisterButton from "components/ui/design/SignInRegisterButton.tsx";
import { useSelector } from "react-redux";
import { instantScrollToTop } from "utils/scrollToTop.ts";

const LoginPage: React.FC = () => {
    useEffect(instantScrollToTop, []);

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const userLocation = useSelector(getUserLocation);

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const [error, setError] = React.useState("");

    const [emailLogin, { isLoading: isLoadingEmailLogin }] = useSignInMutation();

    const login = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        const response = await emailLogin({ email, password });

        if (response.error) {
            if ("status" in response.error && response.error.status === 400 ||
                "status" in response.error && response.error.status === 401) {
                setError("Не вірна пошта або пароль");
            } else if ("status" in response.error && response.error.status === 403) {
                setError("Акаунт заблоковано");
            } else {
                setError("Невідома помилка");
            }
        } else if (response && response.data) {
            setUser(response.data.token);
            setError("");
        }
    };

    const setUser = (token: string) => {
        dispatch(
            setToken(token),
        );

        navigate(userLocation);
    };

    return (
        <form className="flex flex-col" onSubmit={login}>
            <TextInput
                id="email"
                title="Пошта"
                type="email"
                value={email}
                placeholder="Введіть свою електронну пошту"
                onChange={(e) => setEmail(e.target.value)}
                isError={!!error} />

            <VerticalPad heightPx={4} />

            <div className="relative">
                <TextInput
                    id="password"
                    title="Пароль"
                    type="password"
                    value={password}
                    placeholder="Введіть пароль"
                    onChange={(e) => setPassword(e.target.value)}
                    isError={!!error} />

                <a onClick={() => navigate("/auth/forgot")} className="pointer">
                    <p className="absolute right-0 bottom-0">Забули пароль?</p>
                </a>
            </div>

            <p className="login-error-message">{error || getEmptySymbol()}</p>

            <VerticalPad heightPx={10} />

            <SignInRegisterButton
                disabled={isLoadingEmailLogin}
                text="Вхід" />

            <VerticalPad heightPx={8} />

            <p className="login-register-offer">
                У вас немає аканту?<a className="login-register-offer-link pointer"
                                      onClick={() => navigate("/auth/register")}>Зареєструватись</a>
            </p>
        </form>
    );
};

export default LoginPage;
