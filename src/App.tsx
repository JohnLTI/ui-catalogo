import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

export function App() {

  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full ml-[60px]">
          <Header />
          <Outlet />
          <footer className="bg-slate-600">Footer</footer>
        </div>
      </div>
    </>
  );
}
