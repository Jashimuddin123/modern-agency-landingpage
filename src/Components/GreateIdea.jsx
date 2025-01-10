

const GreateIdea = () => {
    return (
        <div className="w-full flex justify-center h-[700px] bg-zinc-600">
            {/*img content */}
            <div className="flex-1 relative">
  <img
    className="w-full h-full object-cover"
    src="https://i.ibb.co/x5Mwv5G/photo-7.jpg"
    alt=""
  />
  <div className="absolute  inset-0 bottom-0 bg-gradient-to-t from-green-500 to-transparent h-1/2"></div>
  <div className="absolute ml-96  items-center  bottom-4 bg-zinc-600 rounded w-48 h-36 left-4 text-white">
    <h1 className="text-5xl font-bold">A+</h1>
    <p className="text-sm">(4.5) Rating Reviews</p>
  </div>
</div>




            {/* text content */}
            <div className="flex-1">
                <h1 className="text-green-500 border ml-14 my-10 font-semiboldbold border-green-500 w-48 rounded">WE BUILD SUCCESSFUL</h1>
                <h1 className="text-5xl font-bold ml-14 text-left text-white">Giving your business <br /> some great ideas</h1>
                <p className="text-white text-left ml-14">Gravida taciti tellus lacinia feugiat nam consequat. Per amet metus praesent netus auctor magna nam. Conubia efficitur cras ultricies lobortis parturient venenatis</p>
                <h1 className="text-5xl text-left ml-14 text-white">CREATING NEW <br /> <span className="text-green-600 ">IDENTITY</span></h1>
                <div className=" border-4 border-red-300 w-96 ml-14 my-4"></div>
                {/* text conteent */}
                <div className="flex">
                    {/* text 1 */}
                    <div className="ml-14">
                    <p className="text-white text-left">01</p>
                    <h1 className="text-white text-left">DEVELOPMENT</h1>
                    <p className="text-white text-left my-2">03</p>
                    <h1 className="text-white text-left">SOCIAL MANAGEMENT</h1>
                    </div>
                    {/* text2 */}
                    <div className="ml-14">
                    <p className="text-white text-left">02</p>
                    <h1 className="text-white text-left">DEVELOPMENT</h1>
                    <p className="text-white text-left my-2">04</p>
                    <h1 className="text-white text-left">SOCIAL MANAGEMENT</h1>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default GreateIdea;