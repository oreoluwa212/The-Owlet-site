import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Pagination() {
  return (
    <>
      <div className="w-full hidden lgss:flex justify-between items-center px-[5%] py-12">
        <button className="flex gap-3 justify-center items-center px-3 font-semibold rounded-[8px] py-1">
          <FaArrowLeft />
          Previous
        </button>
        <div className="flex gap-6 font-semibold justify-center items-center cursor-pointer">
          <p className="bg-secondary bg-opacity-5 px-4 py-2 rounded-[8px]">1</p>
          <p>2</p>
          <p>3</p>
          <p>...</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>
        </div>
        <button className="flex gap-3 justify-center items-center px-3 font-semibold rounded-[8px] py-1">
          <FaArrowRight />
          Next
        </button>
      </div>

      <div className="w-full lgss:hidden flex justify-between items-center px-[5%] pt-6 mb-12">
        <button className="flex gap-3 justify-center items-center px-3 font-semibold rounded-[8px] border py-2">
          <FaArrowLeft />
        </button>
        <div className="text-[#344054] font-medium">
          <h2>Page 1 of 20</h2>
        </div>
        <button className="flex gap-3 justify-center items-center px-3 font-semibold rounded-[8px] border py-2">
          <FaArrowRight />
        </button>
      </div>
    </>
  );
}

export default Pagination