import SliderImage from "../assets/images/slider-image.png";

function HeroImage() {
  return (
   
<figure className="relative max-w-full">
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-[#430D54]/70"></div>

  {/* Image */}
  <img className="h-auto max-w-full object-cover" src={SliderImage} alt="Slider" />

  {/* Text Content */}
  <div className="max-w-screen-xl 2xl:max-w-screen-2xl mx-auto absolute inset-0 flex flex-col items-start justify-center text-left">
    <figcaption className="space-y-6 max-w-xl w-full">
    <div className="w-fit bg-white/30 rounded-full flex items-center justify-center">
                        <div className="w-fit h-12 px-6 bg-[#D9176C] text-white rounded-full flex items-center justify-center">Hot Promo</div>
                        <div className="px-8 text-white text-base">Discount 60% Special World Book Day</div>
                    </div> 
      <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-medium leading-18">
      Find over 20 million <br />book in Clevr.
      </h1>
      <p className="text-white text-base font-normal leading-loose mt-2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
      </p>
      <button type="button" className="text-white flex items-center justify-between bg-[#8D28AD] hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5">Go to Collections
      <svg className="w-6 h-6 ml-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
</svg>

      </button>
    </figcaption>
  </div>
</figure>


  );
}
export default HeroImage;