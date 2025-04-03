import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa"; // Import FontAwesome icons

interface Props {
  maintitle: string;
  subtitle: string;
  price: string;
  image: string;
  rating: number; // Change to number for calculations
onButtonClick: () => void;

}

function ToprateedBooksComp({ maintitle, subtitle, price, image, rating,onButtonClick }: Props) {
  // Function to generate star icons
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-yellow-400" />); // Full star
      } else if (i - 0.5 <= rating) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />); // Half star
      } else {
        stars.push(<FaRegStar key={i} className="text-gray-400" />); // Empty star
      }
    }
    return stars;
  };

  return (
    <div className="group flex flex-col space-y-8 ">
      <div className="flex-1 rounded-3xl overflow-hidden relative">
        <img src={image} alt="Book" className="rounded-2xl overflow-hidden w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
      </div>
      <div className="flex-none flex flex-col justify-center items-start">
        {/* Star Rating */}
        <div className="space-y-4">
        <div className="flex">{renderStars(rating)}</div>

        
        <h3 className="text-lg font-bold">{maintitle}</h3>
        <p className="text-gray-500 text-base">{subtitle}</p>
        </div>
        <button
        onClick={onButtonClick}
          type="button"
          className="cursor-pointer text-black mt-8 transition-transform duration-300 max-w-32 w-full flex items-center relative group-hover:text-white bg-[#EEDFF3]  focus:outline-none group-hover:bg-purple-500 focus:ring-4 focus:ring-purple-100 font-medium rounded-lg text-sm px-4 py-2.5"
        >
            <div className="flex flex-col">
         <span className="font-bold text-lg">$ {price}</span> 
         <span className="font-normal text-xs line-through">$ {price}</span> 
         </div>
         <div className="flex-none text-white flex items-center justify-center absolute -right-6 w-12 h-12 bg-purple-500 group-hover:bg-[#EEDFF3] group-hover:text-purple-500 rounded-full shadow-lg shadow-gray-300 group-hover:shadow-none">
         <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/>
</svg>

         </div>
        </button>
      </div>
    </div>
  );
}

export default ToprateedBooksComp;
