export default function CreateContract() {
  return (
    <div className="h-[440px]">
      <h2 className="mb-[17px] text-lg font-semibold leading-default text-black">
        NDA Contract
      </h2>
      <div className="flex h-full justify-center bg-secondaryColor pt-[59px]">
        <form className="flex h-fit w-[508px] flex-col bg-white px-[36px] pb-[56px] pt-[17px] shadow-primaryShadow">
          <h2 className="mb-[21px] text-center text-base font-bold leading-default text-black">
            Recieving Party
          </h2>
          <label className="text-base font-bold leading-default text-black">
            ENS Identity
          </label>
          <input
            type="text"
            placeholder="Caleb.eth"
            className="mt-[9px] rounded-[10px] border-[0.5px] border-solid border-[#c4c4c4] bg-white px-[30px] py-[14px]"
          />
        </form>
      </div>
    </div>
  );
}
