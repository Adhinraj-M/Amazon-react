
function Language() {
    const lang:string[]=["हिन्दी - HI","தமிழ் - TA","తెలుగు - TE","ಕನ್ನಡ - KN","മലയാളം - ML","বাংলা - BN","मराठी - MR"]
  return (
    <div className="absolute z-[399] top-12 left-[-17px] m-[-3px_0_0_2px] pb-[7px] w-60 rounded-[3px] bg-white overflow-visible border border-[#bbb] p-3.5 shadow-[0_2px_4px_0_rgba(0,0,0,.13)]">
        <span className="top-[-15px] left-[65.4531px] border-8 absolute z-[1] border-b-white border-transparent"></span>
        
    <span className="cursor-pointer p-[0_0_0_7px] text-[13px] text-[rgb(68,68,68)] flex hover:underline hover:text-[#c7511f]">
     <i className="bg-[position:-98px_-2px] m-[0_6.5px_0_0] top-[3px] inline-block w-4.5 h-4.5 " style={{backgroundImage:`url(https://m.media-amazon.com/images/S/sash/MAbi1rCjQI9H2y0.png)`}}></i>
     English - EN
     </span>
    
    <div className="mt-1.5 ml-6 mb-[9px] relative block leading-px h-px overflow-hidden bg-[#EEE] "></div>

    <ul className="list-none">
        {
            lang.map((item,i)=>{
                return (
                  <li key={i} className="cursor-pointer pb-[7px] text-[13px] text-[rgb(68,68,68)] flex hover:underline hover:text-[#c7511f]">
                    <i
                      className="bg-[position:-75px_-2px] m-[0_6.5px_0_0] top-[3px] inline-block w-4.5 h-4.5  "
                      style={{
                        backgroundImage: `url(https://m.media-amazon.com/images/S/sash/MAbi1rCjQI9H2y0.png)`,
                      }}
                    ></i>
                    {item}
                  </li>
                );
            })
        }
    </ul>
    <a href="#" className="pb-[7px] cursor-pointer ml-[25px] mt-2.5 text-[13px] text-[#0066C0]">Learn more</a>

    <div className="mt-1.5 ml-6 mb-[9px] relative block leading-px h-px overflow-hidden bg-[#EEE] "></div>

        <p className="text-[13px] text-[#444] leading-4 mb-[7px]">
        <i className="bg-[position:0_-256px] mr-[6.5px] relative w-[17px] h-[13px] inline-block " style={{backgroundImage:`url(	https://m.media-amazon.com/images/S/sash/MAbi1rCjQI9H2y0.png)`}}></i>
        You are shopping on Amazon.in
        </p>
        
    <a href="#" className="pb-[7px] cursor-pointer ml-[25px] mt-2.5 text-[13px] text-[#0066C0]">Change country/region</a>

    </div>
  )
}

export default Language

