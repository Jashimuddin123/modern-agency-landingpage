const Banner = () => {
    return (
        <div
            className="relative w-full h-[500px] bg-cover bg-center"
            style={{
                backgroundImage: "url('https://i.ibb.co.com/6gmyfCF/photo-2.jpg')", // Replace with your background image URL
            }}
        >
          

            {/* Center Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <div className="relative">
    <img
        src="https://i.ibb.co/b7sTyyJ/maxresdefault.jpg"
        alt="Center"
        className="w-[700px] h-[300px] rounded shadow-lg"
    />
    <div className="absolute inset-0 flex flex-col justify-center text-white">
        <div className="flex flex-col px-8">
            <h1 className="text-7xl font-bold text-left mr-96  w-[700px] ">
                Be a part 
                of
            </h1>
           
<br /> <br />
            <h1 className="text-7xl font-bold text-end ml-56 w-[500px]">
            our
struggle!
            </h1>
        </div>
        <p className="mt-4 px-8 text-center text-lg">
            Starting from what we can do and Think. The Formula and Creative Branding Platform Powering the World’s Best User Experience. Find Yourself in the Story & News.
        </p>
    </div>
</div>

</div>

        </div>
    );
};

export default Banner;
