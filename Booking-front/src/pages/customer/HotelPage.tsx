import SearchHotelSection from "components/partials/customer/SearchHotelSection.tsx";
import {getPublicResourceUrl} from "utils/publicAccessor.ts";

const HotelPage = () => {


    return (
        <div className="hotel-page">

            <div className="hotel-section">

                <div className="pages-info">
                    <div className="pages">
                        <a>Типи номерів</a>
                        <a>Відгуки</a>
                        <a>Питання</a>
                        <a>Зручності</a>
                        <a>Інформація</a>
                    </div>

                    <div className="hotel-info">
                        <div className="top">
                            <div className="name-favorite">
                                <div className="name-rating">
                                    <p className="name">Radisson Blu Hotel</p>
                                    <div className="rating">
                                        <img
                                            src={getPublicResourceUrl("account/star.svg")}
                                            alt=""
                                            className="star"
                                        />
                                        <p>
                                            9.7
                                        </p>
                                    </div>
                                </div>

                                <button className="btn-favorite">
                                    <img
                                        src={getPublicResourceUrl("icons/heart.svg")}
                                        alt=""
                                    />
                                </button>
                            </div>

                            <div className="location">
                                <img
                                    src={getPublicResourceUrl("icons/location.svg")}
                                    alt=""
                                />
                                <p className="city">Барселона</p>
                                <p>, </p>
                                <p className="country"> Іспанія</p>
                                <p> / </p>
                                <p className="address">Carrer de Johann Sebastian Bach, 18</p>
                            </div>
                        </div>

                        <div className="amenities">
                            <div className="amenity">
                                <img
                                    src={getPublicResourceUrl("icons/amenitiesSvg/city-view.svg")}
                                    alt=""
                                />
                                <p>Вид на місто</p>
                            </div>
                            <div className="amenity">
                                <img
                                    src={getPublicResourceUrl("icons/amenitiesSvg/bath.svg")}
                                    alt=""
                                />
                                <p>Ванна кімната у номері</p>
                            </div>
                            <div className="amenity">
                                <img
                                    src={getPublicResourceUrl("icons/amenitiesSvg/air-conditioner.svg")}
                                    alt=""
                                />
                                <p>Кондиціонер</p>
                            </div>
                            <div className="amenity">
                                <img
                                    src={getPublicResourceUrl("icons/amenitiesSvg/city-view.svg")}
                                    alt=""
                                />
                                <p>Вид на місто</p>
                            </div>
                        </div>

                        <p className="description">
                            У помешканні Messe-Congress Central with balcony, розміщеному приблизно за менше ніж 1 км
                            від пам'ятки "Конференц-центр Messe Wien", до розпорядження гостей комфортне перебування з
                            красивим видом на басейн. Також для зручності гостей тераса та балкон. У помешканні
                            Messe-Congress Central with balcony, яке розміщено за 14 хв. ходьби від пам'ятки "Віденський
                            парк Пратер", доступний безкоштовний Wi-Fi.
                            <br/>
                            <br/>
                            Це помешкання (апартаменти) складається зі спалень (1), вітальнi, повністю обладнаної кухні
                            з холодильником і кавоваркою, а також ванних кімнат (1) з душем та безкоштовними
                            туалетно-косметичними засобами. У цьому помешканні для зручності гостей є постільна білизна
                            та рушники.
                            <br/>
                            <br/>
                            Працівники стійки реєстрації говорять такими мовами – німецька, англійська, іврит та
                            російська – і нададуть гостям необхідні поради про околиці помешкання. Помешкання
                            Messe-Congress Central with balcony розміщено за 2,9 км від пам'ятки "Стадіон Ернста
                            Хаппеля". Найближчий аеропорт до помешкання Messe-Congress Central with balcony – Аеропорт
                            Відень-Швехат, що розташований за 19 км.
                            <br/>
                            <br/>
                            Це місце розташування особливо подобається індивідуальним мандрівникам – вони оцінили його
                            на 9,0 для подорожі наодинці.
                        </p>

                        <div className="bottom">
                            <p className="title-about">Про власника</p>

                            <div className="realtor-rating">
                                <p className="name">Дмитро Романчук</p>

                                <div className="rating">
                                    <img
                                        src={getPublicResourceUrl("account/star.svg")}
                                        alt=""
                                    />
                                    <p>9.7</p>
                                </div>
                            </div>

                            <p className="description">З багаторічним досвідом у сфері нерухомості, я пропоную широкий
                                вибір комфортних апартаментів та будинків у найкращих локаціях.</p>
                        </div>
                    </div>
                </div>

                <div className="photos">

                    <img
                        src=""
                        alt=""
                        className="first-photo"
                    />

                    <div className="row-photos">

                        <button>
                            <img
                                src=""
                                alt=""
                            />
                        </button>

                        <button>
                            <img
                                src=""
                                alt=""
                            />
                        </button>

                        <button>
                            <img
                                src=""
                                alt=""
                            />
                        </button>

                        <button className="photo-more">
                            <p>+<span>2</span> фото</p>
                            <img
                                src=""
                                alt=""
                            />
                        </button>

                    </div>

                    <img
                        src=""
                        alt=""
                        className="last-photo"
                    />

                </div>
            </div>


            <div className="search-rooms">
                <SearchHotelSection/>

                <div className="rooms">

                </div>
            </div>

            <div className="reviews">

            </div>

            <div className="questions">

            </div>

        </div>
    );
}

export default HotelPage;