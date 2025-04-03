interface Props{
    numbercount: number | string;
    subtext: string | boolean;
    icon: string;
}
function CounterNumCom({numbercount,subtext,icon}:Props) {
  return (
    <div className="flex flex-col space-y-4 items-center">
        <div className="flex-none flex items-center gap-8">
        <img src={icon} alt="Book" className="w-12 h-12 object-contain" />
        <h3 className="text-5xl text-white font-bold">{numbercount}</h3>
        </div>
        <div className="flex-none space-y-4">
        
        <p className="text-base font-normal text-white/40">{subtext}</p>
        </div>
    </div>
  );
}
export default CounterNumCom;