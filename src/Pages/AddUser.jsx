import React from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../API/Api";
import UserForm from "../Components/UserForm";
import toast from "react-hot-toast";

const AddUser = ({ addUserToList }) => {
  const navigate = useNavigate();

  const handleSubmit = async (userData) => {
    try {
      // JSONPlaceholder 
      const response = await createUser(userData);
      const newUser = { id: response.id, ...userData }; // ensure new user has id

      toast.success("User created successfully!");
      if (addUserToList) {
        addUserToList(newUser);
      }
      navigate("/");
    } catch (err) {
      toast.error("Error creating user:", err);
      alert("Failed to create user.");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Add User</h2>
      <UserForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddUser;
