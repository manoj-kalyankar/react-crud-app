import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import User from "./pages/user/UserLayout";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <User />
  </StrictMode>
);
