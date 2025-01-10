import Marquee from "react-fast-marquee";
import { GoArrowUpRight } from "react-icons/go";

const Marque = () => {
    return (
        <div>
            <Marquee 
                speed={150} // Adjust the speed here, default is 50
                className="h-32 bg-gradient-to-r from-green-950 to-green-500 text-7xl text-black"
            >
                Specialized knowledge
                <GoArrowUpRight className="text-white mx-4 font-bold mt-4" />
                 and experience
                We 
                <GoArrowUpRight className="text-white mx-4 font-bold mt-4" />
                create special things
            </Marquee>
            <Marquee 
                speed={150} 
                direction="right" // Makes the marquee run from left to right
                className="h-32 bg-gradient-to-r from-gray-700 to-black text-7xl text-white"
            >
                Specialized knowledge and 
                <GoArrowUpRight className="text-green-600 mx-4 font-bold mt-4" />
                experience
                
                We
                <GoArrowUpRight className="text-green-600 mx-4 font-bold mt-4" />
                 create special
                 <GoArrowUpRight className="text-green-600 mx-4 font-bold mt-4" /> things
            </Marquee>
        </div>
    );
};

export default Marque;
