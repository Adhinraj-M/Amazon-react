
function PrimeModal() {
  return (
    <div className="absolute top-[39px] z-[399] -left-3.5 bg-white -mt-0.5 w-[340px] p-[14px_14px_7px] -ml-0.5 border border-[#bbb] rounded-[3px]">
        <span className="top-[-15px] left-[65.4531px] border-8 absolute z-[1] border-b-white border-transparent"></span>
        <div className="grid">
            <h1 className="text-[28px] font-fontBold leading-9 pb-1">Shopping plans starting at ₹399/year</h1>
            <p className="text-[13px] mb-3.5">Get FREE same/1-day delivery, Prime offers & more</p>
            <div className="bg-[#0578FF] mb-[22px]">
              <img src="https://m.media-amazon.com/images/I/31yheAotKHL.png" alt="product image"/>
            </div>
            <button className="w-[308px] rounded-[100px] bg-[#ffd814] border border-[#ffd814] inline-block text-center align-middle cursor-pointer h-7.5 text-[#0f1111] text-[13px]">Join Prime Now</button>
            <div className="flex justify-end items-center p-[6px_10px] ">
              <img src="https://m.media-amazon.com/images/I/81MtJerJTqL.png" alt="amazon prime" className="h-5 w-[90px]"/>
            </div>
          </div>
    </div>
  )
}

export default PrimeModal
