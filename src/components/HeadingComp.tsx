interface Props {
    title: string;
    subtext: string | boolean;
    alignBox: string;
  }
  
  function HeadingComp({ title, subtext, alignBox }: Props) {
    return (
      
      <div className={`container space-y-6 mx-auto ${alignBox}`}>
        <h2 className={`text-3xl text-black font-bold ${alignBox}`}>{title}</h2>
        <p className={`text-gray-600 max-w-xl mx-auto font-normal text-base ${alignBox}`  }>{subtext}</p>
      </div>
      
     
    );
  }
  
  export default HeadingComp;
  