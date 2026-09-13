import { CONTACT } from "../constants";
import { ImLocation } from "react-icons/im";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20 px-4 md:px-8">
      <h2 className="my-5 text-center text-2xl md:text-4xl font-bold">
        Get in Touch
      </h2>
      <div className="text-center tracking-tight">
        <div className="my-1 flex flex-col items-center gap-2 md:gap-3">
          <p className="flex items-center justify-center gap-2 text-lg font-semibold md:text-xl">
            <ImLocation className="text-xl md:text-2xl text-cyan-400" />
            <span>{CONTACT.address}</span>
          </p>
          <p className="flex items-center justify-center gap-2 text-lg font-semibold md:text-xl">
            <AiOutlinePhone className="text-xl md:text-2xl text-green-400" />
            <span className="text-green-400">{CONTACT.phoneNo}</span>
          </p>
          <a
            href={`mailto:${CONTACT.email}`}
            className="my-1 flex items-center justify-center gap-2 text-lg font-semibold md:text-xl"
            style={{ textDecoration: "none" }}
          >
            <AiOutlineMail className="text-xl md:text-2xl text-red-400" />
            <span className="text-red-400">{CONTACT.email}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
