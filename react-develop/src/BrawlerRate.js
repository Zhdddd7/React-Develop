import React, {useState} from "react";

const submitRating = async({brawlerid, brawlerrating}) =>{
  
  try {
    const response = await fetch('http://192.168.1.177:5000/rate-brawler', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ brawlerid, brawlerrating }),
    });

    if (response.ok) {
      console.log('Rating submitted successfully');
    } else {
      console.error('Failed to submit rating');
    }
  } catch (error) {
    console.error('Error submitting rating', error);
  }
};





const BrawlerRate = ({brawler}) =>{
  
    const [rating, setRating] = useState('');
    const handleRatingChange = (e) => {
        setRating(e.target.value);
    };
    const handleSubmit = () => {
      submitRating({ brawlerid: brawler.id, brawlerrating: rating })
        .then(() => console.log('Rating processed'))
        .catch(error => console.error('Error processing rating', error));
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
