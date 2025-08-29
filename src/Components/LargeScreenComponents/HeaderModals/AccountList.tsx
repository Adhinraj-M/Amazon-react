
function AccountList() {

    const List:string[]=["Create a Wish List","Wish from Any Website","Baby Wishlist","Discover Your style","Explore Showroom"]
    const Account:string[]=["Your Account","Your Orders","Your Wish List","Keep shopping for","Your Recommendations","Your Prime Membership","Your Prime Video","Your Subscibe & Save Items","Memberships & Subscriptions","Your Seller Account","Manage Your Content and Devices","Register for a free Business Account"]
  return (
    <div>
        
        <div className="absolute z-[399] top-13.5 -right-23 w-125 m-[-3px_0_0_-2px] p-[14px_14px_7px_14px] border border-[#ddd] bg-white rounded-sm">
            <span className="top-[-15px] right-24 border-8 absolute z-[1] border-b-white border-transparent"></span>

            <div className="p-[0_120px_0_120px] border-b mb-4 border-b-[#eee] ">
                <div className="mb-2 text-[11px] ">
                    <button className="h-[33px] w-[218px] rounded-lg  shadow-[0_2px_5px_0_rgba(213,217,217,.5)] bg-[#FFD814] border border-[#FCD200] cursor-pointer inline-block leading-7.5 text-[13px]">Sign in</button>
                    <p className="my-[7px_9px] text-center text-[#333] m-[7px_0_9px_0] ">New customer? <span className="text-[11px] underline text-[#05a] inline cursor-pointer">Start here.</span> </p>
                </div>
            </div>
             <div className="float-left mr-5 ml-2.5 w-[210px]">
                <h2 className="text-[16px] font-fontBold pb-2.5">Your Lists</h2>
                <ul className="list-none">
                   {List.map((item,i)=>{
                    return(
                        <li key={i} className="hover:underline hover:text-[#c7511f] cursor-pointer leading-4 pb-[7px] text-[13px] text-[#444] whitespace-normal">{item}</li>
                    )
                   }) }
                </ul>
            </div>
            <div className=" w-[210px] float-left border-l border-l-[#eee] pl-5 mr-2.5">
                <h2 className="text-[16px] font-fontBold pb-2.5"> Your Account</h2>
                <ul className="list-none">
                {
                    Account.map((list,i)=>{
                        return(
                            <li key={i} className="pb-[7px] text-[13px] cursor-pointer leading-4 text-[#444] hover:underline hover:text-[#c7511f]">{list}</li>
                        )
                    })
                }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default AccountList

