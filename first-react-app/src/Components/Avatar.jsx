function Avatar(props) {
    return (
        <img className="Avatar" src={props.img} alt={props.name} />
    );
}

export default Avatar; // export the component for use in other files