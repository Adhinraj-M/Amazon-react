import { ToggleBtnProvider } from "../../Context/toggleContext";
import LargeProductLists from "./LargeProductLists";
import SmallProductLists from "./SmallProductLists";

function AllProductList() {
  return (
    <div>
      <ToggleBtnProvider>
        <SmallProductLists />
        <LargeProductLists /> 
      </ToggleBtnProvider>
    </div>
  );
}

export default AllProductList;



