import { Outlet } from "react-router-dom";
import {MainFooter, Header} from "../index";

export default function MainLayout() {
  return (
    <>
        <main>
          <Header/>
          <Outlet />
          <MainFooter/>
      </main>
    </>
  );
}
