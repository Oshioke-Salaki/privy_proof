/* eslint-disable react/prop-types */
function BtnSmall({ children, onClick }) {
  return (
    <button
      className="bg-primaryColor rounded-full px-[26px] py-[11.5px] text-base font-semibold leading-[25px] text-black"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default BtnSmall;
