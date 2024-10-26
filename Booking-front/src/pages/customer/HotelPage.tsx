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
                    <p className="global-title">Номери</p>

                    <table className="room-table">
                        <thead>
                        <tr>
                            <th>Тип номера</th>
                            <th>Кількість гостей</th>
                            <th>Тип ліжка</th>
                            <th>Переваги для вас</th>
                            <th>Ціна</th>
                            <th>Оберіть варіанти</th>
                            <th></th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr className="col-span-2">
                            <td className="room-type">
                                <p className="title">Стандартний номер</p>
                                <p className="warning">! Лише 3 номери залишилось на цьому сайті!</p>
                                <div className="features">
                                    <div>
                                        <img
                                            src={getPublicResourceUrl("icons/check.svg")}
                                            alt=""
                                        />
                                        <p>Туалет</p>
                                    </div>
                                    <div>
                                        <img
                                            src={getPublicResourceUrl("icons/check.svg")}
                                            alt=""
                                        />
                                        <p>Ванна або душ</p>
                                    </div>
                                    <div>
                                        <img
                                            src={getPublicResourceUrl("icons/check.svg")}
                                            alt=""
                                        />
                                        <p>Рушники</p>
                                    </div>
                                    <div>
                                        <img
                                            src={getPublicResourceUrl("icons/check.svg")}
                                            alt=""
                                        />
                                        <p>Білизна</p>
                                    </div>
                                    <div>
                                        <img
                                            src={getPublicResourceUrl("icons/check.svg")}
                                            alt=""
                                        />
                                        <p>Вітальня</p>
                                    </div>
                                    {/*<p>Телевізор</p>*/}
                                    {/*<p>Фен</p>*/}
                                    {/*<p>Робочий стіл</p>*/}
                                    {/*<p>Опалення</p>*/}
                                    {/*<p>Шафа або гардероб</p>*/}
                                </div>
                            </td>

                            <td className="peoples">
                                <div className="cols">
                                    <img
                                        src={getPublicResourceUrl("icons/homepageSvg/people.svg")}
                                        alt=""
                                    />
                                </div>
                                <div className="cols">
                                    <img
                                        src={getPublicResourceUrl("icons/homepageSvg/people.svg")}
                                        alt=""
                                    />
                                </div>
                            </td>

                            <td className="bed-type">
                                <div className="cols">
                                    <p className="title">Оберіть тип ліжка</p>
                                    <div className="flex">
                                        <input
                                            type="radio"
                                            id="bed1"
                                            name="bed-type"
                                        />
                                        <div className="title-svg">
                                            <label htmlFor="bed1">
                                                <p>1 двоспальне ліжко</p>
                                                <img
                                                    src={getPublicResourceUrl("icons/amenitiesSvg/double-bed.svg")}
                                                    alt=""
                                                />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="flex ">
                                        <input
                                            type="radio"
                                            id="bed2"
                                            name="bed-type"
                                        />
                                        <div className="title-svg">
                                            <label htmlFor="bed2">
                                                <p>2 односпальні ліжка</p>
                                                <div className="flex">
                                                    <img
                                                        src={getPublicResourceUrl("icons/amenitiesSvg/single-bed.svg")}
                                                        alt=""
                                                    />
                                                    <img
                                                        src={getPublicResourceUrl("icons/amenitiesSvg/single-bed.svg")}
                                                        alt=""
                                                    />
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="cols">
                                    <p className="title">Оберіть тип ліжка</p>
                                    <div className="flex">
                                        <input
                                            type="radio"
                                            id="bed1"
                                            name="bed-type"
                                        />
                                        <div className="title-svg">
                                            <label htmlFor="bed1">
                                                <p>1 двоспальне ліжко</p>
                                                <img
                                                    src={getPublicResourceUrl("icons/amenitiesSvg/double-bed.svg")}
                                                    alt=""
                                                />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="flex ">
                                        <input
                                            type="radio"
                                            id="bed2"
                                            name="bed-type"
                                        />
                                        <div className="title-svg">
                                            <label htmlFor="bed2">
                                                <p>2 односпальні ліжка</p>
                                                <div className="flex">
                                                    <img
                                                        src={getPublicResourceUrl("icons/amenitiesSvg/single-bed.svg")}
                                                        alt=""
                                                    />
                                                    <img
                                                        src={getPublicResourceUrl("icons/amenitiesSvg/single-bed.svg")}
                                                        alt=""
                                                    />
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </td>

                            <td className="advantages">
                                <div className="cols">
                                    <div className="flex flex-row">
                                        <img
                                            src={getPublicResourceUrl("icons/check.svg")}
                                            alt=""
                                        />
                                        <p>Сніданок включено</p>
                                    </div>
                                    <li className="font-semibold text-black">Вартість не повертається</li>
                                    <div className="flex flex-col gap-3">
                                        <div className="flex flex-row">
                                            <img
                                                src={getPublicResourceUrl("icons/check.svg")}
                                                alt=""
                                            />
                                            <p><span className="font-semibold">Безкоштовне скасування</span> до 15
                                                жовтня 2024 р.</p>
                                        </div>
                                        <div className="flex flex-row">
                                            <img
                                                src={getPublicResourceUrl("icons/check.svg")}
                                                alt=""
                                            />
                                            <p><span className="font-semibold">Без передплати</span> – сплачуйте в
                                                помешканні</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="cols">
                                    <div className="flex flex-row">
                                        <img
                                            src={getPublicResourceUrl("icons/check.svg")}
                                            alt=""
                                        />
                                        <p>Сніданок включено</p>
                                    </div>
                                    <li className="font-semibold text-black">Вартість не повертається</li>
                                    <div className="flex flex-col gap-3">
                                        <div className="flex flex-row">
                                            <img
                                                src={getPublicResourceUrl("icons/check.svg")}
                                                alt=""
                                            />
                                            <p><span className="font-semibold">Безкоштовне скасування</span> до 15
                                                жовтня 2024 р.</p>
                                        </div>
                                        <div className="flex flex-row">
                                            <img
                                                src={getPublicResourceUrl("icons/check.svg")}
                                                alt=""
                                            />
                                            <p><span className="font-semibold">Без передплати</span> – сплачуйте в
                                                помешканні</p>
                                        </div>
                                    </div>
                                </div>
                            </td>

                            <td className="price">
                                <div className="cols">
                                    <div className="flex flex-row gap-2">
                                        <p className="new-price">1520<span>₴</span></p>
                                        <p className="old-price">2200₴</p>
                                    </div>
                                    <p className="description">Включає податки та збори</p>
                                </div>
                                <div className="cols">
                                    <div className="flex flex-row gap-2">
                                        <p className="new-price">1520<span>₴</span></p>
                                        <p className="old-price">2200₴</p>
                                    </div>
                                    <p className="description">Включає податки та збори</p>
                                </div>
                            </td>

                            <td className="select-options">
                                <div className="cols">
                                    <select>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                    </select>
                                </div>
                                <div className="cols">
                                    <select>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                    </select>
                                </div>
                            </td>

                            <td className="book">
                                <button className="btn-book">Забронювати</button>
                                <p>Миттєве підтвердження</p>
                            </td>
                        </tr>

                        <tr className="col-span-2">
                            <td className="room-type">
                                <p className="title">Двомісний номер з видом на озеро</p>
                                <p className="warning">! Лише 3 номери залишилось на цьому сайті!</p>
                                <div className="features">
                                    <div>
                                        <img
                                            src={getPublicResourceUrl("icons/check.svg")}
                                            alt=""
                                        />
                                        <p>Туалет</p>
                                    </div>
                                    <div>
                                        <img
                                            src={getPublicResourceUrl("icons/check.svg")}
                                            alt=""
                                        />
                                        <p>Ванна або душ</p>
                                    </div>
                                    <div>
                                        <img
                                            src={getPublicResourceUrl("icons/check.svg")}
                                            alt=""
                                        />
                                        <p>Рушники</p>
                                    </div>
                                    <div>
                                        <img
                                            src={getPublicResourceUrl("icons/check.svg")}
                                            alt=""
                                        />
                                        <p>Білизна</p>
                                    </div>
                                    <div>
                                        <img
                                            src={getPublicResourceUrl("icons/check.svg")}
                                            alt=""
                                        />
                                        <p>Вітальня</p>
                                    </div>
                                    {/*<p>Телевізор</p>*/}
                                    {/*<p>Фен</p>*/}
                                    {/*<p>Робочий стіл</p>*/}
                                    {/*<p>Опалення</p>*/}
                                    {/*<p>Шафа або гардероб</p>*/}
                                </div>
                            </td>

                            <td className="peoples">
                                <div className="cols">
                                    <img
                                        src={getPublicResourceUrl("icons/homepageSvg/people.svg")}
                                        alt=""
                                    />
                                </div>
                                <div className="cols">
                                    <img
                                        src={getPublicResourceUrl("icons/homepageSvg/people.svg")}
                                        alt=""
                                    />
                                </div>
                                <div className="cols">
                                    <img
                                        src={getPublicResourceUrl("icons/homepageSvg/people.svg")}
                                        alt=""
                                    />
                                    <img
                                        src={getPublicResourceUrl("icons/homepageSvg/people.svg")}
                                        alt=""
                                    />
                                </div>
                            </td>

                            <td className="bed-type">
                                <div className="cols">
                                    <p className="title">Оберіть тип ліжка</p>
                                    <div className="flex">
                                        <input
                                            type="radio"
                                            id="bed1"
                                            name="bed-type"
                                        />
                                        <div className="title-svg">
                                            <label htmlFor="bed1">
                                                <p>1 двоспальне ліжко</p>
                                                <img
                                                    src={getPublicResourceUrl("icons/amenitiesSvg/double-bed.svg")}
                                                    alt=""
                                                />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="flex ">
                                        <input
                                            type="radio"
                                            id="bed2"
                                            name="bed-type"
                                        />
                                        <div className="title-svg">
                                            <label htmlFor="bed2">
                                                <p>2 односпальні ліжка</p>
                                                <div className="flex">
                                                    <img
                                                        src={getPublicResourceUrl("icons/amenitiesSvg/single-bed.svg")}
                                                        alt=""
                                                    />
                                                    <img
                                                        src={getPublicResourceUrl("icons/amenitiesSvg/single-bed.svg")}
                                                        alt=""
                                                    />
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="cols">
                                    <p className="title">Оберіть тип ліжка</p>
                                    <div className="flex">
                                        <input
                                            type="radio"
                                            id="bed1"
                                            name="bed-type"
                                        />
                                        <div className="title-svg">
                                            <label htmlFor="bed1">
                                                <p>1 двоспальне ліжко</p>
                                                <img
                                                    src={getPublicResourceUrl("icons/amenitiesSvg/double-bed.svg")}
                                                    alt=""
                                                />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="flex ">
                                        <input
                                            type="radio"
                                            id="bed2"
                                            name="bed-type"
                                        />
                                        <div className="title-svg">
                                            <label htmlFor="bed2">
                                                <p>2 односпальні ліжка</p>
                                                <div className="flex">
                                                    <img
                                                        src={getPublicResourceUrl("icons/amenitiesSvg/single-bed.svg")}
                                                        alt=""
                                                    />
                                                    <img
                                                        src={getPublicResourceUrl("icons/amenitiesSvg/single-bed.svg")}
                                                        alt=""
                                                    />
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="cols">
                                    <p className="title">Оберіть тип ліжка</p>
                                    <div className="flex">
                                        <input
                                            type="radio"
                                            id="bed1"
                                            name="bed-type"
                                        />
                                        <div className="title-svg">
                                            <label htmlFor="bed1">
                                                <p>1 двоспальне ліжко</p>
                                                <img
                                                    src={getPublicResourceUrl("icons/amenitiesSvg/double-bed.svg")}
                                                    alt=""
                                                />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="flex ">
                                        <input
                                            type="radio"
                                            id="bed2"
                                            name="bed-type"
                                        />
                                        <div className="title-svg">
                                            <label htmlFor="bed2">
                                                <p>2 односпальні ліжка</p>
                                                <div className="flex">
                                                    <img
                                                        src={getPublicResourceUrl("icons/amenitiesSvg/single-bed.svg")}
                                                        alt=""
                                                    />
                                                    <img
                                                        src={getPublicResourceUrl("icons/amenitiesSvg/single-bed.svg")}
                                                        alt=""
                                                    />
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </td>

                            <td className="advantages">
                                <div className="cols">
                                    <div className="flex flex-row">
                                        <img
                                            src={getPublicResourceUrl("icons/check.svg")}
                                            alt=""
                                        />
                                        <p>Сніданок включено</p>
                                    </div>
                                    <li className="font-semibold text-black">Вартість не повертається</li>
                                    <div className="flex flex-col gap-3">
                                        <div className="flex flex-row">
                                            <img
                                                src={getPublicResourceUrl("icons/check.svg")}
                                                alt=""
                                            />
                                            <p><span className="font-semibold">Безкоштовне скасування</span> до 15
                                                жовтня 2024 р.</p>
                                        </div>
                                        <div className="flex flex-row">
                                            <img
                                                src={getPublicResourceUrl("icons/check.svg")}
                                                alt=""
                                            />
                                            <p><span className="font-semibold">Без передплати</span> – сплачуйте в
                                                помешканні</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="cols">
                                    <div className="flex flex-row">
                                        <img
                                            src={getPublicResourceUrl("icons/check.svg")}
                                            alt=""
                                        />
                                        <p>Сніданок включено</p>
                                    </div>
                                    <li className="font-semibold text-black">Вартість не повертається</li>
                                    <div className="flex flex-col gap-3">
                                        <div className="flex flex-row">
                                            <img
                                                src={getPublicResourceUrl("icons/check.svg")}
                                                alt=""
                                            />
                                            <p><span className="font-semibold">Безкоштовне скасування</span> до 15
                                                жовтня 2024 р.</p>
                                        </div>
                                        <div className="flex flex-row">
                                            <img
                                                src={getPublicResourceUrl("icons/check.svg")}
                                                alt=""
                                            />
                                            <p><span className="font-semibold">Без передплати</span> – сплачуйте в
                                                помешканні</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="cols">
                                    <div className="flex flex-row">
                                        <img
                                            src={getPublicResourceUrl("icons/check.svg")}
                                            alt=""
                                        />
                                        <p>Сніданок включено</p>
                                    </div>
                                    <li className="font-semibold text-black">Вартість не повертається</li>
                                    <div className="flex flex-col gap-3">
                                        <div className="flex flex-row">
                                            <img
                                                src={getPublicResourceUrl("icons/check.svg")}
                                                alt=""
                                            />
                                            <p><span className="font-semibold">Безкоштовне скасування</span> до 15
                                                жовтня 2024 р.</p>
                                        </div>
                                        <div className="flex flex-row">
                                            <img
                                                src={getPublicResourceUrl("icons/check.svg")}
                                                alt=""
                                            />
                                            <p><span className="font-semibold">Без передплати</span> – сплачуйте в
                                                помешканні</p>
                                        </div>
                                    </div>
                                </div>
                            </td>

                            <td className="price">
                                <div className="cols">
                                    <div className="flex flex-row gap-2">
                                        <p className="new-price">1520<span>₴</span></p>
                                        <p className="old-price">2200₴</p>
                                    </div>
                                    <p className="description">Включає податки та збори</p>
                                </div>
                                <div className="cols">
                                    <div className="flex flex-row gap-2">
                                        <p className="new-price">1520<span>₴</span></p>
                                        <p className="old-price">2200₴</p>
                                    </div>
                                    <p className="description">Включає податки та збори</p>
                                </div>
                                <div className="cols">
                                    <div className="flex flex-row gap-2">
                                        <p className="new-price">1520<span>₴</span></p>
                                        <p className="old-price">2200₴</p>
                                    </div>
                                    <p className="description">Включає податки та збори</p>
                                </div>
                            </td>

                            <td className="select-options">
                                <div className="cols">
                                    <select>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                    </select>
                                </div>
                                <div className="cols">
                                    <select>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                    </select>
                                </div>
                                <div className="cols">
                                    <select>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                    </select>
                                </div>
                            </td>

                            <td className="book">
                                <button className="btn-book">Забронювати</button>
                                <p>Миттєве підтвердження</p>
                            </td>
                        </tr>

                        </tbody>
                    </table>

                </div>
            </div>

            <div className="reviews-content">
                <p className="title">Відгуки гостей</p>

                <div className="count">
                    <div className="rating">
                        <p>9.2</p>
                        <p>чудово</p>
                    </div>
                    <div className="reviews-count">
                        <p><span>5</span> відгуків</p>
                        <a href="#reviews">читати відгуки</a>
                    </div>
                </div>

                {/*<div className="ratings">*/}
                {/*    <div className="rating-bar">*/}
                {/*        <div className="text-rating">*/}
                {/*            <p>Персонал</p>*/}
                {/*            <p>9.2</p>*/}
                {/*        </div>*/}
                {/*        <div className="bar">*/}
                {/*            <div className="pre-bar"></div>*/}
                {/*            <div className="active-bar"></div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="rating-bar">*/}
                {/*        <div className="text-rating">*/}
                {/*            <p>Чистота</p>*/}
                {/*            <p>9.2</p>*/}
                {/*        </div>*/}
                {/*        <div className="bar">*/}
                {/*            <div className="pre-bar"></div>*/}
                {/*            <div className="active-bar"></div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="rating-bar">*/}
                {/*        <div className="text-rating">*/}
                {/*            <p>Зручності</p>*/}
                {/*            <p>9.2</p>*/}
                {/*        </div>*/}
                {/*        <div className="bar">*/}
                {/*            <div className="pre-bar"></div>*/}
                {/*            <div className="active-bar"></div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="rating-bar">*/}
                {/*        <div className="text-rating">*/}
                {/*            <p>Комфорт</p>*/}
                {/*            <p>9.2</p>*/}
                {/*        </div>*/}
                {/*        <div className="bar">*/}
                {/*            <div className="pre-bar"></div>*/}
                {/*            <div className="active-bar"></div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="rating-bar">*/}
                {/*        <div className="text-rating">*/}
                {/*            <p>Розташування</p>*/}
                {/*            <p>9.2</p>*/}
                {/*        </div>*/}
                {/*        <div className="bar">*/}
                {/*            <div className="pre-bar"></div>*/}
                {/*            <div className="active-bar"></div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="rating-bar">*/}
                {/*        <div className="text-rating">*/}
                {/*            <p>Співвідношення ціна/якість</p>*/}
                {/*            <p>9.2</p>*/}
                {/*        </div>*/}
                {/*        <div className="bar">*/}
                {/*            <div className="pre-bar"></div>*/}
                {/*            <div className="active-bar"></div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

                <div className="reviews">
                    <div className="review">
                        <div className="author">
                            <div className="image">
                                <img
                                    src={getPublicResourceUrl('account/no_user_photo.png')}
                                    alt="realtor name"
                                />
                            </div>
                            <div className="container9">
                                <p className="name">Марія</p>
                                <div className="stars-container">
                                    <img
                                        src={getPublicResourceUrl("account/star.svg")}
                                        alt=""
                                        className="star"
                                    />
                                    <p className="rating">
                                        9.7
                                    </p>
                                </div>
                            </div>
                        </div>

                        <p className="description">
                            Розташування було дуже близько до центру міста. Господар був дуже добрим. Квартира була
                            дуже чистою та дуже добре мебльованою. Ціна була дуже хорошою.
                        </p>

                        <button className="btn-delete">
                            <img
                                src={getPublicResourceUrl("account/trash.svg")}
                                alt=""/>
                        </button>
                    </div>
                    <div className="review">
                        <div className="author">
                            <div className="image">
                                <img
                                    src={getPublicResourceUrl('account/no_user_photo.png')}
                                    alt="realtor name"
                                />
                            </div>
                            <div className="container9">
                                <p className="name">Олександра dsad as d asd dad s </p>
                                <div className="stars-container">
                                    <img
                                        src={getPublicResourceUrl("account/star.svg")}
                                        alt=""
                                        className="star"
                                    />
                                    <p className="rating">
                                        9.7
                                    </p>
                                </div>
                            </div>

                        </div>

                        <p className="description">
                            Розташування було дуже близько до центру міста. Господар був дуже добрим. Квартира була
                            дуже
                            чистою та дуже добре мебльованою. Ціна була дуже хорошою.Розташування було дуже близько
                            до центру міста. Господар був дуже добрим. Квартира була дуже
                            чистою та дуже добре мебльованою. Ціна була дуже хорошою.Розташування було дуже близько
                            до центру міста. Господар був дуже добрим. Квартира була дуже
                            чистою та дуже добре мебльованою. Ціна була дуже хорошою.
                        </p>
                    </div>
                    <div className="review">
                        <div className="author">
                            <div className="image">
                                <img
                                    src={getPublicResourceUrl('account/no_user_photo.png')}
                                    alt="realtor name"
                                />
                            </div>
                            <div className="container9">
                                <p className="name">Даніела</p>
                                <div className="stars-container">
                                    <img
                                        src={getPublicResourceUrl("account/star.svg")}
                                        alt=""
                                        className="star"
                                    />
                                    <p className="rating">
                                        9.7
                                    </p>
                                </div>
                            </div>

                        </div>

                        <p className="description">
                            Розташування було дуже близько до центру міста. Господар був дуже добрим. Квартира була
                            дуже
                            чистою та дуже добре мебльованою. Ціна була дуже хорошою.
                        </p>
                    </div>
                </div>

                <button className="btn-more">
                    Більше відгуків
                </button>
            </div>

            <div className="questions-content">
                <div className="title">Найчастіші запитання</div>

                <div className="questions">
                    <div className="question">Чи є місце для парковки? <span>&#8250;</span></div>
                    <div className="question">Ви подаєте сніданок? <span>&#8250;</span></div>
                    <div className="question">Чи є ресторан? <span>&#8250;</span></div>
                    <div className="question">Чи є спа-центр? <span>&#8250;</span></div>
                    <div className="question">Які умови користування Wi-Fi? <span>&#8250;</span></div>
                    <div className="question">Чи є трансфер до аеропорту? <span>&#8250;</span></div>
                    <div className="question">Які умови розміщення з домашніми тваринами? <span>&#8250;</span></div>
                    <div className="question">Тут є обслуговування номерів? <span>&#8250;</span></div>
                    <div className="question">Тут є номер для некурців? <span>&#8250;</span></div>
                    <div className="question">Є тренажерний зал? <span>&#8250;</span></div>
                    <div className="question">Чи є трансфер до аеропорту? <span>&#8250;</span></div>
                    <div className="question">Які умови розміщення з домашніми тваринами? <span>&#8250;</span></div>
                    <div className="question">
                        <p className="question-title">Вас цікавить інше питання?</p>
                        <p className="question-subtitle">У нас є миттєва відповідь на найбільш поширені запитання</p>
                        <div className="w-full relative">
                            <input type="text" placeholder="Поставте запитання"/>
                            <button>Надіслати</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default HotelPage;