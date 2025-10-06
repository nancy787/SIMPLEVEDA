import { Routes } from "react-router-dom";
import UserRoutes from "./UserRoutes";

export default function AppRoutes() {
  return (
    <Routes>
      {UserRoutes()}
    </Routes>
  );
}
