import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import userReducer from "store/slice/userSlice.ts";
import { userApi } from "services/user.ts";
import { hotelApi } from "services/hotel.ts";
import { hotelCategoriesApi } from "services/hotelCategories.ts";
import { cityApi } from "services/city.ts";
import { countryApi } from "services/country.ts";
import { citizenshipApi } from "services/citizenship.ts";
import { hotelAmenityApi } from "services/hotelAmenity.ts";
import { roomAmenityApi } from "services/roomAmenity.ts";
import { languageApi } from "services/language.ts";
import { breakfastApi } from "services/breakfast.ts";
import { genderApi } from "services/gender.ts";

export const store = configureStore({
    reducer: {
        user: userReducer,
        [userApi.reducerPath]: userApi.reducer,
        [hotelApi.reducerPath]: hotelApi.reducer,
        [hotelCategoriesApi.reducerPath]: hotelCategoriesApi.reducer,
        [cityApi.reducerPath]: cityApi.reducer,
        [countryApi.reducerPath]: countryApi.reducer,
        [citizenshipApi.reducerPath]: citizenshipApi.reducer,
        [hotelAmenityApi.reducerPath]: hotelAmenityApi.reducer,
        [roomAmenityApi.reducerPath]: roomAmenityApi.reducer,
        [languageApi.reducerPath]: languageApi.reducer,
        [breakfastApi.reducerPath]: breakfastApi.reducer,
        [genderApi.reducerPath]: genderApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            userApi.middleware,
            hotelApi.middleware,
            hotelCategoriesApi.middleware,
            cityApi.middleware,
            countryApi.middleware,
            citizenshipApi.middleware,
            hotelAmenityApi.middleware,
            roomAmenityApi.middleware,
            languageApi.middleware,
            breakfastApi.middleware,
            genderApi.middleware,
        ),
});

setupListeners(store.dispatch);

// Типізація Redux
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
