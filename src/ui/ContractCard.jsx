import contract from '../assets/contract.png';
import { NavLink } from 'react-router-dom';
function ContractCard() {
  return (
    <NavLink to="contract-draft" className="h-fit">
      <div className="bg-lightBlue relative flex h-fit justify-center py-2">
        <img src={contract} alt="" />
        <div className="bg-lightGrey absolute bottom-0 left-0 w-full py-4">
          <h1 className="text-center text-base font-extrabold leading-[15px] text-white">
            NDA Contract Template
            <br />
            (Two parties)
          </h1>
        </div>
      </div>
    </NavLink>
  );
}

export default ContractCard;
