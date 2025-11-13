import { useState, useEffect } from "react";
import { getUsers, deleteUser } from "../API/Api";
import UserList from "../Components/UserList";
import Spinner from "../utility/Spinner";
import toast from "react-hot-toast";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [Loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true); //spinner start
    try {
      const data = await getUsers();
      setUsers(data);
    } catch (err) {
      setError("Failed to fetch users.");
    } finally {
      setLoading(false); //spinner stop
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await deleteUser(id);
        setUsers(users.filter((u) => u.id !== id));
        toast.success("User Deleted sucessfully!");
      } catch {
        alert("Failed to delete user.");
      }
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="p-4">
      {error && <p className="text-red-500">{error}</p>}
      {Loading ? (
        <Spinner />
      ) : (
        <UserList users={users} onDelete={handleDelete} />
      )}
    </div>
  );
};

export default Home;
