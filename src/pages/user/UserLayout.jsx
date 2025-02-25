import AddingUser from "../../components/layouts/navbar/adding-user/AddingUser";
import Navbar from "../../components/layouts/navbar/Navbar";
import "./UserLayout.css";

export default function UserLayout() {
  return (
    <div className="parent-container">
      <div className="container">
        <Navbar />
        <AddingUser />
      </div>
    </div>
  );
}

{
  /* <Main /> */
}
