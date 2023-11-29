import { Outlet } from "react-router-dom"
import cls from './styles.module.scss'
import { Header } from "components/header"
import { Footer } from "components/footer"

export const RootLayout = () => {
    return (
        <main className={cls.layout}>
            <Header />
            <Outlet />
            <Footer />
        </main>
    )
}