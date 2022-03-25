import "./header.css";
import imageHeader1 from "../assets/image-header-01.jpg"

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">Welcome</span>
                <span className="headerTitleLg">to</span>
            </div>
            <img className="headerImg" src={imageHeader1} alt="img" />
        </div>
    )
}