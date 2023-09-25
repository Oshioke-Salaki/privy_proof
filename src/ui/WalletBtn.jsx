import { NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */
function WalletBtn({ walletLogo, name }) {
  return (
    <NavLink to="/create">
      <button className="text-blackLight flex h-[65px] w-full items-center rounded-[2px] border-[0.5px] border-solid border-black pl-[19px] text-xl font-normal leading-[25px]">
        <img src={walletLogo} className="mr-[43px]" alt="" />
        Sign in with {name}
      </button>
    </NavLink>
  );
}

export default WalletBtn;
