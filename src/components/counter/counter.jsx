import cls from './styles.module.scss'
import { TbMinus, TbPlus } from "react-icons/tb"

export const Counter = ({ counter, setCounter, limit = 10, setIsClicked = () => { } }) => {

    const handleIncrement = () => {
        if (counter < limit) {
            setCounter((prev) => prev + 1)
        }
    }

    const handleDecrement = () => {
        if (counter > 1) {
            setCounter((prev) => prev - 1)
        } else {
            setIsClicked && setIsClicked(false)
        }
    }

    return (
        <div className={cls.counterWrapper}>
            <button className={cls.calcBtn} onClick={handleDecrement}><TbMinus color="#023997" size={20} /></button>
            <span className={cls.counterText}>{counter}</span>
            <button className={cls.calcBtn} onClick={handleIncrement}><TbPlus color="#023997" size={20} /></button>
        </div>
    )
}