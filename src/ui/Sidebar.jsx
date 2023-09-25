import SidebarLinks from "./SidebarLinks";

function Sidebar() {
  return (
    <div
      className="bg-lightBlue flex flex-col pl-[34px] pr-[34px] pt-[34px]"
      // style={{ gridRow: "1/-1" }}
    >
      <SidebarLinks />
      <button className="bg-primaryColor leading-default mt-[96px] self-center rounded-full px-[30px] py-3 text-base font-semibold text-black">
        Draft Contract
      </button>
    </div>
  );
}

export default Sidebar;
