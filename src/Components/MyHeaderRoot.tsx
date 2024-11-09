import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export function MyHeaderRoot() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
