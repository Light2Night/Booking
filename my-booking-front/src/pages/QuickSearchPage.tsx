import AccommodationBlock from "components/AccommodationBlock.tsx";
import Hero from "components/Hero.tsx";
import HowDoesItWork from "components/HowDoesItWork.tsx";
import AccommodationSearchCard from "components/cards/AccommodationSearchCard.tsx";
import { SwiperSlide } from "swiper/react";

const QuickSearchPage = () => {
    return (
        <>
            <Hero
                title={"Знайдіть ідеальне помешкання для відпустки"}
                subtitle={"Знайдіть помешкання для відпустки, які вам сподобаються найбільше"}
                isButton={false}
                img={"bg-hero-search"}
            />

            <AccommodationBlock id="swiper4" title={"Гості люблять ці приватні помешкання"}>
                {Array.from({ length: 20 }).map((_, index) => (
                    <SwiperSlide key={index}>
                        <AccommodationSearchCard
                            location="Київ, Україна"
                            rating={10}
                            name="Cracow Best Location Apartment"
                            imageSrc="https://picsum.photos/500/800"
                            key={index}
                            numberOfReviews={0}
                        />
                    </SwiperSlide>
                ))}
            </AccommodationBlock>

            <AccommodationBlock
                id="swiper5"
                title={"Додаткові послуги"}
                subtitle={"Стійка реєстрації заїзду, прибирання тощо"}
            >
                {Array.from({ length: 20 }).map((_, index) => (
                    <SwiperSlide key={index}>
                        <AccommodationSearchCard
                            location="Лондон, Велика Британія"
                            rating={10}
                            name="Cracow Best Location Apartment"
                            imageSrc="https://picsum.photos/600/800"
                            key={index}
                            numberOfReviews={0}
                        />
                    </SwiperSlide>
                ))}
            </AccommodationBlock>

            <AccommodationBlock
                id="swiper6"
                title={"Весь простір лише для вас"}
                subtitle={"Окремі приватні помешкання й житло цілком"}
            >
                {Array.from({ length: 20 }).map((_, index) => (
                    <SwiperSlide key={index}>
                        <AccommodationSearchCard
                            location="Лондон, Велика Британія"
                            rating={10}
                            name="Cracow Best Location Apartment"
                            imageSrc="https://picsum.photos/550/800"
                            key={index}
                            numberOfReviews={0}
                        />
                    </SwiperSlide>
                ))}
            </AccommodationBlock>

            <AccommodationBlock
                id="swiper7"
                title={"Для вашої поїздки з друзями"}
                subtitle={"Хороша оцінка від груп мандрівників"}
            >
                {Array.from({ length: 20 }).map((_, index) => (
                    <SwiperSlide key={index}>
                        <AccommodationSearchCard
                            location="Лондон, Велика Британія"
                            rating={10}
                            name="Cracow Best Location Apartment"
                            imageSrc="https://picsum.photos/570/800"
                            key={index}
                            numberOfReviews={0}
                        />
                    </SwiperSlide>
                ))}
            </AccommodationBlock>

            <AccommodationBlock
                id="swiper8"
                title={"Для поїздки на будь-який строк"}
                subtitle={"Приватні помешкання, де є все необхідне"}
            >
                {Array.from({ length: 20 }).map((_, index) => (
                    <SwiperSlide key={index}>
                        <AccommodationSearchCard
                            location="Лондон, Велика Британія"
                            rating={10}
                            name="Cracow Best Location Apartment"
                            imageSrc="https://picsum.photos/555/800"
                            key={index}
                            numberOfReviews={0}
                        />
                    </SwiperSlide>
                ))}
            </AccommodationBlock>

            <HowDoesItWork />
        </>
    );
};

export default QuickSearchPage;