import { CONTACT } from "../constants";
import { ImLocation } from "react-icons/im";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h2 className="my-10 text-center text-4xl font-bold">
        Get in Touch
      </h2>
      <div className="text-center tracking-tighter">
        <p className="my-5 font-semibold text-xl flex items-center justify-center gap-2">
          <ImLocation className="text-2xl " />
          <p className="mb-1  font-semibold">{CONTACT.address}</p>
          
          <AiOutlinePhone className="text-2xl text-green-500" />
          <p className="mb-1 text-green-500 font-semibold">{CONTACT.phoneNo}</p>
        
        <a
          href={`mailto:${CONTACT.email}`}
          className="my-4 font-semibold text-xl flex items-center justify-center gap-2"
          style={{ textDecoration: 'none' }}
        >
          <AiOutlineMail className="text-2xl text-red-600" />
          <p className="mb-1 text-red-600 font-semibold">{CONTACT.email}</p>
        </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
