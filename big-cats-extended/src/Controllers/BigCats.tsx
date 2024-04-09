import React, { useState } from 'react';
import SingleCat from "./SingleCat";
import AddCatForm from './AddCatForm'; // Make sure to create this component based on the previous instructions

const initialCats = [
  { name: "Lion", weight: 200, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwdAvv6ZxB39FGkf0ZDtLKQ4ySbR0BMoc5IMjfjXA3wQ&s" },
  { name: "Tiger", weight: 300, img: "https://files.worldwildlife.org/wwfcmsprod/images/Tiger_resting_Bandhavgarh_National_Park_India/hero_small/6aofsvaglm_Medium_WW226365.jpg"},
  { name: "Jaguar", weight: 100, img:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/640px-Standing_jaguar.jpg" },
  { name: "Leopard", weight: 150, img: "https://media.istockphoto.com/id/1314203068/photo/leopard.jpg?s=612x612&w=0&k=20&c=d3Kp5iUO-ZToVriIKR5t-z3acTrqHiDkQXVyunmc7PE="},
  { name: "Cheetah", weight: 120, img: "https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D"},
  { name: "Puma", weight: 90, img: "https://media.istockphoto.com/id/682954094/photo/mountain-lion.jpg?s=612x612&w=0&k=20&c=oyEDpvRtROuE3UV6SAUy1h_he-SdC-OCdf_FEB8njXU="},
  { name: "Panther", weight: 110, img: "https://png.pngtree.com/background/20230606/original/pngtree-black-panther-walking-in-a-grass-field-picture-image_2883330.jpg"},
];

export const BigCats = () => {
  const [cats, setCats] = useState(initialCats);

  const addCat = (cat) => {
    setCats([...cats, cat]);
  };

  const deleteCat = (index) => {
    const newCats = cats.filter((_, i) => i !== index);
    setCats(newCats);
  };

  const sortCats = () => {
    const sortedCats = [...cats].sort((a, b) => a.name.localeCompare(b.name));
    setCats(sortedCats);
  };

  const reverseCats = () => {
    const reversedCats = [...cats].reverse();
    setCats(reversedCats);
  };

  const filterPanthera = () => {
    const filteredCats = cats.filter(cat => cat.family === 'Panthera');
    setCats(filteredCats);
  };

  const resetCats = () => {
    setCats(initialCats);
  };

  return (
    <div>
      <h1>Big Cats</h1>
      <AddCatForm addCat={addCat} />
      <button onClick={sortCats}>Sort</button>
      <button onClick={reverseCats}>Reverse</button>
      <button onClick={filterPanthera}>Filter Panthera</button>
      <button onClick={resetCats}>Reset</button>
      <ul>
        {cats.map((cat, index) => (
          <li key={index}>
            <SingleCat cat={cat} />
            <button onClick={() => deleteCat(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BigCats;