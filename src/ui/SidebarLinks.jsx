import { NavLink } from "react-router-dom";

function SidebarLinks() {
  return (
    <ul className="text-blackLight leading-default flex flex-col gap-y-[50px] text-base font-normal">
      <li>
        <NavLink className="flex items-center">
          <img src="" alt="" className="mr-4" />
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink className="flex items-center">
          <img src="" alt="" className="mr-4" />
          My Contracts
        </NavLink>
      </li>
      <li>
        <NavLink className="flex items-center">
          <img src="" alt="" className="mr-4" />
          Contract AI
        </NavLink>
      </li>
      <li>
        <NavLink className="flex items-center">
          <img src="" alt="" className="mr-4" />
          Notifications
        </NavLink>
      </li>
      <li>
        <NavLink className="flex items-center">
          <img src="" alt="" className="mr-4" />
          Profile
        </NavLink>
      </li>
    </ul>
  );
}

export default SidebarLinks;
