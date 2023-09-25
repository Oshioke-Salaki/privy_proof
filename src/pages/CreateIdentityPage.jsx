import CreateIdentityForm from "../forms/CreateIdentityForm";
import AuthNav from "../ui/AuthNav";

function CreateIdentityPage() {
  return (
    <div>
      <AuthNav />
      <div className="flex justify-center pt-[88px]">
        <CreateIdentityForm />
      </div>
    </div>
  );
}

export default CreateIdentityPage;
