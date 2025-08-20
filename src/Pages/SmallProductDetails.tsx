import { useContext } from "react";
import Header from "../Components/SmallScreenComponents/Header"
import { ToggleContext } from "../Context/toggleContext";
import Address from "../Components/SmallScreenComponents/Address";

function SmallProductDetails() {
      const { handleSideBar } = useContext(ToggleContext);
    
  return (
    <>
        <Header toggleBtn={handleSideBar} />
        <Address />
        <div className="flex w-full  relative !h-[50px]">
            <div className=" h-full opacity-[1] w-[25%]">
                <img className="w-full h-full object-scale-down object-center p-0.5 scale-[0.79] relative" src="https://m.media-amazon.com/images/I/51ggx4gO2DL._AC_PT0_BL0_SX160_SY100_FMwebp_QL80_.jpg" alt="Blue t shirt image" />
            </div>
            <div className="w-[75%] h-full opacity-[1] flex justify-center p-[0px_4px]  gap-0.5 flex-col">
                <div className="text-[rgb(15,17,17)] overflow-hidden text-start text-[11px] leading-[11px] ">TOPLOT Men T-Shirt || T-Shirt for Men (5235)</div>
                <div className="flex justify-start items-center flex-wrap gap-x-1 ">
                    <span className="text-xs leading-4">₹399.00</span>
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="37"
                        height="11"
                        aria-hidden="true"
                        viewBox="0 0 37 11"
                        fill="none"
                        role="img"
                        aria-label="Prime Badge"
                        data-testid="prime-badge">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.47241 2.6665H6.19741C6.13141 2.6665 5.94841 2.6415 5.89841 2.7515L3.04341 7.1025L1.75441 5.5545C1.71941 5.5045 1.66041 5.4745 1.59641 5.4745H0.189407C0.117407 5.4745 0.0514068 5.5135 0.0194068 5.5745C-0.0115932 5.6355 -0.00559317 5.7085 0.0384068 5.7625L3.00241 9.2575C3.03841 9.3025 3.09441 9.3285 3.15341 9.3285C3.15641 9.3285 3.15941 9.3285 3.16141 9.3275C3.22341 9.3255 3.28041 9.2935 3.31341 9.2445L7.56141 3.0085C7.73341 2.7845 7.54041 2.6665 7.47241 2.6665Z" fill="#FF6200"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8723 3.46875C10.5003 3.46875 10.1483 3.56275 9.82031 3.75275V6.51675C10.1353 6.70575 10.4853 6.80075 10.8723 6.80075C11.2733 6.80075 11.5683 6.66775 11.7583 6.40075C11.9483 6.13475 12.0433 5.71475 12.0433 5.13975C12.0433 4.55775 11.9493 4.13475 11.7643 3.86775C11.5773 3.60175 11.2803 3.46875 10.8723 3.46875ZM8.25391 2.7325C8.25391 2.6345 8.27491 2.5665 8.31791 2.5275C8.36091 2.4895 8.42991 2.4695 8.52191 2.4695H9.29591C9.45991 2.4695 9.56091 2.5475 9.59691 2.7005L9.67191 2.9745C9.88591 2.7715 10.1449 2.6105 10.4499 2.4905C10.7539 2.3715 11.0629 2.3125 11.3789 2.3125C12.0729 2.3125 12.6219 2.5605 13.0269 3.0585C13.4319 3.5555 13.6339 4.2285 13.6339 5.0765C13.6339 5.6575 13.5329 6.1655 13.3329 6.6005C13.1329 7.0345 12.8599 7.3695 12.5179 7.6035C12.1739 7.8395 11.7789 7.9565 11.3359 7.9565C11.0419 7.9565 10.7629 7.9105 10.4979 7.8195C10.2329 7.7285 10.0079 7.6025 9.82191 7.4415V9.7425C9.82191 9.8415 9.80191 9.9095 9.76291 9.9475C9.72391 9.9865 9.65291 10.0055 9.55291 10.0055H8.52191C8.42991 10.0055 8.36091 9.9865 8.31791 9.9475C8.27491 9.9095 8.25391 9.8415 8.25391 9.7425V2.7325Z" fill="#0578FF"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.1695 3.26997C16.4555 2.96097 16.7265 2.74297 16.9805 2.61297C17.2335 2.48297 17.5045 2.41797 17.7905 2.41797H17.9405C18.0415 2.41797 18.1125 2.43797 18.1555 2.47697C18.1985 2.51497 18.2205 2.58297 18.2205 2.68097V3.56397C18.2205 3.65497 18.2005 3.72197 18.1615 3.76397C18.1215 3.80597 18.0525 3.82697 17.9515 3.82697C17.9015 3.82697 17.8375 3.82297 17.7585 3.81597C17.6805 3.80997 17.5795 3.80597 17.4575 3.80597C17.2935 3.80597 17.0935 3.82897 16.8565 3.87397C16.6205 3.91997 16.4195 3.97797 16.2555 4.04797V7.57897C16.2555 7.66997 16.2355 7.73697 16.1955 7.77897C16.1565 7.82097 16.0865 7.84197 15.9865 7.84197H14.9555C14.8625 7.84197 14.7945 7.82097 14.7515 7.77897C14.7085 7.73697 14.6875 7.66997 14.6875 7.57897V2.73397C14.6875 2.63597 14.7085 2.56697 14.7515 2.52897C14.7945 2.48997 14.8625 2.47097 14.9555 2.47097H15.7295C15.8945 2.47097 15.9935 2.54797 16.0295 2.70197L16.1695 3.26997Z" fill="#0578FF"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.9766 2.7337C18.9766 2.6357 18.9976 2.5667 19.0396 2.5287C19.0836 2.4897 19.1516 2.4707 19.2446 2.4707H20.2756C20.3756 2.4707 20.4456 2.4897 20.4846 2.5287C20.5246 2.5667 20.5436 2.6357 20.5436 2.7337V7.5787C20.5436 7.6697 20.5246 7.7367 20.4846 7.7787C20.4456 7.8207 20.3756 7.8417 20.2756 7.8417H19.2446C19.1516 7.8417 19.0836 7.8207 19.0396 7.7787C18.9976 7.7367 18.9766 7.6697 18.9766 7.5787V2.7337ZM19.7604 1.64C19.4894 1.64 19.2704 1.566 19.1064 1.419C18.9414 1.272 18.8594 1.072 18.8594 0.82C18.8594 0.568 18.9414 0.368 19.1064 0.221C19.2704 0.074 19.4894 0 19.7604 0C20.0334 0 20.2504 0.074 20.4154 0.221C20.5814 0.368 20.6634 0.568 20.6634 0.82C20.6634 1.072 20.5814 1.272 20.4154 1.419C20.2504 1.566 20.0334 1.64 19.7604 1.64Z" fill="#0578FF"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M23.304 2.9845C23.683 2.7395 24.025 2.5665 24.329 2.4645C24.633 2.3625 24.947 2.3125 25.269 2.3125C25.913 2.3125 26.367 2.5365 26.632 2.9845C26.997 2.7465 27.341 2.5745 27.663 2.4695C27.986 2.3645 28.319 2.3125 28.662 2.3125C29.163 2.3125 29.552 2.4485 29.827 2.7215C30.103 2.9955 30.241 3.3775 30.241 3.8675V7.5775C30.241 7.6685 30.221 7.7355 30.182 7.7775C30.142 7.8195 30.073 7.8405 29.972 7.8405H28.942C28.848 7.8405 28.78 7.8195 28.738 7.7775C28.695 7.7355 28.673 7.6685 28.673 7.5775V4.2035C28.673 3.7275 28.454 3.4895 28.018 3.4895C27.631 3.4895 27.241 3.5805 26.847 3.7625V3.8675V7.5775C26.847 7.6685 26.827 7.7355 26.788 7.7775C26.748 7.8195 26.679 7.8405 26.578 7.8405H25.548C25.454 7.8405 25.387 7.8195 25.344 7.7775C25.301 7.7355 25.28 7.6685 25.28 7.5775V4.2035C25.28 3.7275 25.061 3.4895 24.624 3.4895C24.224 3.4895 23.829 3.5835 23.444 3.7735V7.5775C23.444 7.6685 23.423 7.7355 23.384 7.7775C23.345 7.8195 23.275 7.8405 23.175 7.8405H22.144C22.051 7.8405 21.983 7.8195 21.94 7.7775C21.897 7.7355 21.875 7.6685 21.875 7.5775V2.7325C21.875 2.6345 21.897 2.5665 21.94 2.5275C21.983 2.4885 22.051 2.4695 22.144 2.4695H22.917C23.081 2.4695 23.182 2.5475 23.218 2.7005L23.304 2.9845Z" fill="#0578FF"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M33.7818 3.375C33.0948 3.375 32.6968 3.789 32.5898 4.615C32.8758 4.671 33.1938 4.699 33.5458 4.699C33.9108 4.699 34.1758 4.645 34.3398 4.536C34.5048 4.428 34.5868 4.261 34.5868 4.037C34.5868 3.596 34.3188 3.375 33.7818 3.375ZM33.6326 5.6445C33.2236 5.6445 32.8696 5.6065 32.5686 5.5285C32.6116 5.9985 32.7576 6.3345 33.0036 6.5385C33.2506 6.7415 33.6246 6.8425 34.1266 6.8425C34.3266 6.8425 34.5216 6.8305 34.7116 6.8065C34.9006 6.7815 35.1636 6.7275 35.5006 6.6435C35.5216 6.6365 35.5436 6.6305 35.5646 6.6275C35.5866 6.6245 35.6036 6.6225 35.6186 6.6225C35.7396 6.6225 35.8016 6.7025 35.8016 6.8635V7.3475C35.8016 7.4595 35.7846 7.5385 35.7536 7.5835C35.7206 7.6295 35.6576 7.6695 35.5646 7.7045C35.0426 7.9005 34.4876 7.9995 33.9006 7.9995C33.0126 7.9995 32.3306 7.7605 31.8546 7.2845C31.3786 6.8075 31.1406 6.1245 31.1406 5.2345C31.1406 4.3235 31.3846 3.6095 31.8706 3.0905C32.3576 2.5725 33.0346 2.3125 33.9006 2.3125C34.5656 2.3125 35.0876 2.4705 35.4636 2.7855C35.8386 3.1015 36.0266 3.5215 36.0266 4.0475C36.0266 4.5725 35.8246 4.9705 35.4206 5.2405C35.0146 5.5095 34.4196 5.6445 33.6326 5.6445Z" fill="#0578FF"></path>
                        </svg>
                </div>
            </div>
        </div>
        <hr  className="border-0 border-b border-b-[#ccc] relative bottom-px"/>
        <div className="relative h-auto min-h-5 text-right p-[0px_5px]  ml-auto mr-auto flex justify-end items-start">
            <span className="text-[#555555] text-[11px] inline-flex items-center leading-[11px]">
                 Sponsored
                <b className="text-[#969696] w-3 h-3 bg-contain bg-no-repeat m-[1px_0_0_3px] " style={{backgroundImage:`url(https://m.media-amazon.com/images/G/01/ad-feedback/new_info_icon_3x.png)`}}></b>
            </span>
        </div>
        
        {/* product data UI  */}

        <div className="bg-white min-w-50 p-[0_14px] m-[0_auto] w-full">
            <div className="-mt-1 ">
                <div className="flex justify-between mt-1 items-center ">
                    <div className="w-[56.25%] mr-[5%] min-h-px text-ellipsis overflow-hidden whitespace-nowrap flex items-center" >
                        <span className="leading-[20.25px] text-[13px] text-[#2162a1]">Visit the GRECIILOOKS Store</span>
                    </div>
                    <div className="w-[38.75%] min-h-px overflow-visible flex justify-end">
                        <i className="bg-[length:512px_512px] bg-no-repeat h-4.5 w-20 relative align-top  inline-block bg-[position:-210px_-467px] top-px" style={{backgroundImage:`url(	https://m.media-amazon.com/images/S/sash/VRxFMfjvVeE5Eoy.png)`}}></i>
                        <span className="text-[#0f1111] text-[13px] leading-3.5 ml-1 mt-1">498</span>
                    </div>
                </div>
                <h1 className="mt-px mb-2 text-[#565959] leading-[1.4] text-[13px] ">
                     GRECIILOOKS Polo T-Shirt for Men – Cotton Short Sleeve Regular Fit Tee | Perfect for Golf, Travel & Outdoor Casual Look (Available in Plus Size and Combo Pack of 2)          
                </h1>
                <div className="m-[0_-4px] relative overflow-hidden !h-137.5 ">
                    <ol className="m-0 h-full p-0">
                        <li className="h-full flex justify-center">
                            <img className="h-[537.88px]" src="https://m.media-amazon.com/images/I/713AlBPiuXL._UY1100_FMwebp_.jpg" alt="black t shirt" />
                        </li>
                    </ol>
                </div>

                <div className="flex flex-col justify-center p-[6px_0] relative">
                    <div className="flex items-center min-h-6 relative justify-center">
                        <ul className="border-none flex z-[1] p-0 w-auto items-center absolute h-2.5 list-none m-0">
                            <li className="bg-[#000] border-none h-2 w-2 m-[0_4px] p-[0_5px_0_0] rounded-[20px] inline-block leading-4 relative"></li>
                            <li className="bg-[#cdcdcd] border-none h-2 w-2 m-[0_4px] p-[0_5px_0_0] rounded-3xl inline-block  leading-4 relative "></li>
                            <li className="bg-[#cdcdcd] border-none h-2 w-2 m-[0_4px] p-[0_5px_0_0] rounded-3xl inline-block  leading-4 relative "></li>
                            <li className="bg-[#cdcdcd] border-none h-2 w-2 m-[0_4px] p-[0_5px_0_0] rounded-3xl inline-block  leading-4 relative "></li>
                            <li className="bg-[#cdcdcd] border-none h-2 w-2 m-[0_4px] p-[0_5px_0_0] rounded-3xl inline-block  leading-4 relative "></li>
                        </ul>
                    </div>
                    <div className="flex absolute grow-1 justify-end h-6 w-full items-center">
                        <div className="mr-4 w-6">
                            <i className="bg-[position:-.67px,-.67px] bg-[length:42.67px_21.33px] w-[20.33px] h-[18.67px] flex items-center justify-center bg-no-repeat relative top-[3px] left-0.5" style={{backgroundImage:`url(https://m.media-amazon.com/images/S/sash/Y2W8muvg-FtKQay.png)`}}></i>
                        </div>
                        <span className="h-6 w-6 cursor-pointer inline-block bg-cover" style={{backgroundImage:`url(	https://m.media-amazon.com/images/G/01/share-icons/share-android.svg)`}}></span>
                    </div>
                </div>

                <div className="p-[16px_14px_16px] relative border-t-[5px] border-t-[#F3F3F3] border-b border-b-[#d5d9d9] m-[0_-14px_12px] pointe"></div>
            </div>
        </div>
    </>
  )
}

export default SmallProductDetails


// 