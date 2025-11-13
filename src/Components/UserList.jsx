import { Link } from "react-router-dom";

const UserList = ({ users, onDelete }) => {
  return (
    <div className="w-full">
      <div className="h-15 flex justify-center items-center"> <Link 
            to="/add" 
            className="text-white p-3 rounded bg-black text-center "

          >
            Add User
          </Link></div>
      {/* Desktop View - Table */}
      <div className="hidden md:block overflow-x-auto">
       
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Phone</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="text-center">
                <td className="border px-4 py-2">{user.id}</td>
                <td className="border px-4 py-2">{user.name}</td>
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2">{user.phone}</td>
                <td className="border px-4 py-2 space-x-2">
                  <Link
                    to={`/edit/${user.id}`}
                    className="bg-black text-white px-3 py-1 rounded hover:bg-black/80"
                  >
                    Edit
                  </Link>
                  <Link
                    to={`/view/${user.id}`}
                    className="bg-blue-400 px-3 py-1 rounded hover:bg-blue-500"
                  >
                    View
                  </Link>
                  <button
                    onClick={() => onDelete(user.id)}
                    className="bg-red-500 px-3 py-1 rounded hover:bg-red-600 text-white"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View - Cards */}
      <div className="md:hidden space-y-4">
        {users.map((user) => (
          <div key={user.id} className="border border-gray-300 rounded-lg p-4 bg-white shadow">
            <div className="space-y-2 mb-4 ">
                <div className="flex">
                <span className="font-semibold text-gray-600">ID:</span>
                <p className="text-gray-900">{user.id}</p>
              </div>
              <div className="flex">
                <span className="font-semibold text-gray-600">Name:</span>
                <p className="text-gray-900">{user.name}</p>
              </div>
              <div className="flex">
                <span className="font-semibold text-gray-600">Email:</span>
                <p className="text-gray-900 break-words">{user.email}</p>
              </div>
              <div className="flex">
                <span className="font-semibold text-gray-600">Phone:</span>
                <p className="text-gray-900">{user.phone}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link
                to={`/edit/${user.id}`}
                className="flex-1 min-w-fit bg-yellow-400 px-3 py-2 rounded hover:bg-yellow-500 text-center"
              >
                Edit
              </Link>
              <Link
                to={`/view/${user.id}`}
                className="flex-1 min-w-fit bg-green-400 px-3 py-2 rounded hover:bg-green-500 text-center"
              >
                View
              </Link>
              <button
                onClick={() => onDelete(user.id)}
                className="flex-1 min-w-fit bg-red-500 px-3 py-2 rounded hover:bg-red-600 text-white"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;