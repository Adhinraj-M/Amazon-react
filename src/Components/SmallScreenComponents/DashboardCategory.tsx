import {
  AmazonPayDetails,
  BestDeals,
  BestDealsPrice,
  SingleImgList,
} from "../../Types/categories";
import DashboardListContainer from "./DashboardListContainer";
import DashboardSingleImg from "./DashboardSingleImg";

function DashboardCategory() {
  return (
    <div className="h-[190px] w-full overflow-x-scroll relative bottom-[9px] scroll-width-none ">
      <ul className="m-[5px_0px_5px_8px] block h-[180px] w-max p-0 overflow-y-hidden">
        <li className="m-[0_8px_0_0] inline-block list-disc relative h-[180px] rounded-[4px] shadow-[0_2px_5px_rgba(15,17,17,.15)] overflow-hidden bg-white min-w-[125px] max-w-[225px]">
          <DashboardListContainer data={AmazonPayDetails} />
        </li>
        <li className="m-[0_8px_0_0] inline-block list-disc relative h-[180px]  rounded-[4px] shadow-[0_2px_5px_rgba(15,17,17,.15)] overflow-hidden bg-white min-w-[125px] max-w-[225px]">
          <DashboardListContainer data={BestDeals} />
        </li>
        {SingleImgList &&
          SingleImgList.map((item, index) => {
            return (
              <li
                className="m-[0_8px_0_0] inline-block list-disc relative h-[180px]  rounded-[4px] shadow-[0_2px_5px_rgba(15,17,17,.15)] overflow-hidden bg-white min-w-[125px] max-w-[225px]"
                key={index}
              >
                <DashboardSingleImg singleList={item} />
              </li>
            );
          })}
        <li className="m-[0_8px_0_0] inline-block list-disc relative h-[180px]  rounded-[4px] shadow-[0_2px_5px_rgba(15,17,17,.15)] overflow-hidden bg-white min-w-[125px] max-w-[225px]">
          <DashboardListContainer data={BestDealsPrice} />
        </li>
      </ul>
    </div>
  );
}

export default DashboardCategory;
