// import { useEffect, useState } from "react";
// import api from "../api";

// const Dashboard = () => {
//   const [users, setUsers] = useState([]);
//   const loadUsers = async () => {
//     try {
//       const res = await api.get("/");
//       setUsers(res.data);
//       console.log(res.data);
//     } catch (error) {
//       alert(error.response?.data?.message);
//     }
//   };

//   useEffect(() => {
//     loadUsers();
//   }, []);


//    const currentUserId = localStorage.getItem("id");
//   const currentUser = users.find((u) => u._id === currentUserId);

//   if (currentUser.role === "user") {
//     return (
//       <div>
//         {currentUser.name}-{currentUser.role}
//       </div>
//     );
//   } else {
  
//     return (
//       <div>
//         {users.map((user) => (
//           <p key={user._id}>
//             {user.name} - {user.role}
//           </p>
//         ))}
//       </div>
//     );
//   }
// };

// export default Dashboard;



import { useEffect, useState } from "react";
import api from "../api";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadUsers = async () => {
    try {
      const res = await api.get("/");
      setUsers(res.data);
    } catch (error) {
      alert(error.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const currentUserId = localStorage.getItem("id");
  const currentUser = users.find((u) => u._id === currentUserId);

  if (loading) return <div>Loading...</div>;

  if (!currentUser) return <div>User not found</div>; // Safety check

  // Now currentUser is guaranteed to exist
  if (currentUser.role === "user") {
    return (
      <div>
        {currentUser.name} - {currentUser.role}
      </div>
    );
  } else {
    return (
      <div>
        {users.map((user) => (
          <p key={user._id}>
            {user.name} - {user.role}
          </p>
        ))}
      </div>
    );
  }
};

export default Dashboard;

