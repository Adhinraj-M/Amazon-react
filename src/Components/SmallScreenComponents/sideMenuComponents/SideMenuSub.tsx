type SideMenuSubProps = {
  menuList: string[];
  menuTitle: string;
};

function SideMenuSub({ menuList, menuTitle }: SideMenuSubProps) {
  return (
    <>
      <section className="block h-auto">
        <h2 className="leading-6 inline-block text-[#111] p-[15px_20px_15px_20px] text-[19px] font-fontBold">
          {menuTitle}
        </h2>
        {menuList &&
          menuList.map((item, index) => {
            return (
              <ul
                className="ml-0 p-0 m-[0_0_0_18px] text-[#0f1111] list-none"
                key={index}
              >
                <li className="pb-0.5 m-0 list-none leading-[20.25px]">
                  <span className="flex items-center p-[15px_20px_15px_20px] text-[16px] leading-[21.6px]">
                    {item}
                  </span>
                </li>
              </ul>
            );
          })}
      </section>
    </>
  );
}

export default SideMenuSub;
