import React from "react";
const UserDetail = ({ user }) => {
  return (
    <div className="max-w-md mx-auto p-4 border flex flex-col bg-blue-100 rounded shadow">
      <h2 className="text-xl font-bold mb-4">User Details</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>City:</strong> {user.address.city}</p>
    </div>
  );
};

export default UserDetail;
