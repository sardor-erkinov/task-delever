import clsx from "clsx"
import cls from "./styles.module.scss"
import { Button } from "components/button"
import { useState } from "react"
import { Counter } from "../counter/counter"

export const FoodCard = ({
    title,
    description,
    price,
    currency,
    imageSrc,
    disabled = false
}) => {
    const [isClicked, setIsClicked] = useState(false)
    const [counter, setCounter] = useState(1)

    return (
        <div className={clsx(cls.cardWrapper, { [cls.disabled]: disabled })}>
            <img src={imageSrc} alt={title} />
            <div className={cls.content}>
                <div className={cls.titleWrapper}>
                    <p className={cls.title}>{title}</p>
                    <p className={cls.description}>{description}</p>
                </div>
                <div className={cls.cardBottom}>
                    <p className={cls.price}>
                        {price} <span className={cls.currency}>{currency}</span>
                    </p>
                    {isClicked ?
                        <Counter
                            setIsClicked={setIsClicked}
                            counter={counter}
                            setCounter={setCounter}
                            limit={13}
                        /> : <Button onClick={() => { setIsClicked(true) }}>Добавить</Button>}
                </div>
            </div>
        </div>
    )
}