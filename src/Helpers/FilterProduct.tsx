import type { CategoryProdut } from "../Types/product";

function FilterProduct(cateProduct:CategoryProdut[],selectedFilters:{
    [key: string]: string[] | {min:number,max:number}[];}) {

  return cateProduct.filter((product:any)=>{
    
    for(const [key,values] of Object.entries(selectedFilters)){
        
        if((values.length === 0)) continue
        let categoryKey = key.toLocaleLowerCase()
        if(key === 'slider'){
            const [min,max] = values.map(Number)
             const price = Number(product.product_price.replace(/,/g, "").trim());

            if(price < min || price > max){
                
                return false
            }
        }
        else{
            if(key === 'Customer Rating'){
                categoryKey = 'product_rating'
                let  productValue = product[categoryKey]

                if(!(Number(productValue) > Number(values))){
                    return false
                }      
            }
           else{
            if(key === 'Sleeve Type'){
                categoryKey = 'sleeve_type'
            }

             const productValue = product[categoryKey]
            
            if(Array.isArray(productValue)){
                if(!productValue.some(val=> values.includes(val))) return false
            } 
            else{
                if(!values.includes(productValue)) return false
            }
           }
            
        }
    } 
    
    return true;
  })
}
            
export default FilterProduct


