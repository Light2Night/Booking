import BookingHotelCard from "components/cards/BookingHotelCard.tsx";
import BookingHotelCardSkeleton from "components/skeletons/BookingHotelCardSkeleton.tsx";
import Label from "components/ui/Label.tsx";
import { useGetPageBookingsQuery } from "services/booking.ts";

const MyBookingsPage = () => {
    const { data, isSuccess } = useGetPageBookingsQuery({});

    return (
        <div className="container mx-auto mt-5 flex flex-col gap-5">
            <Label variant="extra">Бронювання й поїздки</Label>

            <div className="flex flex-col gap-3">
                {!isSuccess &&
                    Array.from({ length: 10 }).map((_, index) => <BookingHotelCardSkeleton key={index} />)}

                {data?.data.map((booking) => <BookingHotelCard key={booking.id} {...booking} />)}
            </div>
        </div>
    );
};

export default MyBookingsPage;