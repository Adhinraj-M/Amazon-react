import {Categories} from "../Types/categories"

function CategorySmall() {
  return (
    <div className="my-0.5 bg-white overflow-x-scroll overflow-y-hidden whitespace-nowrap p-[10px_0px] relative leading-px h-[93px]">
        <div className="mx-[5px] w-full  mb-2.5 h-[55px] text-center scroll">
            {
                Categories && Categories.map((item)=>{
                    return (
                        <div className=" w-[18%]  mb-2.5 h-[55px] text-center inline-block" key={item.id}>
                            <img className="h-[50px] w-[50px] block m-[0_auto_6px] align-top" src={item.img} alt={item.name} />
                             <p className="mb-0 text-xs leading-[15px] text-black overflow-hidden text-ellipsis whitespace-nowrap">{item.name}</p>
                        </div>
                    )
                })
            }
        </div>
        </div>
  )
}

export default CategorySmall



