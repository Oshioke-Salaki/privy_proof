// import { VStack } from "@chakra-ui/react";
// import { useUser } from "./context/UserContext";
// import ConnectButton from "./components/ConnectButton";
// import WalletDetail from "./components/WalletDetail";
// import DisconnectButton from "./components/DisconnectButton";
// import ShowUIButton from "./components/ShowUIButton";
// import SignMessage from "./components/SignMessage";

// function App() {
//   // Use the UserContext to get the current logged-in user
//   const { user } = useUser();

//   return (
//     <VStack justifyContent="center" alignItems="center" minH="100vh">
//       {/* If no user is available, display the Connect button.
//           Otherwise, display the Wallet details, Sign Message Component, Disconnect button, and ShowUI button. */}
//       {!user ? (
//         <ConnectButton />
//       ) : (
//         <>
//           <WalletDetail />
//           <SignMessage />
//           <DisconnectButton />
//           <ShowUIButton />
//         </>
//       )}
//     </VStack>
//   );
// }

// export default App;
import CreateIdentityPage from "./pages/CreateIdentityPage";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import LandingPage from "./pages/LandingPage";
import DashboardPage from "./pages/DashboardPage";
import WhatToDo from "./pages/WhatToDo";
import CreateContract from "./pages/CreateContract";
import ContractDraft from "./pages/ContractDraft";
import ContractPreview from "./pages/ContractPreview";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/create" element={<CreateIdentityPage />} />
        <Route path="/choice" element={<WhatToDo />} />
        <Route path="/app" element={<AppLayout />}>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="contract-draft" element={<ContractDraft />} />
          <Route path="contract-preview" element={<ContractPreview />} />
          <Route path="create-contract" element={<CreateContract />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
