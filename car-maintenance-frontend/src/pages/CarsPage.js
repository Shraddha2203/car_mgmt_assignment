import { useState } from 'react';
import CarForm from '../components/CarForm';
import CarList from '../components/CarList';

const CarsPage = () => {
  const [userId, setUserId] = useState('');

  const handleCarAdded = () => {
    window.location.reload();  
  };

  return (
    <div>
      <h1>Car Management</h1>
      <div>
        <label>User ID:</label>
        <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
      </div>
      <CarForm onCarAdded={handleCarAdded} userId={userId} />
      <CarList userId={userId} />
    </div>
  );
};

export default CarsPage;
