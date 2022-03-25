import "./home.css";
import Header from "../../header/Header"
import Catalog from "../../catalog/Catalog";
import SideBar from "../../sidebar/SideBar";

export default function Home() {
    return (
        <>
            <Header />
            <div className="home">
                <Catalog />
                <SideBar />
            </div>
        </>
    )
}