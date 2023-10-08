import { Outlet } from "react-router-dom";
import AuthNav from "../ui/AuthNav";
import Sidebar from "../ui/Sidebar";
import { useUser } from "../context/UserContext";
import ConnectButton from "../components/ConnectButton";

export default function AppLayout() {
  const { user } = useUser();

  return (
    <>
      {user && (
        <div className="grid h-[100vh] grid-cols-[304px_1fr] grid-rows-[auto_1fr] ">
          <AuthNav address={user} />
          <Sidebar />
          <main className="overflow-y-scroll">
            <div className="mx-auto my-0 flex max-w-[120rem] flex-col px-[24px] py-[30px]">
              <Outlet />
            </div>
          </main>
        </div>
      )}
      {!user && <ConnectButton />}
    </>
  );
}
