/* eslint-disable react/prop-types */
import AddressContainer from "./AddressContainer";
import Logo from "./Logo";
import placeholder from "../assets/placeholder.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { magic } from "../libs/magic";

function AuthNav({ address }) {
  const [showButton, setShowButton] = useState(false);
  const checkWalletType = async () => {
    try {
      // Fetch the wallet's information using Magic's user.getInfo method
      const walletInfo = await magic.user.getInfo();
      console.log(walletInfo);
      ///@ts-ignore
      // Determine if the wallet type is "magic"
      const isMagicWallet = walletInfo.walletType === "magic";

      // Set 'showButton' state based on the result of the check
      setShowButton(isMagicWallet);
    } catch (error) {
      // Log any errors that occur during the wallet type check process
      console.error("checkWalletType:", error);
    }
  };

  // Define the event handler for the button click
  const handleShowUI = async () => {
    try {
      // Try to show the magic wallet user interface
      await magic?.wallet.showUI();
    } catch (error) {
      // Log any errors that occur during the process
      console.error("handleShowUI:", error);
    }
  };

  const addressClick = async () => {
    await checkWalletType();
    await handleShowUI();
  };

  return (
    <nav
      className="col-span-full flex w-full items-center justify-between bg-white py-7 pl-[34px] pr-[27px] shadow-secondaryShadow"
      // style={layout ? layout : {}}
    >
      <NavLink to="/">
        <Logo />
      </NavLink>
      <div className="flex items-center">
        <AddressContainer address={address} />
        <img src={placeholder} className="ml-6" alt="" onClick={addressClick} />
      </div>
    </nav>
  );
}

export default AuthNav;
