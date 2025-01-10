import { GoArrowRight } from "react-icons/go";


const ProjectPortfolio = () => {
    return (
        <div className="w-full h-[700px] bg-zinc-800">
            {/* flex text content */}
            <div className="flex items-center justify-evenly gap-24">
                {/* first */}
                <div className="ml-14">
                <h1 className="text-green-600 border text-left border-green-500 w-32">SELECTED WORK</h1>
                <h1 className="text-white text-5xl text-left">ZORONOA®</h1>
                <h1 className="text-5xl text-white">PROJECT <span className="text-green-600">PORTFOLIO</span></h1>
                </div>
                {/* second */}
                <div>
                     {/* Read More Button */}
                      <div className="flex w-40 justify-center text-white items-center gap-2 bg-gradient-to-r from-green-500 to-green-800  py-2 rounded font-bold cursor-pointer">
                        Read More
                        <GoArrowRight className="bg-green-950 rounded p-1 text-2xl text-white" />
                      </div>
                </div>
            </div>
            {/* border here */}
            <div className=" border-green-900 mx-auto w-[1000px] my-8 border-4"></div>
            {/* images container */}
            <div className="grid grid-cols-5 gap-4">
            <div>
                <img className="w-72 rounded h-80" src="https://i.ibb.co.com/7GF8wP4/photo-8.jpg" alt="" />
            </div>
            <div>
                <img className="w-72 rounded h-80" src="https://i.ibb.co.com/pW0r34L/photo-9-2.jpg" alt="" />
            </div>
            <div className="relative">
    <img className="w-72 rounded h-80" src="https://i.ibb.co.com/h2LcrjY/photo-10-1.jpg" alt="" />
    <div className="bg-zinc-800 absolute rounded bottom-0 w-48 h-28 ml-4 mb-4  mx-auto">
        <h1 className="text-green-500 font-semiboldibold mt-4">BUSINESS STRATEGIES</h1>
        <p className="text-xl text-left ml-4 text-white">BRANDING <br /> DIGITAL</p>
    </div>
</div>

            <div>
                <img className="w-72 rounded h-80" src="https://i.ibb.co.com/1XZWWDx/photo-11.jpg" alt="" />
            </div>
            <div>
                <img className="w-72 rounded h-80" src="https://i.ibb.co.com/rm9zGRx/photo-12.jpg" alt="" />
            </div>
            </div>
           
            
        </div>
    );
};

export default ProjectPortfolio;