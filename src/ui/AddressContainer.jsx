/* eslint-disable react/prop-types */
function AddressContainer({ address }) {
  return (
    <div className="border-blackLight rounded-full border-[0.5px] border-solid bg-white px-[26.5px] py-[10px] text-center text-base font-semibold leading-[25px] text-black">
      {address.slice(0, 7).concat("......")}
    </div>
  );
}

export default AddressContainer;
