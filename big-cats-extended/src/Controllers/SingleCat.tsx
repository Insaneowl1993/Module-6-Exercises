function SingleCat({ cat }) {
    return (
     <div>
            <h1>{cat.name}</h1>
            <p>Weight: {cat.weight}kg</p>
            <img className="Image" src={cat.img} alt={cat.name} />
        </div>
    )
}

export default SingleCat;