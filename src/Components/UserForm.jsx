import { useState, useEffect } from "react";

const UserForm = ({ initialData = { name: "", email: "", phone: "" }, onSubmit }) => {
  const [user, setUser] = useState(initialData);

  useEffect(() => {
    setUser(initialData); 
  }, []); 
//handle changes
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
// handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(user);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 p-4 border rounded shadow">
      <div>
        <label className="block mb-1">Name:</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />
      </div>
      <div>
        <label className="block mb-1">Email:</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />
      </div>
      <div>
        <label className="block mb-1">Phone:</label>
        <input
          type="text"
          name="phone"
          value={user.phone}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />
      </div>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Submit
      </button>
    </form>
  );
};

export default UserForm;
