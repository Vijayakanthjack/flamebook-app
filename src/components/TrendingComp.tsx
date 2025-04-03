interface Props {
maintitle: string;
categorytitle: string;
subtitle: string;
price: string;
image: string;
rating: string;
onButtonClick: () => void;
}
function TrendingComp({maintitle,categorytitle,subtitle,price,image,rating, onButtonClick}:Props) {
  return (
   
       <div className="flex flex-col space-y-8">
            <div className="flex-1 rounded-lg overflow-hidden h-72 relative">
                <img src={image} alt="Book" className="w-full h-full object-cover" />
                <div className="absolute top-0 inset-0  p-4 ">
                    <div className="w-min bg-white/30 rounded-full flex items-center justify-center">
                        <div className="w-10 h-10 bg-[#FF7A00] text-white rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/>
</svg>

                        </div>
                        <div className="px-4 text-white text-base">{rating}</div>
                    </div>
                </div>
            </div>
                <div className="flex-none flex flex-col space-y-2.5 justify-center items-center">
                    <h6 className="text-base font-medium text-purple-500">{categorytitle}</h6>
                     <h3 className="text-lg font-bold">{maintitle}</h3>
                     <p className="text-gray-500 text-base">{subtitle}</p>
                     <button onClick={onButtonClick}  type="button" className="cursor-pointer text-purple-500 hover:text-white bg-white border border-gray-300 focus:outline-none hover:bg-purple-500 focus:ring-4 focus:ring-purple-100 font-medium rounded-lg text-sm px-4 py-2.5">$ {price}</button>
                </div>
            </div>
   
  );
}
export default TrendingComp;