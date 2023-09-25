import { Outlet } from "react-router-dom";
import AuthNav from "../ui/AuthNav";
import Sidebar from "../ui/Sidebar";

export default function AppLayout() {
  return (
    <div className="grid h-[100vh] grid-cols-[304px_1fr] grid-rows-[auto_1fr] ">
      <AuthNav />
      <Sidebar />
      <main className="overflow-y-scroll">
        <div className="mx-auto my-0 flex max-w-[120rem] flex-col px-[24px] py-[30px]">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
