import { FiUser } from "react-icons/fi";

function Navbar() {
  return (
    <div className="flex p-3 items-center border-[var(--border)] border-b-[1px] justify-between bg-[var(--main)] px-5">
      <div className="flex gap-2 items-center">
        <p className="text-2xl jet-bold text-white">INTERREACT</p>
        <div className="flex-col text-[var(--light)]">
          <hr className="border-[main] pb-[0.1em]"></hr>
          <p className="jet-light text-[0.6em] pb-[0.1em] tracking-[0.3em]">
            THE COMPONENTS TOOL
          </p>
          <hr className="border-[main] "></hr>
        </div>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-10">
        <p className="jet-normal text-[var(--light)] text-md cursor-pointer hover:text-white">
          <span className="inline-block relative">
            H
            <hr className="absolute left-0 bottom-0 w-full border-1 border-gray-500" />
          </span>
          OME
        </p>
        <p className="jet-normal text-[var(--light)] text-md cursor-pointer hover:text-white">
          <span className="inline-block relative">
            C
            <hr className="absolute left-0 bottom-0 w-full border-1 border-gray-500" />
          </span>
          OMPONENTS
        </p>
        <p className="jet-normal text-[var(--light)] text-md cursor-pointer hover:text-white">
          <span className="inline-block relative">
            W
            <hr className="absolute left-0 bottom-0 w-full border-1 border-gray-500" />
          </span>
          ORKSPACE
        </p>
      </div>
      <div>
        <FiUser className="text-2xl text-[var(--light)] hover:text-white" />
      </div>
    </div>
  );
}

export default Navbar;
