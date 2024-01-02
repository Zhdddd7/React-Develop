import React, {useState} from "react";

const BrawlerRate = ({brawler, submitRating}) =>{
    const [rating, setRating] = useState('');
    const handleRatingChange = (e) => {
        setRating(e.target.value);
    };
    const handleSubmit = () =>{
        submitRating(brawler.id, rating);
    };


return(
    <div className="BrawlerRate">
      <h3>{brawler.name}</h3>
      <select value={rating} onChange={handleRatingChange}>
        <option value="">Select Rating</option>
        <option value="S">S</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
      </select>
      <button onClick={handleSubmit}>Submit</button>
    </div>
    );
};
export default BrawlerRate;
