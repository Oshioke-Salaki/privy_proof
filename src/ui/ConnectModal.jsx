/* eslint-disable react/prop-types */
import WalletBtn from "./WalletBtn";
import metaMask from "../assets/metamask.png";
import walletConnect from "../assets/walletconnect.png";

function ConnectModal({ toggleModal }) {
  return (
    <div
      className="bg-overlayColor absolute inset-0 flex justify-center pt-[148px]"
      onClick={toggleModal}
    >
      <div className="h-fit w-[508px] rounded-[5px] bg-white px-9 pb-[62px] pt-4 text-center">
        <h2 className="leading-default mb-[41px] text-base font-bold text-black">
          Connect Wallet
        </h2>
        <div className="flex flex-col gap-y-4">
          <WalletBtn name="metamask" walletLogo={metaMask} />
          <WalletBtn name="WalletConnect" walletLogo={walletConnect} />
        </div>
      </div>
    </div>
  );
}

export default ConnectModal;
