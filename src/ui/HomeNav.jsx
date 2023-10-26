/* eslint-disable react/prop-types */

import Logo from './Logo';

function HomeNav({ children }) {
  return (
    <div className="flex items-center border-b-solid border-b-[0.5px] border-b-[#c4c4c4] sm:border-b-none justify-center sm:justify-between bg-white px-[80px]  pt-[22px] pb-[7.5px] sm:py-6">
      <Logo />
      <div className="sm:inline-block hidden">{children}</div>
    </div>
  );
}

export default HomeNav;
