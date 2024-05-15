function FormInput({ type, name, id, placeholder }) {
  return (
    <input
      className="border w-full mt-4 p-2 outline-none rounded-[8px]"
      type={type}
      name={name}
      placeholder={placeholder}
      id={id}
    />
  );
}

export default FormInput;
