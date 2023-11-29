import { Slideshow } from "components/slider"
import cls from "./styles.module.scss"
import { NavButton } from "components/nav-button"
import { useState } from "react";
import clsx from "clsx";
import Lavash from "assets/images/lavash.svg"
import Hamburger from "assets/images/hamburger.svg"
import { FoodCard } from "components/food-card";

const slideImages = [
    {
        url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        caption: 'Slide 1'
    },
    {
        url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
        caption: 'Slide 2'
    },
    {
        url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        caption: 'Slide 3'
    },
];

const tabsList = [
    {
        title: "Пицца",
        name: 'pizza',
        id: 1
    },
    {
        title: "Паста",
        name: 'pasta',
        id: 2
    },
    {
        title: "Закуски",
        name: 'snacks',
        id: 3
    },
    {
        title: "Синнамон-роллы",
        name: 'rolls',
        id: 4
    },
    {
        title: "Напитки",
        name: 'drinks',
        id: 5
    },
    {
        title: "Гарниры",
        name: 'garnishes',
        id: 6
    },
    {
        title: "Соус",
        name: 'sauce',
        id: 7
    },
    {
        title: "Салаты",
        name: 'salads',
        id: 8
    },
    {
        title: "Еще",
        name: 'others',
        id: 9
    },
]

const contents = [
    {
        name: "Лаваш",
        content: [
            {
                title: "Комбо 1",
                description: "Мясной лаваш, фри, кола разлив и кетчуп",
                price: "39 000",
                currency: "сум",
                imageSrc: Lavash,
                id: 1
            },
            {
                title: "Комбо 2",
                description: "Мясной лаваш, фри, кола разлив и кетчуп",
                price: "39 000",
                currency: "сум",
                imageSrc: Hamburger,
                id: 2
            },
            {
                title: "Комбо 3",
                description: "Мясной лаваш, фри, кола разлив и кетчуп",
                price: "39 000",
                currency: "сум",
                imageSrc: Hamburger,
                id: 1
            },
            {
                title: "Комбо 4",
                description: "Мясной лаваш, фри, кола разлив и кетчуп",
                price: "39 000",
                currency: "сум",
                imageSrc: Lavash,
                id: 2
            },
        ]
    },
    {
        name: "Бургеры",
        content: [
            {
                title: "Комбо 1",
                description: "Мясной лаваш, фри, кола разлив и кетчуп",
                price: "39 000",
                currency: "сум",
                imageSrc: Hamburger,
                id: 1
            },
            {
                title: "Комбо 2",
                description: "Мясной лаваш, фри, кола разлив и кетчуп",
                price: "39 000",
                currency: "сум",
                imageSrc: Hamburger,
                id: 2
            },
            {
                title: "Комбо 3",
                description: "Мясной лаваш, фри, кола разлив и кетчуп",
                price: "39 000",
                currency: "сум",
                imageSrc: Hamburger,
                id: 1
            },
            {
                title: "Комбо 4",
                description: "Мясной лаваш, фри, кола разлив и кетчуп",
                price: "39 000",
                currency: "сум",
                imageSrc: Hamburger,
                id: 2
            },
        ]
    },
]


export const Home = () => {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <section className={cls.container}>
            <Slideshow slideImages={slideImages} />
            <div className={cls.tabNavWrapper}>
                <div className={cls.tabs}>
                    {tabsList.map((tab) => (
                        <NavButton
                            onClick={() => { setActiveTab(tab.id) }}
                            className={clsx(cls.tabNav, { [cls.tabNavActive]: tab.id === activeTab })}
                            key={tab.id}
                        >
                            {tab.title}
                        </NavButton>
                    ))}
                </div>
                <div className={cls.contentsContainer}>
                    {contents.map((item) => {
                        return (
                            <section className={cls.contentsSection} key={item.name}>
                                <p className={cls.sectionTitle}>{item.name}</p>
                                <div className={cls.cardsWrapper}>
                                    {item.content.map((contentItem) => <FoodCard key={contentItem.id + item.name} {...contentItem} />)}
                                </div>
                            </section>
                        )
                    })}
                </div>
                <div className={cls.tabs}>
                    {tabsList.map((tab) => (
                        <NavButton
                            onClick={() => { setActiveTab(tab.id) }}
                            className={clsx(cls.tabNav, { [cls.tabNavActive]: tab.id === activeTab })}
                            key={tab.id}
                        >
                            {tab.title}
                        </NavButton>
                    ))}
                </div>
            </div>
        </section>
    )
}