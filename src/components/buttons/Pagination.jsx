import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Pagination() {
  return (
    <div className="w-full flex justify-between items-center px-[5%] py-14">
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
  );
}

export default Pagination