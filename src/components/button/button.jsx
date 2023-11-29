import clsx from "clsx"
import cls from "./styles.module.scss"

export const Button = ({ onClick, className = "", children, ...otherProps }) => {
    return (
        <button onClick={onClick} className={clsx(cls.btn, className)} {...otherProps}>
            {children}
        </button>
    )
}