import { useState } from 'react';

const CarForm = ({ onCarAdded, userId }) => {
  const [model, setModel] = useState('');
  const [color, setColor] = useState('');
  const [purchaseDate, setPurchaseDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('https://apicars.prisms.in/car/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ model, color, purchase_date: purchaseDate, ownerid: userId }),
    });
    const result = await response.json();
    if (result.error === 0) {
      onCarAdded();
      setModel('');
      setColor('');
      setPurchaseDate('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Model:</label>
        <input type="text" value={model} onChange={(e) => setModel(e.target.value)} />
      </div>
      <div>
        <label>Color:</label>
        <input type="text" value={color} onChange={(e) => setColor(e.target.value)} />
      </div>
      <div>
        <label>Purchase Date:</label>
        <input type="date" value={purchaseDate} onChange={(e) => setPurchaseDate(e.target.value)} />
      </div>
      <button type="submit">Add Car</button>
    </form>
  );
};

export default CarForm;
