import UserCard from "../../cards/usercard/UserCard";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="left">
        <h2>Admin Dashboard</h2>
      </div>
      <div className="right">
        <UserCard />
      </div>
    </div>
  );
}
