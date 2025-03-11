import { Link } from "react-router-dom";

const SpecialOffers = ({ offer }) => {
    return (
        <div className="cursor-pointer">
            <Link to={`/offer/${offer.id}`}><img src={offer.img} alt="" className="w-full"/></Link>
        </div>
    )
}

export default SpecialOffers;