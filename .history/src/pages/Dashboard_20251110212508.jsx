import { useEffect, useState } from "react";
import api from "../api";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const loadUsers = async () => {
    try {
      const res = await api.get("/");
      setUsers(res.data);
      console.log(res.data);
    } catch (error) {
      alert(error.response?.data?.message);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);


   const currentUserId = localStorage.getItem("id");
  const currentUser = users.find((u) => u._id === currentUserId);

  if (currentUser.role === "user") {
    return (
      <div>
        {currentUser.name}-{us.role}
      </div>
    );
  } else {
    const userArr = user?.filter((u) => u._id === localStorage.getItem("id"));
    console.log(userArr);
    return (
      <div>
        {userArr.map((user) => (
          <p key={user._id}>
            {user.name} - {user.role}
          </p>
        ))}
      </div>
    );
  }
};

export default Dashboard;
