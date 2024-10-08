import ProtectedRoute from "components/guards/ProtectedRoute.tsx";
import AccountLayout from "components/layout/AccountLayout.tsx";
import Layout from "components/layout/Layout.tsx";
import BookingPage from "pages/BookingPage.tsx";
import HomePage from "pages/HomePage.tsx";
import HotelCreatePage from "pages/HotelCreatePage.tsx";
import HotelPage from "pages/HotelPage.tsx";
import LoginPage from "pages/LoginPage.tsx";
import MapCityPage from "pages/MapCityPage.tsx";
import MapWayToHotelPage from "pages/MapWayToHotelPage.tsx";
import MyBookingsPage from "pages/MyBookingsPage.tsx";
import MyHotelsPage from "pages/MyHotelsPage.tsx";
import MySavedPage from "pages/MySavedPage.tsx";
import PersonalizedHotelResultsPage from "pages/PersonalizedHotelResultsPage.tsx";
import RegisterPage from "pages/RegisterPage.tsx";
import RoomCreatePage from "pages/RoomCreatePage.tsx";
import SearchHotelResultsPage from "pages/SearchHotelResultsPage.tsx";
import TypeHotelResultsPage from "pages/TypeHotelResultsPage.tsx";
import { Route, Routes } from "react-router-dom";
import { useGetUserFavoriteHotelsQuery } from "services/favoriteHotels.ts";
import { useAppDispatch } from "store/index.ts";
import { setFavorite, setLocation } from "store/slice/userSlice.ts";

import { useEffect } from "react";

function App() {
    const dispatch = useAppDispatch();
    const { data: favoriteHotels } = useGetUserFavoriteHotelsQuery();

    useEffect(() => {
        if (!navigator.geolocation) {
        } else {
            navigator.geolocation.getCurrentPosition((position) => {
                dispatch(
                    setLocation({ latitude: position.coords.latitude, longitude: position.coords.longitude }),
                );
            });
        }
    }, []);

    useEffect(() => {
        if (favoriteHotels) {
            dispatch(setFavorite(favoriteHotels.data));
        }
    }, [favoriteHotels]);

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="search-accommodation" element={<PersonalizedHotelResultsPage />} />
                <Route path="search-types/:id" element={<TypeHotelResultsPage />} />
                <Route path="search-map" element={<MapCityPage />} />
                <Route path="search-results" element={<SearchHotelResultsPage />} />
                <Route path="hotel/:id" element={<HotelPage />} />
                <Route path="way-to-hotel/:id" element={<MapWayToHotelPage />} />

                {/*<Route element={<ProtectedRoute />}>*/}
                    <Route path="my-hotels" element={<MyHotelsPage />} />
                    <Route path="my-bookings" element={<MyBookingsPage />} />
                    <Route path="my-saved" element={<MySavedPage />} />
                    <Route path="booking/:id" element={<BookingPage />} />
                    <Route path="hotel/create" element={<HotelCreatePage />} />
                    <Route path="room/create/:hotelId" element={<RoomCreatePage />} />
                {/*</Route>*/}
            </Route>

            <Route path="/auth/" element={<AccountLayout />}>
                <Route path="login" element={<LoginPage />} />
                <Route path="register" element={<RegisterPage />} />
            </Route>
        </Routes>
    );
}

export default App;
