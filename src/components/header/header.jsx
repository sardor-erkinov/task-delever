import { Link } from "react-router-dom"
import cls from "./styles.module.scss"
import { NavButton } from "../nav-button"
import { TiLocation } from "react-icons/ti"
import { TbChevronDown } from "react-icons/tb"
import { PiShoppingCartSimpleFill } from "react-icons/pi"
import RussianFlag from "./../../assets/icons/russia.svg"

export const Header = () => {
    return (
        <header className={cls.header}>
            <nav className={cls.navigation}>
                <ul>
                    <li><Link to="#">LOGO</Link></li>
                    <li><Link to="#">Меню</Link></li>
                    <li><Link to="#">Филиалы</Link></li>
                    <li><Link to="#">О нас</Link></li>
                    <li><Link to="#">Контакты</Link></li>
                </ul>
            </nav>
            <div className={cls.misc}>
                <div className={cls.locationWrapper}>
                    <NavButton rounded>
                        <TiLocation color="#5982E7" size={18}/>
                    </NavButton>
                    <div className={cls.locationDescription}>
                        <p className={cls.featureTitle}>Достафка или Заказ с собой</p>
                        <p className={cls.featureDescription}>Выберите способ получения</p>
                    </div>
                </div>
                <div style={{ marginLeft: 32 }} className={cls.locationWrapper}>
                    <NavButton rounded>
                        <PiShoppingCartSimpleFill color="#5982E7" size={18}/>
                    </NavButton>
                </div>
                <NavButton className={cls.langMenu}>
                    <img className={cls.flag} src={RussianFlag} alt="Russia flag"/>
                    <TbChevronDown color="#292929" size={20} />
                </NavButton>
                <NavButton className={cls.loginBtn}>
                   Войти
                </NavButton>
            </div>
        </header>
    )
}