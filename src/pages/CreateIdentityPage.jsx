import ConnectButton from "../components/ConnectButton";
import { useUser } from "../context/UserContext";
import CreateIdentityForm from "../forms/CreateIdentityForm";
import AuthNav from "../ui/AuthNav";

function CreateIdentityPage() {
  const { user } = useUser();

  return (
    <>
      {user && (
        <div>
          <AuthNav address={user} />
          <div className="flex justify-center pt-[88px]">
            <CreateIdentityForm />
          </div>
        </div>
      )}
      {!user && <ConnectButton />}
    </>
  );
}

export default CreateIdentityPage;
