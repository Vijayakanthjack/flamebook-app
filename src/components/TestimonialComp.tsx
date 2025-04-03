
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa"; // Import FontAwesome icons

interface Props {
    subtext: string;
    avatarname: string;
    days: string;
    avatarimg: string; 
    rating: number;
}

function TestimonialComp({  subtext, avatarname, days, avatarimg, rating }: Props) {
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
    <div className="group flex flex-col space-y-8 shadow-lg p-4 rounded-xl shadow-purple-100">
     
      <div className="flex-none flex flex-col justify-center items-start">
        
        <div className="space-y-4 flex flex-col">
            <div className="flex-none space-y-4">
            <div className="flex">{renderStars(rating)}</div>
        <p className="text-gray-500 text-base leading-normal">{subtext}</p>
        </div>

        <div className="mt-5 flex-none flex items-center space-x-4">
        <div className="flex-1">
        <p className="font-bold text-base text-black">{avatarname}</p>
        <p  className="font-normal text-xs text-gray-600">{days}</p>
        </div>
            <div className="flex-none">
        <img src={avatarimg} alt="Book" className="rounded-2xl overflow-hidden w-10 h-10 object-cover" />
        </div>
       
        </div>

        </div>
        
      </div>
    </div>
  );
}

export default TestimonialComp;
