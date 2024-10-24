import { getPublicResourceUrl } from "utils/publicAccessor.ts";
import "../css/footer.scss";

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="footer-container">
                <div className="footer-section side-section">
                    <img src={getPublicResourceUrl("logo/Logo_white.svg")} alt="EasyStay Logo" />
                    <h2>Найкращі пропозиції житла для комфортного відпочинку!</h2>
                </div>
                <div className="footer-section">
                    <h3>Загальна інформація</h3>
                    <ul>
                        <li><a href="info">Про EasyStay</a></li>
                        <li><a href="info">Як ми працюємо</a></li>
                        <li><a href="info">Для регіонів</a></li>
                        <li><a href="info">Про EasyStay</a></li>
                        <li><a href="info">Як ми працюємо</a></li>
                        <li><a href="info">Для рієлторів</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Правила та налаштування</h3>
                    <ul>
                        <li><a href="info">Керуйте своїми подорожами</a></li>
                        <li><a href="info">Правила та умови</a></li>
                        <li><a href="info">Підтримка</a></li>
                        <li><a href="info">Керуйте своїми подорожами</a></li>
                        <li><a href="info">Правила та умови</a></li>
                        <li><a href="info">Підтримка</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Загальна інформація</h3>
                    <ul>
                        <li><a href="info">Про EasyStay</a></li>
                        <li><a href="info">Як ми працюємо</a></li>
                        <li><a href="info">Для регіонів</a></li>
                        <li><a href="info">Про EasyStay</a></li>
                        <li><a href="info">Як ми працюємо</a></li>
                        <li><a href="info">Для рієлторів</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Правила та налаштування</h3>
                    <ul>
                        <li><a href="info">Керуйте своїми подорожами</a></li>
                        <li><a href="info">Правила та умови</a></li>
                        <li><a href="info">Підтримка</a></li>
                        <li><a href="info">Керуйте своїми подорожами</a></li>
                        <li><a href="info">Правила та умови</a></li>
                        <li><a href="info">Підтримка</a></li>
                    </ul>
                </div>
                <div className="footer-section side-section">
                    <h3>Отримувати новини про знижки</h3>
                    <div className="footer-subscribe-box">
                        <input
                            type="email"
                            placeholder="Введіть ваш емейл"
                            className="footer-subscribe-input"
                        />
                        <button className="footer-subscribe-button">Підписатись</button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;