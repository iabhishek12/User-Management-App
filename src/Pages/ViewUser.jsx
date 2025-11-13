import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUser } from "../API/Api";
import UserDetail from "../Components/UserDetail";
import Spinner from "../utility/Spinner";

const ViewUser = () => {
  const { id } = useParams();
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

  useEffect(() => {
    fetchUser();
  }, [id]);

  if (error) return <p className="text-red-500">{error}</p>;
  if (!user) return <Spinner />;

  return (
    <div className="p-4">
      <UserDetail user={user} />
    </div>
  );
};

export default ViewUser;
