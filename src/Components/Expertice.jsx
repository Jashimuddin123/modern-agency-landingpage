

const Expertice = () => {
    return (
        <div
        className="relative w-full h-[700px] bg-black bg-cover bg-center"
        style={{
            backgroundImage: "url('https://i.ibb.co.com/4dzxKHc/photo-6-1.png')", // Replace with your background image URL
        }} 
        >
            <div>
                <h1 className="text-white ">EXPERIENCE SUCCESS</h1>
                <h1 className="text-white text-5xl font-bold">Experience by <br /> passion & expertise</h1>
                <p className="text-white text-center w-96 mx-auto">Netus turpis habitasse semper ipsum sollicitudin malesuada. Maecenas posuere potenti litora at varius ante malesuada pulvinar elit</p>
            </div>
  

  {/* expertice block */}
  <div className="flex gap-14 justify-center mt-48">
  <div className="border border-white hover:bg-green-500 rounded-full w-48 h-48 flex flex-col items-center justify-center">
    <h1 className="text-3xl text-white">
      <span className="inline-block hover:animate-bounce">1</span>
      <span className="inline-block hover:animate-bounce">4</span>
      <span className="inline-block hover:animate-bounce">+</span>
    </h1>
    <p className="text-white">Years Experience</p>
  </div>
  <div className="border border-white hover:bg-green-500 rounded-full w-48 h-48 flex flex-col items-center justify-center">
    <h1 className="text-3xl text-white">
      <span className="inline-block hover:animate-bounce">1</span>
      <span className="inline-block hover:animate-bounce">4</span>
      <span className="inline-block hover:animate-bounce">+</span>
    </h1>
    <p className="text-white">Years Experience</p>
  </div>
  <div className="border border-white hover:bg-green-500 rounded-full w-48 h-48 flex flex-col items-center justify-center">
    <h1 className="text-3xl text-white">
      <span className="inline-block hover:animate-bounce">1</span>
      <span className="inline-block hover:animate-bounce">4</span>
      <span className="inline-block hover:animate-bounce">+</span>
    </h1>
    <p className="text-white">Years Experience</p>
  </div>
  <div className="border border-white hover:bg-green-500 rounded-full w-48 h-48 flex flex-col items-center justify-center">
    <h1 className="text-3xl text-white">
      <span className="inline-block hover:animate-bounce">1</span>
      <span className="inline-block hover:animate-bounce">4</span>
      <span className="inline-block hover:animate-bounce">+</span>
    </h1>
    <p className="text-white">Years Experience</p>
  </div>
</div>


            
        </div>
    );
};

export default Expertice;