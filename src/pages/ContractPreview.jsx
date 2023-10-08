import { NavLink } from 'react-router-dom';

function ContractPreview() {
  return (
    <div className="text-black">
      <h1 className="mb-[17px] text-lg font-semibold leading-default text-black">
        Preview
      </h1>
      <div className="flex h-full justify-center  bg-secondaryColor pb-[31px] pt-[16px] text-black text-base font-normal leading-6">
        <h2 className="font-bold">Non-Disclosure Agreement (NDA)</h2>
        <p className="font-bold">
          This Non-Disclosure Agreement ("Agreement") is entered into on 28th
          September 2023 by and between:
          <br />
          Disclosing Party: Name of disclosing party:John Address: N0.20 Jabi,
          Abuja, Nigeria ("John.eth")
          <br />
          Recovering Party: Name of receiving party: Daniel Address: NO. 50
          Razor Street, Abuja Nigeria ("Daniel.eth")
        </p>
        <p>Collectively referedd to as the "Parties".</p>
        <div>
          <p>
            <span className="font-bold mb-4">1. Purpose:</span> The parties wish
            to explore discusions and potential collaborations (the "purpose"),
            During which John may disclose certain confidential and proprietary
            information to Daniel
          </p>
          <p>
            <span className="font-bold mb-4">2. Confidential Information:</span>{' '}
            Confidential information may include, but is not limited to, any
            data, trade secrets, bussiness strategies, financial information,
            texhnical data, product information, inventions, or any other
            information that is designated as confidential by John
            ("Confidential Information").
          </p>
          <div>
            <p>
              <span className="font-bold mb-4">3. Obligations:</span> Daniel
              agrees to:
            </p>
            <ul className="list-disc">
              <li>
                Keep all Confidential Information strictly confidential and not
                to disclose it to any third party without the prior written
                consent of John.
              </li>
              <li>
                Use the Confidential Information solely for the Purpose and not
                for any other purpose without the prior written consent of John.
              </li>
              <li>
                Take all reasonable precautions to protect the confidential
                information from unauthorized disclosure, including
                implementingadequate security measures.
              </li>
            </ul>
          </div>
          <div>
            <p>
              <span className="font-bold mb-4">4. Exclusions:</span> The
              obligations set forth in this Agreement do not apply to any
              information that:
            </p>
            <ul className="list-disc">
              <li>Was known to Daniel before its disclosure by John.</li>
              <li>Is or becomes publicly known through no fault of Daniel.</li>
              <li>
                Is received by Daniel from a third party without restrictions on
                disclosure.
              </li>
            </ul>
          </div>
          <p>
            <span className="font-bold mb-4">5. Return of Information:</span>{' '}
            Upon written request from John, Daniel shall promptly return or
            destroy all Confidential Information, including any copies or
            reproductions thereof.
          </p>
          <p>
            <span className="font-bold mb-4">6. Term:</span> This Agreement
            shall commence on the effective date and shall continue in full
            force effect untill [Termination Date] or untill terminated by
            written notice from either Party.
          </p>
          <p>
            <span className="font-bold mb-4">
              7. Governing Law and Jurisdiction:
            </span>{' '}
            This Agreement shall be governed by and constructed in accordance
            with the laws of [Jurisdiction]. Any disputes arising under or in
            connection with this agreement shall be subject to the exclusive
            jurisdiction of the courts of [Juristiction].
          </p>
          <p>
            <span className="font-bold mb-4">8. Entire Agreement:</span> This
            Agreement constitutes the entire agreement between the Parties
            concerning the subject matter hereof and supersedes all prior and
            contemporaneous understandings, agreements, representations, and
            warranties.
          </p>
          <p className="font-bold">
            Disclosing Party: John [Date - 12-08-2023]
            <br />
            Recovering Party: Daniel [Date - 12-08-2023]
          </p>
          <NavLink to="contract-id">
            <button className="mt-[20px] w-[483px] self-center rounded-full bg-primaryColor py-3 text-center text-base font-semibold leading-default text-black">
              Sign
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default ContractPreview;
