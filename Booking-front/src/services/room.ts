import { createApi } from "@reduxjs/toolkit/query/react";
import { createBaseQuery } from "utils/apiUtils.ts";
import IRoom, { RoomVariantsFreeRequest } from "interfaces/room/IRoom.ts";
import { toQueryFromIRoomPageQuery } from "interfaces/room/IRoomPageQuery.ts";
import IPage from "interfaces/page/IPage.ts";
import IRoomPageQuery from "interfaces/room/IRoomPageQuery.ts";
import { IRoomCreate } from "interfaces/room/IRoomCreate.ts";

export const roomApi = createApi({
    reducerPath: "roomApi",
    baseQuery: createBaseQuery("rooms"),
    tagTypes: ["Rooms"],

    endpoints: (builder) => ({

        getRoom: builder.query<IRoom, number>({
            query: (id) => `getById/${id}`,
            providesTags: ["Rooms"],
        }),

        getRoomsPage: builder.query<IPage<IRoom>, IRoomPageQuery | undefined>({
            query: (query) => {
                const baseQuery = "GetPage";

                if (!query)
                    return baseQuery;

                return `${baseQuery}?${toQueryFromIRoomPageQuery(query)}`;
            },
            providesTags: ["Rooms"],
        }),

        createRoom: builder.mutation<number, IRoomCreate>({
            query: (room) => ({
                url: "create",
                method: "POST",
                body: room,
                headers: {
                    "Content-Type": "application/json",
                },
            }),
            invalidatesTags: ["Rooms"],
        }),

        deleteRoom: builder.mutation({
            query: (id: number) => ({
                url: `delete/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Rooms"],
        }),

        getRoomVariantsFreeQuantity: builder.query<number, RoomVariantsFreeRequest>({
            query: ({ id, freePeriod }) => ({
                url: `getRoomVariantsFreeQuantity?id=${id}&freePeriod.from=${freePeriod.from}&freePeriod.to=${freePeriod.to}`,
                method: "GET",
            }),
            providesTags: ["Rooms"],
        }),
    }),
});

export const {
    useGetRoomQuery,
    useGetRoomsPageQuery,
    useCreateRoomMutation,
    useDeleteRoomMutation,
    useGetRoomVariantsFreeQuantityQuery,
} = roomApi;