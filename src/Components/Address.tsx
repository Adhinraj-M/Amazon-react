import smallIconImage from '../../public/icon-image/smallSizeIcon.png'


function Address() {

    const smallIcon  = smallIconImage

  return (
    <div className="bg-[#37475A] h-11 w-full p-[12px_10px_12px_10px] flex ">
        <span className="float-left bg-[position:-75px_-340px] w-5 h-5 mr-[5px] bg-[length:275px] bg-no-repeat" style={{backgroundImage:`url(${smallIcon})`}}></span>
        <span className='inline-block text-white text-[13px] leading-5 text-ellipsis overflow-hidden clear-both w-[85%] whitespace-nowrap '> Delivering to Kalpatta 673122 - Update location ⌵ </span>
    </div>
  )
}

export default Address

