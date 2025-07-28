type sortButtonProps={
  priceRange:string
}

function SortButtons({priceRange}:sortButtonProps) {
  return (
    <div className="mr-2 bg-white border border-[#e8e8e8] rounded-[7px] p-[4px_8px] text-center whitespace-nowrap w-auto">
      <button className="flex gap-1 -ml-[3px] -mr-[3px] !text-[15px] !leading-[1.35] text-[#111]">
        {priceRange}
      </button>
    </div>
  );
}

export default SortButtons;
