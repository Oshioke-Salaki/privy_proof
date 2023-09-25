import ContractCard from "../ui/ContractCard";

function DashboardPage() {
  return (
    <div className="flex flex-col gap-y-[31px]">
      <div className="flex flex-col gap-y-[31px]">
        <h1 className="leading-default mb-[17px] text-[18px] font-semibold text-black">
          Available Contract Templates
        </h1>
        <div className="grid grid-cols-[1fr_1fr_1fr] gap-x-[25px] gap-y-[25px]">
          <ContractCard />
          <ContractCard />
          <ContractCard />
        </div>
      </div>
      <div>
        <h1 className="leading-default mb-[17px] text-[18px] font-semibold text-black">
          Your Contracts
        </h1>
        <div className="grid grid-cols-[1fr_1fr_1fr] gap-x-[25px] gap-y-[25px]">
          <ContractCard />
          <ContractCard />
          <ContractCard />
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
