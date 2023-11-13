// import img from "../../assets/images/animalShelter.png"
const VolunteersCard = ({ volunteer }) => {
    const { img, type } = volunteer;

    return (

        <div className="card md:w-72 w-full my-2 relative	 bg-base-100">
            <figure><img src={img} className="w-full" alt="Shoes" /></figure>
            <button className="btn absolute bottom-0 w-full btn-primary">{type}</button>
        </div>


    );
};

export default VolunteersCard;