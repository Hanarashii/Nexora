const SpecialOffers = ({ offer }) => {
    return (
        <div className="cursor-pointer">
            <img src={offer.img} alt="" className="w-full"/>
        </div>
    )
}

export default SpecialOffers;