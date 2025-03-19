import { Link } from "react-router-dom";

interface offer {
    id: string,
    img: string,
}

const SpecialOffers = ({ offer } : {offer : offer}) => {
    return (
        <div className="cursor-pointer">
            <Link to={`/offer/${offer.id}`}><img src={offer.img} alt="" className="w-full"/></Link>
        </div>
    )
}

export default SpecialOffers;