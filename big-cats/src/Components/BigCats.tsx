import SingleCat from './SingleCat';

const cats = [
    {name: 'Lion', weight: 200},
    {name: 'Tiger', weight: 300},
    {name: 'Jaguar', weight: 100},
    {name: 'Leopard', weight: 150},
    {name: 'Cheetah', weight: 120},
    {name: 'Puma', weight: 90},
    {name: 'Panther', weight: 110},
]

export const BigCats = () => {
    return (
        <div>
            <h1>Big Cats</h1>
            <ul>
                {cats.map((cat, index) => (
                    <SingleCat key={index} cat={cat}></SingleCat>
                ))}
            </ul>
        </div>
    )
}

export default BigCats;


