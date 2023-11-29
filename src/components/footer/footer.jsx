import { Link } from "react-router-dom"
import cls from "./styles.module.scss"
import { SlSocialFacebook, SlSocialInstagram } from "react-icons/sl";
import { PiTelegramLogo } from "react-icons/pi";

export const Footer = () => {
    return (
        <footer className={cls.footerWrapper}>
            <nav className={cls.navigation}>
                <ul>
                    <li><Link to="#">LOGO</Link></li>
                    <li><Link to="#">Филиалы</Link></li>
                    <li><Link to="#">О нас</Link></li>
                    <li><Link to="#">Контакты</Link></li>
                </ul>
            </nav>
            <div className={cls.divider} />
            <section className={cls.socialMedia}>
                <p className={cls.rights}>©Udevs 2020 - 2022 All rights reserved</p>
                <div className={cls.socialIcons}>
                    <Link to="#"><SlSocialFacebook color="#808080" size={24} strokeWidth={4} /></Link>
                    <Link to="#"><SlSocialInstagram color="#808080" size={24} strokeWidth={4} /></Link>
                    <Link to="#"><PiTelegramLogo color="#808080" size={24} strokeWidth={4} /></Link>
                </div>
            </section>
        </footer>
    )
}