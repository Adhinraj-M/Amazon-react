import type { DashboardListType } from "../../Types/categories";

type dataProps = {
  data: DashboardListType[];
};

function DashboardListContainer({ data }: dataProps) {
  return (
    <div className="flex max-w-[168px] flex-wrap h-[180px] p-[4px_0]">
      {data &&
        data.map((item) => {
          return (
            <div className=" m-[0_4px] " key={item.id}>
              <img
                className="block h-16 m-[0_12px] p-[10px_0_2px] "
                src={item.img}
                alt="amazon-pay"
              />
              <p className="text-[#111] text-[10px] leading-[13px] !mb-1.5 !max-h-[15px] overflow-hidden text-center text-ellipsis whitespace-nowrap">
                {item.name}
              </p>
            </div>
          );
        })}
    </div>
  );
}

export default DashboardListContainer;
