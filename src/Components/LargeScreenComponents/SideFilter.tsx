
function SideFilter() {
  return (
    <div className="block w-[calc(.5 * (100vw - 28px))] min-w-[134.5px] max-w-[898px] fixed bottom-0 top-0 left-0 overflow-auto p-[10px_14px] bg-gray-300 z-[999] float-left">
        <div className="mb-3 h-[calc(100% - 16px)] pr-3">
            <div className="flex justify-between  items-center mb-2">
              <h1 className="flex gap-1 text-lg leading-5.5 font-bold">Filters</h1>
              <button className="text-[#0f1111] w-9 h-7.5 flex items-center justify-center">
                <i className=" h-3 w-3 bg-[position:-489px_-498px] bg-[length:512px_512px] bg-no-repeat inline-block align-top "style={{backgroundImage:`url(https://m.media-amazon.com/images/S/sash/5iL84kcaRCLp$es.png)`}}></i>
              </button>
            </div>

            <div className="">
              <h1 className="mb-2 leading-4 font-bold text-[#0f1111] text-sm">
                Category
              </h1>
            </div>
        </div>
    </div>
  )
}

export default SideFilter



