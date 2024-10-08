import { createApi } from "@reduxjs/toolkit/query/react";
// import { City, GetCityPageRequest } from "interfaces/country";
import { City, CreateCity } from "interfaces/city";
// import { GetPageResponse } from "interfaces/hotel.ts";
import { createBaseQuery } from "utils/apiUtils.ts";
// import { createQueryString } from "utils/createQueryString.ts";

export const cityApi = createApi({
    reducerPath: "cityApi",
    baseQuery: createBaseQuery("cities"),
    tagTypes: ["Cities"],

    endpoints: (builder) => ({
        getCity: builder.query<City[], string>({
            query: (id) => `getById/${id}`,
        }),

        getAllCities: builder.query<City[], void>({
            query: () => "getAll",
            providesTags: ["Cities"],
        }),

        // getPageCities: builder.query<GetPageResponse<City>, GetCityPageRequest>({
        //     query: (params) => {
        //         const queryString = createQueryString(params as Record<string, any>);
        //         return `getPage?${queryString}`;
        //     },
        // }),

        addCity: builder.mutation({
            query: (city: CreateCity) => {
                const cityFormData = new FormData();
                cityFormData.append("Name", city.name);
                cityFormData.append("Longitude", city.longitude.toString());
                cityFormData.append("Latitude", city.latitude.toString());
                cityFormData.append("CountryId", city.country.id.toString());
                if (city.image) {
                    cityFormData.append("Image", city.image);
                }

                return {
                    url: "create",
                    method: "POST",
                    body: cityFormData,
                };
            },
            invalidatesTags: ["Cities"],
        }),

        updateCity: builder.mutation({
            query: (city: City) => {
                const cityFormData = new FormData();
                cityFormData.append("Id", city.id.toString());
                cityFormData.append("Name", city.name);
                cityFormData.append("Longitude", city.longitude.toString());
                cityFormData.append("Latitude", city.latitude.toString());
                cityFormData.append("CountryId", city.country.id.toString());
                if (city.image) {
                    cityFormData.append("Image", city.image);
                }

                return {
                    url: `update`,
                    method: "PUT",
                    body: cityFormData,
                }
            },
            invalidatesTags: ["Cities"],
        }),

        deleteCity: builder.mutation({
            query: (id: number) => ({
                url: `delete/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Cities"],
        }),
    }),
});

export const {
    useGetCityQuery,
    useGetAllCitiesQuery,
    useAddCityMutation,
    useUpdateCityMutation,
    useDeleteCityMutation,
    // useGetPageCitiesQuery
} = cityApi;
