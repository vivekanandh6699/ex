// import React, { useState } from 'react';

// function HomePage() {
//   const [showForm, setShowForm] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     number: ''
//   });
//   const [users, setUsers] = useState([]);
//   const [editIndex, setEditIndex] = useState(null);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSave = () => {
//     // Save the form data and add it to the users array
//     const newUser = { ...formData };
//     if (editIndex !== null) {
//       // If editing an existing user, update the user at the specified index
//       const updatedUsers = [...users];
//       updatedUsers[editIndex] = newUser;
//       setUsers(updatedUsers);
//       setEditIndex(null);
//     } else {
//     setUsers([...users, newUser]);
//     }
//     // Clear the form data
//     setFormData({ name: '', email: '', number: '' });
//   };

//   const handleEdit = (index) => {
//     // Populate the form with the details of the user at the specified index
//     const user = users[index];
//     setFormData({ ...user });
//     setEditIndex(index);
//     setShowForm(true);
//   };

//   const handleDelete = (index) => {
//     // Remove the user at the specified index from the users array
//     const updatedUsers = [...users];
//     updatedUsers.splice(index, 1);
//     setUsers(updatedUsers);
//   };

//   return (
//     <div>
//       <h1>Users</h1>
//       <button onClick={() => setShowForm(true)}>Add User</button>
//       {showForm && (
//         <div>
//             <h2>{editIndex !== null ? 'Edit User' : 'Register User'}</h2>
//           {/* <h2>Register Form</h2> */}
//           <form>
//             <div>
//               <label>Name:</label>
//               <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
//             </div>
//             <div>
//               <label>Email:</label>
//               <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
//             </div>
//             <div>
//               <label>Number:</label>
//               <input type="text" name="number" value={formData.number} onChange={handleInputChange} />
//             </div>
            
//             {/* <button type="button" onClick={handleSave}>Save</button> */}
//             <button type="button" onClick={handleSave}>{editIndex !== null ? 'Update' : 'Save'}</button>
//             <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
//           </form>
//         </div>
//       )}
//       <h2>User Details</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Number</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user, index) => (
//             <tr key={index}>
//               <td>{user.name}</td>
//               <td>{user.email}</td>
//               <td>{user.number}</td>
//               <td>
//               <button onClick={() => handleEdit(index)}>Edit</button>
//                 <button onClick={() => handleDelete(index)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default HomePage;


import React, { useState } from 'react';
// import './HomePage.css'; // Import CSS file for styling

function HomePage() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: ''
  });
  const [users, setUsers] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    const newUser = { ...formData };
    if (editIndex !== null) {
      const updatedUsers = [...users];
      updatedUsers[editIndex] = newUser;
      setUsers(updatedUsers);
      setEditIndex(null);
    } else {
      setUsers([...users, newUser]);
    }
    setFormData({ name: '', email: '', number: '' });
  };

  const handleEdit = (index) => {
    const user = users[index];
    setFormData({ ...user });
    setEditIndex(index);
    setShowForm(true);
  };

  const handleDelete = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  };

  return (
    <div className="container">
      <h1>Users</h1>
      <button onClick={() => setShowForm(true)}>Add User</button>
      {showForm && (
        <div className="form-container">
          <h2>{editIndex !== null ? 'Edit User' : 'Register User'}</h2>
          <form>
            <div>
              <label>Name:</label>
              <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
            </div>
            <div>
              <label>Email:</label>
              <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
            </div>
            <div>
              <label>Number:</label>
              <input type="text" name="number" value={formData.number} onChange={handleInputChange} />
            </div>
            <button type="button" onClick={handleSave}>{editIndex !== null ? 'Update' : 'Save'}</button>
            <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
          </form>
        </div>
      )}
      <h2>User Details</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.number}</td>
                <td>
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HomePage;
