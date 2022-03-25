import "./sidebar.css"
import imageSidebar1 from "../assets/image-sidebar-01.png"

export default function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT US</span>
                <img src={imageSidebar1} alt="" />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aut quos exercitationem distinctio deleniti quae velit.
                    omnis aliquid fugit autem sapiente commodi maxime delectus,
                    vitae necessitatibus sunt, porro reprehenderit ratione aperiam?
                </p>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Clothes</li>
                    <li className="sidebarListItem">Pants</li>
                    <li className="sidebarListItem">Shoes</li>
                    <li className="sidebarListItem">Bag</li>
                    <li className="sidebarListItem">Helmet</li>
                    <li className="sidebarListItem">Accessories</li>
                </ul>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-twitter"></i>
                    <i className="sidebarIcon fa-brands fa-linkedin-in"></i>
                    <i className="sidebarIcon fa-brands fa-github"></i>
                </div>
            </div>
        </div>
    )
}