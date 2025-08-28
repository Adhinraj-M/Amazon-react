export type ProductCubicType={
    img:string,
    id:string
}

export const ProductEmergingBusiness:ProductCubicType[]=[
    {
        id:'pe_1',
        img:'https://m.media-amazon.com/images/I/51uB35vUM6L._AC_SS260_.jpg'
    },
    {
        id:'pe_2',
        img:'https://m.media-amazon.com/images/I/71gws3S21fL._AC_SS260_.jpg'
    },
    {
        id:'pe_3',
        img:'https://m.media-amazon.com/images/I/912tcfPajcL._AC_SS260_.jpg'
    },
    {
        id:'pe_4',
        img:'https://m.media-amazon.com/images/I/61o44bX8giL._AC_SS260_.jpg'
    },
    {
        id:'pe_5',
        img:'https://m.media-amazon.com/images/I/811+WdwdtjL._AC_SS260_.jpg'
    },
    {
        id:'pe_6',
        img:'https://m.media-amazon.com/images/I/81QUZjovaxL._AC_SS260_.jpg'
    },
    {
        id:'pe_7',
        img:'https://m.media-amazon.com/images/I/7103Wl91cqL._AC_SS260_.jpg'
    },
    {
        id:'pe_8',
        img:'https://m.media-amazon.com/images/I/515Dz3Ko3jL._AC_SS260_.jpg'
    },
    {
        id:'pe_9',
        img:'https://m.media-amazon.com/images/I/51+WF4Y6UVL._AC_SS260_.jpg'
    },
]

export const productLocalStore:ProductCubicType[]=[
    {
        id:'lp_1',
        img:'https://m.media-amazon.com/images/I/51TET7Iyl-L._AC_SS260_.jpg'
    },
    {
        id:'lp_2',
        img:'https://m.media-amazon.com/images/I/51TET7Iyl-L._AC_SS260_.jpg'
    },
    {
        id:'lp_3',
        img:'https://m.media-amazon.com/images/I/5110OoFdmoL._AC_SS260_.jpg'
    },
    {
        id:'lp_4',
        img:'https://m.media-amazon.com/images/I/510CrSiVg7L._AC_SS260_.jpg'
    },
    {
        id:'lp_5',
        img:'https://m.media-amazon.com/images/I/71fvH2BN9-L._AC_SS260_.jpg'
    },
    {
        id:'lp_6',
        img:'https://m.media-amazon.com/images/I/51rQqbq8l9L._AC_SS260_.jpg'
    },
    {
        id:'lp_7',
        img:'https://m.media-amazon.com/images/I/41ZU+QnB6dL._AC_SS260_.jpg'
    },
    {
        id:'lp_8',
        img:'https://m.media-amazon.com/images/I/61klDiGWnDL._AC_SS260_.jpg'
    },
    {
        id:'lp_9',
        img:'https://m.media-amazon.com/images/I/51La6GmKKcL._AC_SS260_.jpg'
    },
]

export type CuratedProductType ={
    id:string,
    img:string,
    title:string,
    url_endpoint:string
}

export const CuratedProduct:CuratedProductType[]=[
    {
        id:'cp_1',
        img:'https://m.media-amazon.com/images/I/413rC-v6TtL._SR540,200_.jpg',
        title:`Women's Kurtis | Starting ₹199`,
        url_endpoint:'WomenDress'
    },
    {
        id:'cp_2',
        img:'https://m.media-amazon.com/images/I/61gw9cl+JHL._SR540,200_.jpg',
        title:`Women's westernwear | Starting ₹99`,
        url_endpoint:'WomenDress'
    },
    {
        id:'cp_3',
        img:'https://m.media-amazon.com/images/I/6104bMA1NqL._SR540,200_.jpg',
        title:`Men's t-shirts | Starting ₹99`,
        url_endpoint:'menDress'
    },
    {
        id:'cp_4',
        img:'https://m.media-amazon.com/images/I/41w1uizy5-L._SR540,200_.jpg',
        title:`Home décor | Starting ₹79`,
        url_endpoint:'homeDecor'
    },
    {
        id:'cp_5',
        img:'https://m.media-amazon.com/images/I/41YBFpAZykL._SR540,200_.jpg',
        title:`Kitchen essentials | Under ₹299`,
        url_endpoint:'kitchen'
    },
    {
        id:'cp_6',
        img:'https://m.media-amazon.com/images/I/31vCBYV+1uL._SR540,200_.jpg',
        title:`Mobile accessories | Starting ₹99`,
        url_endpoint:'mobileAccessories'
    },
    {
        id:'cp_7',
        img:'https://m.media-amazon.com/images/I/31VTHFIvC-L._SR540,200_.jpg',
        title:`Headphones | Starting ₹199`,
        url_endpoint:'headPhones'
    },
    {
        id:'cp_8',
        img:'https://m.media-amazon.com/images/I/41Tuqb5TxdL._SR540,200_.jpg',
        title:`Kids' wear | Starting ₹79`,
        url_endpoint:'kidsWear'
    },
]


export const heroCarouselImg: string[] = [
  "https://m.media-amazon.com/images/I/71sqZ+9KGzL._SR1236,1080_.jpg",
  "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/ab80958b-64cb-46b5-8f33-e654b88d4ad6.jpg",
  "https://m.media-amazon.com/images/I/611lCr8X1vL._SR1236,1080_.jpg",
  "https://m.media-amazon.com/images/I/61zDNpQPdUL._SR1236,1080_.jpg",
  "https://m.media-amazon.com/images/I/71QzfbiakxL._SR1236,1080_.png",
  "https://m.media-amazon.com/images/I/61uX94pLhTL._SR1236,1080_.jpg",
  "https://m.media-amazon.com/images/I/71Koz99yS+L._SR1236,1080_.png",
  "https://m.media-amazon.com/images/I/61B1eCsNnXL._SR1236,1080_.jpg",
  "https://m.media-amazon.com/images/I/61KIqe+KP5L._SR1236,1080_.jpg",
  "https://m.media-amazon.com/images/I/61uX94pLhTL._SR1236,1080_.jpg",

];

export type Products={
    id:string,  
    product_category:string,
    product_title: string,
    product_detailed_title: string,
    product_offer: string,
    product_price:string,
    product_actual_price: string,
    no_of_buyers: string,
    proudct_rating: string,
    total_reviews:string,
    product_img: Array<string>
}

export type CategoryProdut={
  id: string;
  product_category: string;
  product_title: string;
  product_detailed_title: string;
  product_offer: string;
  product_price: string;
  product_actual_price: string;
  no_of_buyers: string ; 
  product_rating: string; 
  total_reviews: string; 
  material: string;
  sizes: string[];
  sleeve_type: string;
  colours: string;
  product_img: string[];

}

export type CategoryFilter={
    filter_Type:string,
    filter_sub_head:string,
    filter_buttons:string[]
}



export const priceRangeMap: {[key:string]:{min:number,max:number}} = {
  "All Prices": { min: 115, max: 3999 },
  "Up to ₹500": { min: 115, max: 500 },
  "₹500-₹1000": { min: 500, max: 1000 },
  "Over ₹1000": { min: 1000, max: 3999 },
};
