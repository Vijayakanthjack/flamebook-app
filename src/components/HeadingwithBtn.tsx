interface Props {
    title: string;
    btnText: string | boolean;
  }
  
  function HeadingwithBtn({ title, btnText }: Props) {
    return (
      
      <div className={`flex items-center justify-between`}>
        <h2 className={`text-3xl text-black font-bold`}>{title}</h2>
        <button type="button" className="text-purple-500  leading-0 flex justify-center items-center hover:text-white bg-purple-500/0 hover:bg-purple-500 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-base px-5 py-2.5 ">{btnText}
        <svg className="w-6 h-6 ml-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
</svg>

        </button>
      </div>
      
     
    );
  }
  
  export default HeadingwithBtn;
  