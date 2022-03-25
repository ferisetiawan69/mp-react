import "./catalogue.css"
import imageCatalog1 from "../assets/image-catalog-01.jpg"

export default function Catalogue() {
    return (
        <div className="catalogue">
            <img className="catalogueImage" src={imageCatalog1} alt="" />
            <div className="catalogueInfo">
                <span className="catalogueCategory">Clothes</span>
                <span className="catalogueName">Hoodie Prostreet Kin Ryu</span>
                {/* <br /> */}
                <span className="cataloguePrice">Rp750.000</span>
            </div>

        </div>
    )
}