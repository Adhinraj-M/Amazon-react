import DashboardListContainer from "./DashboardListContainer"
import DashboardSingleImg from "./DashboardSingleImg"

function DashboardCategory() {

  return (
    <div className="h-[190px] w-full overflow-x-scroll ">
        <ul className="m-[5px_0px_5px_8px] block h-[180px] w-max p-0 ">
            <li className="m-[0_8px_0_0] inline-block list-disc relative h-full rounded-[4px] shadow-[0_2px_5px_rgba(15,17,17,.15)] overflow-hidden bg-white min-w-[125px] max-w-[225px]">
                <DashboardListContainer  />
            </li>
            <li className="m-[0_8px_0_0] inline-block list-disc relative h-full rounded-[4px] shadow-[0_2px_5px_rgba(15,17,17,.15)] overflow-hidden bg-white min-w-[125px] max-w-[225px]">
                <DashboardListContainer/>
            </li>
              <li className="m-[0_8px_0_0] inline-block list-disc relative h-full rounded-[4px] shadow-[0_2px_5px_rgba(15,17,17,.15)] overflow-hidden bg-white min-w-[125px] max-w-[225px]">
                <DashboardSingleImg/>
            </li>

        </ul>
    </div>
  )
}

export default DashboardCategory

