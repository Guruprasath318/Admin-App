import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Users = () => {

const [users, setUsers] = useState([
  { id:1, name:"John", email:"john@mail.com", role:"Admin" },
  { id:2, name:"David", email:"david@mail.com", role:"User" },
  { id:3, name:"Sarah", email:"sarah@mail.com", role:"User" }
]);

const [selectedUser, setSelectedUser] = useState(null);

const handleDelete = (id) => {
  setUsers(users.filter(user => user.id !== id));
};

const handleUpdate = () => {
  setUsers(users.map(user =>
    user.id === selectedUser.id ? selectedUser : user
  ));
};

return (

<div className="container mt-4">

<h2>Users</h2>

<table className="table table-striped table-hover">

<thead className="table-dark">
<tr>
<th>ID</th>
<th>Name</th>
<th>Email</th>
<th>Role</th>
<th>Actions</th>
</tr>
</thead>

<tbody>

{users.map(user => (

<tr key={user.id}>

<td>{user.id}</td>
<td>{user.name}</td>
<td>{user.email}</td>
<td>{user.role}</td>

<td>

<button
className="btn btn-primary btn-sm me-2"
data-bs-toggle="modal"
data-bs-target="#editModal"
onClick={() => setSelectedUser(user)}
>
Edit
</button>

<button
className="btn btn-danger btn-sm"
data-bs-toggle="modal"
data-bs-target="#deleteModal"
onClick={() => setSelectedUser(user)}
>
Delete
</button>

</td>

</tr>

))}

</tbody>

</table>

{/* EDIT MODAL */}

<div className="modal fade" id="editModal">

<div className="modal-dialog">

<div className="modal-content">

<div className="modal-header">
<h5 className="modal-title">Edit User</h5>
<button className="btn-close" data-bs-dismiss="modal"></button>
</div>

<div className="modal-body">

<input
type="text"
className="form-control mb-2"
value={selectedUser?.name || ""}
onChange={(e)=>setSelectedUser({...selectedUser,name:e.target.value})}
/>

<input
type="email"
className="form-control mb-2"
value={selectedUser?.email || ""}
onChange={(e)=>setSelectedUser({...selectedUser,email:e.target.value})}
/>

<select
className="form-control"
value={selectedUser?.role || ""}
onChange={(e)=>setSelectedUser({...selectedUser,role:e.target.value})}
>
<option>Admin</option>
<option>User</option>
</select>

</div>

<div className="modal-footer">

<button
className="btn btn-success"
data-bs-dismiss="modal"
onClick={handleUpdate}
>
Update
</button>

</div>

</div>

</div>

</div>

{/* DELETE MODAL */}

<div className="modal fade" id="deleteModal">

<div className="modal-dialog">

<div className="modal-content">

<div className="modal-header">
<h5 className="modal-title">Delete User</h5>
<button className="btn-close" data-bs-dismiss="modal"></button>
</div>

<div className="modal-body">

Are you sure you want to delete <b>{selectedUser?.name}</b> ?

</div>

<div className="modal-footer">

<button
className="btn btn-danger"
data-bs-dismiss="modal"
onClick={()=>handleDelete(selectedUser.id)}
>
Delete
</button>

</div>

</div>

</div>

</div>

</div>

);

};

export default Users;