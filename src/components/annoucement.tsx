'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Announcement() {
  return (
    <div className="w-full bg-black text-white flex justify-between items-center sm:h-[40px] md:h-[30px] lg:h-[38px] xl:h-[48px] 2xl:h-[50px] px-4">
      {/* Left side */}
      <div className="flex items-center gap-2 justify-center w-full">
        <h1 className="flex space-x-2 text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl ">
        <span className="sm:inline text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl ">
            Summer Sale - OFF 50%!
          </span>
          <span className="hidden md:inline">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </span>
        </h1>
        <button className="font-bold underline text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl">
          Shop Now
        </button>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-2 justify-end">
        <p className="text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl" aria-label="Language selection">
          English
        </p>
        <FontAwesomeIcon icon={faChevronDown} className="down-arrow mr-[1.2in]" aria-hidden="true" />
      </div>
    </div>
  );
}

export default Announcement;