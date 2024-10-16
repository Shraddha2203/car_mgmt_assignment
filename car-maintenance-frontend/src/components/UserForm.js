import { useState } from 'react';

const UserForm = ({ onUserAdded }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('https://apicars.prisms.in/user/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, phone_no: phone }),
    });
    const result = await response.json();
    if (result.error === 0) {
      onUserAdded();
      setName('');
      setPhone('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Phone:</label>
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserForm;
