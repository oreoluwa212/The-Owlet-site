import React from "react";
import { ClipLoader } from "react-spinners";

function SubmitBtn({ buttonText, onClick, loading }) {
  return (
    <button
      onClick={onClick}
      className="bg-primary rounded-xl py-3 px-4 shadow-md text-white w-full mt-4"
      disabled={loading}
    >
      {loading && <ClipLoader size={25} color={"#ffffff"} loading={loading} />}
      {!loading && buttonText}
    </button>
  );
}

export default SubmitBtn;
