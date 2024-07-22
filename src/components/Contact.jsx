import { CONTACT } from "../constants";
import { ImLocation } from "react-icons/im";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20 px-4 md:px-8">
      <h2 className="my-10 text-center text-3xl md:text-4xl font-bold">
        Get in Touch
      </h2>
      <div className="text-center tracking-tight">
        <div className="my-5 flex flex-col items-center gap-4 md:gap-6">
          <p className="font-semibold text-lg md:text-xl flex items-center justify-center gap-2">
            <ImLocation className="text-xl md:text-2xl" />
            <span>{CONTACT.address}</span>
          </p>
          <p className="font-semibold text-lg md:text-xl flex items-center justify-center gap-2">
            <AiOutlinePhone className="text-xl md:text-2xl text-green-500" />
            <span className="text-green-500">{CONTACT.phoneNo}</span>
          </p>
          <a
            href={`mailto:${CONTACT.email}`}
            className="my-4 font-semibold text-lg md:text-xl flex items-center justify-center gap-2"
            style={{ textDecoration: 'none' }}
          >
            <AiOutlineMail className="text-xl md:text-2xl text-red-600" />
            <span className="text-red-600">{CONTACT.email}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
