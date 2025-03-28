// @ts-ignore
import cs from './MainLayout.module.css'
import Header from "../Header/Header";
import {Outlet} from "react-router-dom";


const MainLayout = () => {
    const year = new Date().getFullYear();
    return (
        <div className={cs.mainLayout}>
            <Header />

            <div className={cs.mainWrapper}>
                <main>
                    <Outlet />
                </main>
                <footer className={cs.footer}>
                    Google books API | {year}
                </footer>
            </div>
        </div>
    )
}

export default MainLayout;