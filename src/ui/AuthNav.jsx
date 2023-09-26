/* eslint-disable react/prop-types */
import AddressContainer from "./AddressContainer";
import Logo from "./Logo";
import placeholder from "../assets/placeholder.png";

function AuthNav() {
  return (
    <nav
      className="col-span-full flex w-full items-center justify-between bg-white py-7 pl-[34px] pr-[27px] shadow-secondaryShadow"
      // style={layout ? layout : {}}
    >
      <Logo />
      <div className="flex items-center">
        <AddressContainer address="0x129091d855B4754bAB8FAd6345d9B32795639d35" />
        <img src={placeholder} className="ml-6" alt="" />
      </div>
    </nav>
  );
}

export default AuthNav;
