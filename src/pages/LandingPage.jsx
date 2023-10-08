// import { useState } from "react";
// import BtnWide from "../ui/BtnWide";
// import ConnectModal from "../ui/ConnectModal";
import HomeNav from "../ui/HomeNav";
// import BtnSmall from "../ui/BtnSmall";
import ConnectButton from "../components/ConnectButton";

function LandingPage() {
  // const [showConnectWalletModal, setShowConnectWalletModal] = useState(false);
  // function toggleModal() {
  //   // setShowConnectWalletModal((show) => !show);
  // }
  return (
    <div className="relative h-[100vh] overflow-y-hidden">
      {/* {showConnectWalletModal && <ConnectModal toggleModal={toggleModal} />} */}
      <HomeNav>
        <ConnectButton />
      </HomeNav>
      <main className="heroImg h-[929px] pt-[167px] text-center text-white">
        <h1 className="mb-[27px] text-[90px] font-bold leading-[84px]">
          Unlock Privacy
          <br /> Prove Legitimacy{" "}
        </h1>
        <p className="mb-[30px] text-[22px] font-semibold leading-default">
          Where your agreements stay private, and their existence is
          indisputable
        </p>
        {/* <BtnWide onClick={toggleModal}>Connect Wallet</BtnWide>
         */}
        <ConnectButton />
      </main>
    </div>
  );
}

export default LandingPage;
