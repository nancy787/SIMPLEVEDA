import { Route } from "react-router-dom";
import {Home, MainLayout, Contact, Shop, Quotes, AllCourses} from "../index";

export default function UserRoutes() {
  return (
    <Route element={<MainLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/Shop" element={<Shop />} />
      <Route path="/quotes" element={<Quotes />} />
      <Route path="/courses" element={<AllCourses />} />
    </Route>
  );
}
