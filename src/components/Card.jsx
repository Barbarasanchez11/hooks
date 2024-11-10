const Card = ({ title, name, image }) => {
    return (
        <div className="card">
            <h2>{title}</h2>
            <p>{name}</p>
            <img src={image} alt={name} />
        </div>
    );
};

export default Card;