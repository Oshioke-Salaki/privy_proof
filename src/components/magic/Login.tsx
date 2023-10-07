import { LoginProps } from '@/utils/types'
import HomeNav from "../../ui/HomeNav";
import BtnSmall from "../../ui/BtnSmall"
import EmailOTP from './auth/EmailOTP';
import { useState } from 'react';
import LandingPage from "../LandingPage"

const Login = ({ token, setToken }: LoginProps) => {
  const [showConnectWalletModal, setShowConnectWalletModal] = useState(false);
  function toggleModal() {
    setShowConnectWalletModal((show) => !show);
  }
  return (
    <>
    <HomeNav>
        <BtnSmall onClick={toggleModal}>Connect Wallet</BtnSmall>
      </HomeNav>
     
    <LandingPage>
    <div className={`max-w-[100%] grid grid-cols-1 grid-flow-row auto-rows-fr gap-5 p-4 mt-8`}>
      
      
      <EmailOTP token={token} setToken={setToken} />      
    
    </div>
    </LandingPage>
      

    </>
  )
}

export default Login
