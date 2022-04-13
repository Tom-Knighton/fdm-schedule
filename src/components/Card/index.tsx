import "./style.css";

const Card = (props) => {

    return (
        <div className={`cardContainer ${props.className}`}>
            {props.children}
        </div>
    );
};

export default Card;