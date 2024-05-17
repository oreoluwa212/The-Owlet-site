import { GoInbox, GoStopwatch } from "react-icons/go";
import { HiOutlineTag } from "react-icons/hi2";
import TextAndIcon from "./TextAndIcon";

function TextLine() {
  return (
    <div className="lgss:px-[5%] w-full flex justify-center items-center pt-10">
      <div className="mt-5 flex lgss:w-[80%] gap-6 justify-between">
        <TextAndIcon
          Icon={GoStopwatch}
          h3="An order is made every"
          h1="0.12sec"
        />
        <TextAndIcon Icon={GoInbox} h3="Orders Completed" h1="54M+" />
        <TextAndIcon
          Icon={HiOutlineTag}
          h3="Prices Starting from"
          h1="#200 /k"
        />
      </div>
    </div>
  );
}

export default TextLine;
