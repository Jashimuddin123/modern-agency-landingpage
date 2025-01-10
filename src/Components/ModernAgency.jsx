import { GoArrowRight } from "react-icons/go";
import { LiaPhoneVolumeSolid } from "react-icons/lia";


const ModernAgency = () => {
    return (
        <div className="bg-zinc-700 min-h-screen w-[1200px]">
       <h1 className="text-green-600 w-44 bg-black border  border-green-600">...SMART SOLUTIONS</h1>

           {/* context div */}
           <div className="flex items-center justify-between my-20">
            {/* text content div */}
            <div className="flex-1">
       <h1 className="text-white text-4xl text-left ml-16 font-bold">Best creative and <br /> modern agency</h1>
       <p className="text-white text-left ml-16 ">Rhoncus sodales sagittis risus accumsan fermentum. Maecenas egestas curae cras adipiscing nostra aliquet. Justo tincidunt egestas pellentesque dignissim euismod. Nam commodo ante morbi ut sagittis; sapien viverra auctor.

Malesuada montes inceptos massa aliquet erat. Sit maximus a natoque metus convallis velit. Ornare semper nullam a penatibus libero elementum hac.</p>
<div className="border border-y-4"></div>
{/*  */}
<div className="flex justify-center items-center gap-8 mt-8">
  {/* Read More Button */}
  <div className="flex text-white items-center gap-2 bg-gradient-to-r from-green-500 to-green-800 px-4 py-2 rounded font-bold cursor-pointer">
    Read More
    <GoArrowRight className="bg-green-950 rounded p-1 text-2xl text-white" />
  </div>

  {/* Call Section */}
  <div className="flex items-center gap-4">
    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
      <LiaPhoneVolumeSolid className="text-2xl" />
    </div>
    <div className="text-white">
      <p className="font-semibold">Call 24hrs / 7 Days</p>
      <p className="font-bold">+8801820339433</p>
    </div>
  </div>
</div>

            </div>
            {/* picturs content */}
   <div className="flex-1 flex justify-between gap-4">
     <img className="w-96 h-96" src="https://i.ibb.co.com/Nj3ds1F/photo-5.jpg" alt="" />

<img className="w-96 h-96"src="https://i.ibb.co.com/jMBpDNx/photo-4-1.jpg" alt="" />
   </div>
           </div>
        </div>
    );
};

export default ModernAgency;