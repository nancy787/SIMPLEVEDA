import { Route } from "react-router-dom";
import {AdminLayout, HeaderPage, Dashboard, Users} from "../index"

export default function AdminRoutes() {
  return (
    <Route path="/admin" element={<AdminLayout />}>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="users" element={<Users />} />
      <Route path="header" element={<HeaderPage />} />
    </Route>
  );
}
