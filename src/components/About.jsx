import aboutImg from "../assets/aboutt.png";
import { ABOUT_TEXT } from "../constants";
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-5xl font-bold">
            About
            <span className="text-neutral-600">
            Me
            </span>
        </h2>
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 lg:p=12">
                <div className="flex item-center justify-center">
                    <img src={aboutImg} alt="about" className="rounded-4xl h-96"/>
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <div className="flex justify-center lg:justify-start">
                    <p className="my-2 max-w-xl py-6 font-semihold text-xl">
                        {ABOUT_TEXT}
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About