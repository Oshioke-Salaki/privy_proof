import { useNavigate } from 'react-router';

function ContractDraft() {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="mb-[17px] text-lg font-semibold leading-default text-black">
        NDA Contract
      </h1>
      <div className="flex h-full justify-center bg-secondaryColor pb-[31px] pt-[41px]">
        <form className="pb-[31px flex h-fit w-full flex-col pl-[39px] pr-[48px]">
          <h2 className="mb-[21px] text-center text-base font-bold leading-default text-black">
            Disclosing Party
          </h2>
          <div className="flex flex-col gap-y-6">
            <div className="grid grid-cols-[1fr_1fr] gap-x-[120px]">
              <div>
                <label className="text-base font-semibold leading-default text-black">
                  Disclosing Party
                </label>
                <input
                  type="text"
                  placeholder="Caleb.eth"
                  className="mt-[8px] w-full rounded-[10px] border-[0.5px] border-solid border-[#c4c4c4] bg-white px-[16px] py-[14px]"
                />
              </div>
              <div>
                <label className="text-base font-semibold leading-default text-black">
                  Disclosing Party
                </label>
                <input
                  type="text"
                  placeholder="Caleb.eth"
                  className="mt-[8px] w-full rounded-[10px] border-[0.5px] border-solid border-[#c4c4c4] bg-white px-[16px] py-[14px]"
                />
              </div>
            </div>
            <div className="grid grid-cols-[1fr_1fr] gap-x-[120px]">
              <div>
                <label className="text-base font-semibold leading-default text-black">
                  Purpose
                </label>
                <input
                  type="text"
                  placeholder="Caleb.eth"
                  className="mt-[8px] h-[128px] w-full rounded-[10px] border-[0.5px] border-solid border-[#c4c4c4] bg-white px-[16px] py-[14px]"
                />
              </div>
              <div>
                <label className="text-base font-semibold leading-default text-black">
                  Obligation
                </label>
                <input
                  type="text"
                  placeholder="Caleb.eth"
                  className="mt-[8px] h-[128px] w-full rounded-[10px] border-[0.5px] border-solid border-[#c4c4c4] bg-white px-[16px] py-[14px]"
                />
              </div>
            </div>
            <div className="grid grid-cols-[1fr_1fr] gap-x-[120px]">
              <div>
                <label className="text-base font-semibold leading-default text-black">
                  Confidential Information
                </label>
                <input
                  type="text"
                  placeholder="Caleb.eth"
                  className="mt-[8px] h-[128px] w-full rounded-[10px] border-[0.5px] border-solid border-[#c4c4c4] bg-white px-[16px] py-[14px]"
                />
              </div>
              <div>
                <label className="text-base font-semibold leading-default text-black">
                  Exculsions
                </label>
                <input
                  type="text"
                  placeholder="Caleb.eth"
                  className="mt-[8px] h-[128px] w-full rounded-[10px] border-[0.5px] border-solid border-[#c4c4c4] bg-white px-[16px] py-[14px]"
                />
              </div>
            </div>
            <div className="grid grid-cols-[1fr_1fr] gap-x-[120px]">
              <div>
                <label className="text-base font-semibold leading-default text-black">
                  Terms
                </label>
                <input
                  type="text"
                  placeholder="Caleb.eth"
                  className="mt-[8px] h-[128px] w-full rounded-[10px] border-[0.5px] border-solid border-[#c4c4c4] bg-white px-[16px] py-[14px]"
                />
              </div>
              <div>
                <label className="text-base font-semibold leading-default text-black">
                  Date
                </label>
                <input
                  type="text"
                  placeholder="Caleb.eth"
                  className="mt-[8px] h-[128px] w-full rounded-[10px] border-[0.5px] border-solid border-[#c4c4c4] bg-white px-[16px] py-[14px]"
                />
              </div>
            </div>
            <button
              className="mt-9 w-[483px] self-center rounded-full bg-primaryColor py-3 text-center text-base font-semibold leading-default text-black"
              onClick={() => navigate('contract-preview')}
            >
              Preview
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContractDraft;
