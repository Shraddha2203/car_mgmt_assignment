import UserForm from '../components/UserForm';
import UserList from '../components/UserList';

const UsersPage = () => {
  const handleUserAdded = () => {
    window.location.reload();  
  };

  return (
    <div>
      <h1>User Management</h1>
      <UserForm onUserAdded={handleUserAdded} />
      <UserList />
    </div>
  );
};

export default UsersPage;
