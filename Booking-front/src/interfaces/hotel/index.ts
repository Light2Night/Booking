import { City } from "interfaces/city";
import { HotelCategories } from "interfaces/hotelCategories";
// import { PaginationOptions } from "interfaces/hotel.ts";

export interface IAddressCreate {
    id: number;
    street: string;
    houseNumber: string;
    floor?: number;
    apartmentNumber?: string;
    cityId: number;
}

export interface IHotelCreate {
    id: number;
    name: string;
    description: string;
    arrivalTimeUtcFrom: string;
    arrivalTimeUtcTo: string;
    departureTimeUtcFrom: string;
    departureTimeUtcTo: string;
    isArchived?: boolean;
    address: IAddressCreate;
    categoryId: number;
    hotelAmenityIds?: number[];
    breakfastIds?: number[];
    staffLanguageIds?: number[];
    photos: Photos;
}

export interface Photos {
    name: string;
}

export interface Realtor {
    id: number;
}

export interface SetArchiveStatusRequest {
    id: number;
    isArchived: boolean;
}

// export interface GetHotelPageRequest extends PaginationOptions {
//     userId?: number;
//     name?: string;
//     description?: string;
//     rating?: number;
//     minRating?: number;
//     maxRating?: number;
//     typeId?: number;
//     address?: HotelAddress;
// }
