/* eslint-disable react/prop-types */

function BtnWide({ children, onClick }) {
  return (
    <button
      className="bg-primaryColor rounded-full px-[63.5px] py-[11.5px] text-base font-semibold leading-[25px] text-black"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default BtnWide;
