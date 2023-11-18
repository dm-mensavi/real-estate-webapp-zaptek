import Image from "next/image"
import locationIcon from "../public/icons/location-icon.png"
import carIcon from "../public/icons/car-icon.png"
import bedIcon from "../public/icons/bed-icon.png"
import bathIcon from "../public/icons/bath-icon.png"
import directionIcon from "../public/icons/direction-icon.png"

const PropertiesCard = (props) => {
    return (
        <div className="properties-card">
            <div>
                hello {props.property.price}
            </div>
        </div>
    )
}

export default PropertiesCard