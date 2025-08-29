import { amazonServiceOne, amazonServiceTwo } from "../../Types/DeskCategories"

function AmazonService() {

  return (
     <div className="bg-[#131A22] p-[30px_0] m-[30px_0_0] ">
          <div className="max-w-250 m-[0_auto] ">
            <ul className="flex flex-nowrap justify-start mb-[15px] ml-0 list-none gap-10">
            { 
            amazonServiceOne && amazonServiceOne.map((item,index)=>{
                return(
             <li className="w-[15%] text-xs p-[0_9px] align-top text-left leading-[115%] text-[#DDD]" key={index}>
                <h5 className="text-xs leading-3.5 ">{item.heading}</h5>
                <span className="text-[#999] inline-block leading-[110%]">{item.firstPart} <br/>{item.secondPart}</span>
              </li>)
            })
              }
             
            </ul>
            <ul className="flex flex-nowrap justify-start  ml-0 list-none gap-10">
            { 
            amazonServiceTwo && amazonServiceTwo.map((item,index)=>{
                return(
             <li className="w-[15%] text-xs p-[0_9px] align-top text-left leading-[115%] text-[#DDD]" key={index}>
                <h5 className="text-xs leading-3.5 ">{item.heading}</h5>
                <span className="text-[#999] inline-block leading-[110%]">{item.firstPart} <br/>{item.secondPart}</span>
              </li>

                )
            })
              }
             
            </ul>
          </div>
        </div>
  )
}

export default AmazonService