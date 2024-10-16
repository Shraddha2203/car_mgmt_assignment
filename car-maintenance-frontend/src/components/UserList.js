import { useEffect, useState } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch('https://apicars.prisms.in/user/getall');
    const data = await response.json();
    if (data.error === 0) {
      setUsers(data.Users);
    }
  };

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user['phone-number']}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
