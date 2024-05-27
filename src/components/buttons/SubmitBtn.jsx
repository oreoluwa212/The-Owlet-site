function SubmitBtn({ buttonText, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-primary rounded-xl py-3 px-4 shadow-md text-white w-full mt-4"
    >
      {buttonText}
    </button>
  );
}

export default SubmitBtn;
