import { getPublicResourceUrl } from "utils/publicAccessor.ts";
import { getUser } from "store/slice/userSlice.ts";
import { useSelector } from "react-redux";
import { IRoomVariantWithRoom } from "pages/customer/BookingPage/BookingPage.tsx";
import IHotelAmenity from "interfaces/hotelAmenity/IHotelAmenity.ts";
import BookingInfoBlock from "components/partials/customer/BookingPersonalData/BookingInfoBlock/BookingInfoBlock.tsx";
import PersonalDataBlock
    from "components/partials/customer/BookingPersonalData/PersonalDataBlock/PersonalDataBlock.tsx";

interface IBookingPersonalDataProps {
    roomName: string;
    roomVariantInfos: IRoomVariantWithRoom[];
    hotelAmenities: IHotelAmenity[];

    onNext: () => void;
}

const BookingPersonalData = (props: IBookingPersonalDataProps) => {
    const user = useSelector(getUser);
    if (!user)
        throw new Error("User is not authorized");

    return <div className="personal-data-container">
        <div className="message-container">
            <img src={getPublicResourceUrl("/icons/info/info.svg")} alt="info" />
            <div>
                <p>Майже готово! Залишилося заповнити <span className="red-text">*</span> обов'язкові поля.</p>
                <p>Будь ласка, введіть усі дані латинкою, щоб в адміністрації помешкання змогли їх зрозуміти.</p>
            </div>
        </div>

        <PersonalDataBlock user={user} />

        <BookingInfoBlock
            roomName={props.roomName}
            roomVariantInfos={props.roomVariantInfos}
            hotelAmenities={props.hotelAmenities}
            user={user}
        />
    </div>;
};

export default BookingPersonalData;