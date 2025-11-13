import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getUser, updateUser } from "../API/Api";
import UserForm from "../Components/UserForm";
import Spinner from "../utility/Spinner";
import toast from "react-hot-toast";

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const fetchUser = async () => {
    try {
      const data = await getUser(id);
      setUser(data);
    } catch {
      setError("Failed to fetch user.");
    }
  };

  const handleSubmit = async (userData) => {
    try {
      await updateUser(id, userData);
      toast.success("User updated successfully!");
      navigate("/");
    } catch {
      toast.error("Failed to update user.");
    }
  };

  useEffect(() => {
    fetchUser();
  }, [id]);

  if (error) return <p className="text-red-500">{error}</p>;
  if (!user) return <Spinner />;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold text-center  mb-4">Edit User</h2>
      <UserForm initialData={user} onSubmit={handleSubmit} />
    </div>
  );
};

export default EditUser;
