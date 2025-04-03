
interface Props {
    maintitle: string;
    subtext: string;
    avatarname: string;
    days: string;
    avatarimg: string; 
    newsimage: string;
}

function LatestNewsComp({ maintitle, subtext, avatarname, days, avatarimg, newsimage }: Props) {
  // Function to generate star icons
  

  return (
    <div className="group flex flex-col space-y-8">
     
      <div className="flex-none">
        <div className="h-52 overflow-hidden rounded-xl">
        <img src={newsimage} alt="Book" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="flex-none flex flex-col justify-center items-start">
        
        <div className="space-y-4 flex flex-col">
            <div className="flex-none space-y-6">
        <h3 className="text-lg text-black font-bold">{maintitle}</h3>
        <p className="text-gray-500 text-base leading-normal">{subtext}</p>
        </div>
        <div className="mt-6 flex-none flex items-center space-x-4">
            <div className="flex-none">
        <img src={avatarimg} alt="Book" className="rounded-2xl overflow-hidden w-10 h-10 object-cover" />
        </div>
        <div className="flex-1">
        <p className="font-bold text-base text-black">{avatarname}</p>
        <p  className="font-normal text-xs text-gray-600">{days}</p>
        </div>
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default LatestNewsComp;
