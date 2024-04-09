function SingleCat({ cat }) {
    return (
     <div>
            <h1>{cat.name}</h1>
            <p>Weight: {cat.weight}kg</p>
            <img className="Image" src={props.img} alt={props.name} />
        </div>
    )
}

export default SingleCat;