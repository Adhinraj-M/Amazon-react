import type { singleListType } from "../Types/categories";

type DashboardSingleImgProps = {
  singleList: singleListType;
};

function DashboardSingleImg({ singleList }: DashboardSingleImgProps) {
  return (
    <div className="p-0 h-[180px] mt-0 relative w-[135px] mb-0.5 bg-white overflow-auto">
      <img src={singleList.img} alt="mobile-img" />
    </div>
  );
}

export default DashboardSingleImg;
