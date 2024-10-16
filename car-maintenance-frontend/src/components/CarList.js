import { useEffect, useState } from 'react';

const CarList = ({ userId }) => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    const response = await fetch(`https://apicars.prisms.in/car/getall?userid=${userId}`);
    const data = await response.json();
    if (data.error === 0) {
      setCars(data.Cars);
    }
  };

  return (
    <div>
      <h2>Cars</h2>
      <ul>
        {cars.map(car => (
          <li key={car.Id}>
            {car.Model} - {car.Color}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarList;
