import React, { createContext, useContext, useEffect, useState } from "react";
import { useWeb3 } from "./Web3Context";
import abi from "../utils/AgreementContract.abi.json";
import { ethers } from "ethers";

const CONTRACT_ADDRESS = "0xeb166C475f6cD6D591AA41859408f3a6984cC209";

// Define the type for the user context.
type ContractContextType = {
  user: string | null;
  party1Agreements: any | null;
  party2Agreements: any | null;
  createAgreement: (address: string, hash: string) => void;
  party1SignAgreement: (agreementId: number) => void;
  party2SignAgreement: (agreementId: number) => void;
  mintNFTAgreement: (agreementId: number) => void;
  getParty1Agreements: () => any | null;
  getParty2Agreements: () => any | null;
  getAgreementDetails: (agreementId: number) => any | null;
};

// Create a context for user data.
const ContractContext = createContext<ContractContextType>({
  user: null,
  party1Agreements: null,
  party2Agreements: null,
  createAgreement: () => {},
  party1SignAgreement: () => {},
  party2SignAgreement: () => {},
  mintNFTAgreement: () => {},
  getParty1Agreements: () => {},
  getParty2Agreements: () => {},
  getAgreementDetails: () => {},
});

// Custom hook for accessing user context data.
export const useUser = () => useContext(ContractContext);

// Provider component that wraps parts of the app that need user context.
export const ContractProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // Use the web3 context.
  const { ether } = useWeb3();

  // Initialize user state to hold user's account information.
  const { user } = useUser();

  const [party1Agreements, setParty1Agreements] = useState<any | null>(null);
  const [party2Agreements, setParty2Agreements] = useState<any | null>(null);

  const createAgreement = async (address: string, hash: string) => {
    const signer = ether.getSigner();
    const contractInstance = new ethers.Contract(CONTRACT_ADDRESS, abi, signer);

    // Send transaction to smart contract to update message

    try {
      const tx = await contractInstance.createAgreement(address, hash);

      // Wait for transaction to finish

      const receipt = await tx.wait();
    } catch (err) {
      console.log(err);
    }
  };
  const party1SignAgreement = async (agreementId: number) => {
    const signer = ether.getSigner();
    const contractInstance = new ethers.Contract(CONTRACT_ADDRESS, abi, signer);

    // Send transaction to smart contract to update message

    try {
      const tx = await contractInstance.party1SignAgreement(agreementId);

      // Wait for transaction to finish

      const receipt = await tx.wait();
    } catch (err) {
      console.log(err);
    }
  };
  const party2SignAgreement = async (agreementId: number) => {
    const signer = ether.getSigner();
    const contractInstance = new ethers.Contract(CONTRACT_ADDRESS, abi, signer);

    // Send transaction to smart contract to update message

    try {
      const tx = await contractInstance.party2SignAgreement(agreementId);

      // Wait for transaction to finish

      const receipt = await tx.wait();
    } catch (err) {
      console.log(err);
    }
  };
  const mintNFTAgreement = async (agreementId: number) => {
    const signer = ether.getSigner();
    const contractInstance = new ethers.Contract(CONTRACT_ADDRESS, abi, signer);

    // Send transaction to smart contract to update message

    try {
      const tx = await contractInstance.mintNFTAgreement(agreementId);

      // Wait for transaction to finish

      const receipt = await tx.wait();
    } catch (err) {
      console.log(err);
    }
  };
  ///FETCH SOME STUFF]
  const getParty1Agreements = async () => {
    const signer = ether.getSigner();
    const contractInstance = new ethers.Contract(CONTRACT_ADDRESS, abi, signer);

    // Send transaction to smart contract to update message

    try {
      const tx = await contractInstance.getParty1Agreements();
      console.log(tx);
      setParty1Agreements(tx);
      return tx;
    } catch (err) {
      console.log(err);
      return null;
    }
  };

  const getParty2Agreements = async () => {
    const signer = ether.getSigner();
    const contractInstance = new ethers.Contract(CONTRACT_ADDRESS, abi, signer);

    // Send transaction to smart contract to update message

    try {
      const tx = await contractInstance.getParty2Agreements();
      console.log(tx);
      setParty2Agreements(tx);
      return tx;
    } catch (err) {
      console.log(err);
      return null;
    }
  };
  const getAgreementDetails = async (agreementId: number) => {
    const signer = ether.getSigner();
    const contractInstance = new ethers.Contract(CONTRACT_ADDRESS, abi, signer);

    // Send transaction to smart contract to update message

    try {
      const tx = await contractInstance.getAgreementDetails(agreementId);
      return tx;
    } catch (err) {
      console.log(err);
      return null;
    }
  };
  return (
    <ContractContext.Provider
      value={{
        user: user,
        party1Agreements,
        party2Agreements,
        createAgreement,
        party1SignAgreement,
        party2SignAgreement,
        mintNFTAgreement,
        getParty1Agreements,
        getParty2Agreements,
        getAgreementDetails,
      }}
    >
      {children}
    </ContractContext.Provider>
  );
};
