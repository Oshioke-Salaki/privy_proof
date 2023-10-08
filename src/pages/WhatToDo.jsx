import ConnectButton from "../components/ConnectButton";
import ShowUIButton from "../components/ShowUIButton";
import { useUser } from "../context/UserContext";
import AuthNav from "../ui/AuthNav";
export default function WhatToDo() {
  const { user } = useUser();
  return (
    <>
      {user && (
        <div className="flex flex-col items-center">
          <AuthNav address={user} />
          <div className="mt-[88px] flex w-[508px] flex-col bg-secondaryColor px-[13px] pb-[67px] pt-[17px] text-center text-black">
            <h1 className="mb-[58px] text-center text-xl font-bold leading-default">
              Do you want to
            </h1>
            <button className="flex w-full justify-center rounded-full bg-primaryColor py-3 text-base font-semibold leading-default">
              Sign a contract
            </button>
            <h6 className="my-[25px] text-base font-bold leading-default">
              or
            </h6>
            <button className="flex w-full justify-center rounded-full bg-primaryColor py-3 text-base font-semibold leading-default">
              Create a contract
            </button>
          </div>
        </div>
      )}
      {!user && (
        <div className="flex flex-col items-center justify-center h-[100%] w-full">
          <ConnectButton />
        </div>
      )}
    </>
  );
}
