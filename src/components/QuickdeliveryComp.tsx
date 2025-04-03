interface Props{
    title: string;
    subtext: string | boolean;
    image: string;
}
function QuickdeliveryComp({title,subtext,image}:Props) {
  return (
    <div className="flex flex-col space-y-4">
        <div className="flex-none">
        <img src={image} alt="Book" className="w-12 h-12 object-contain" />
        </div>
        <div className="flex-none space-y-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-base font-normal text-gray-600">{subtext}</p>
        </div>
    </div>
  );
}
export default QuickdeliveryComp;