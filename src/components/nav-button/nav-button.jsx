import clsx from "clsx"
import cls from "./styles.module.scss"

export const NavButton = ({ children, rounded, className = "", ...rest }) => {

    return (
        <button className={clsx(cls.iconBtn, {[cls.rounded]: rounded}, className)} {...rest}>
           {children} 
        </button>
    )
}