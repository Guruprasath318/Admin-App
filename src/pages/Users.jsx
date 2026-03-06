import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Users = () => {

  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@gmail.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@gmail.com", role: "User" },
    { id: 3, name: "Robert", email: "robert@gmail.com", role: "User" }
  ]);

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    role: ""
  });

  const [editMode, setEditMode] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Add User
  const handleAddUser = () => {
    const newUser = {
      id: users.length + 1,
      name: formData.name,
      email: formData.email,
      role: formData.role
    };

    setUsers([...users, newUser]);

    setFormData({ name: "", email: "", role: "" });
  };

  // Edit User
  const handleEditClick = (user) => {
    setFormData(user);
    setEditMode(true);
  };

  const handleUpdateUser = () => {
    const updatedUsers = users.map((user) =>
      user.id === formData.id ? formData : user
    );

    setUsers(updatedUsers);
    setEditMode(false);
  };

  // Delete User
  const handleDeleteUser = (id) => {
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  };

  return (
    <div className="container-fluid">

      <h3 className="mb-4">Users Management</h3>

      {/* Add User Button */}
      <button
        className="btn btn-primary mb-3"
        data-bs-toggle="modal"
        data-bs-target="#userModal"
        onClick={() => {
          setEditMode(false);
          setFormData({ name: "", email: "", role: "" });
        }}
      >
        Add User
      </button>

      {/* Users Table */}
      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th width="200">Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>

              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  data-bs-toggle="modal"
                  data-bs-target="#userModal"
                  onClick={() => handleEditClick(user)}
                >
                  Edit
                </button>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDeleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>

      {/* Bootstrap Modal */}
      <div className="modal fade" id="userModal">
        <div className="modal-dialog">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title">
                {editMode ? "Edit User" : "Add User"}
              </h5>
              <button
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div className="modal-body">

              <div className="mb-3">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label>Role</label>
                <select
                  name="role"
                  className="form-control"
                  value={formData.role}
                  onChange={handleChange}
                >
                  <option value="">Select Role</option>
                  <option>Admin</option>
                  <option>User</option>
                </select>
              </div>

            </div>

            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>

              {editMode ? (
                <button
                  className="btn btn-success"
                  data-bs-dismiss="modal"
                  onClick={handleUpdateUser}
                >
                  Update
                </button>
              ) : (
                <button
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  onClick={handleAddUser}
                >
                  Add User
                </button>
              )}
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default Users;