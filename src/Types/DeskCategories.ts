export type HeroProductDesktopType = {
  url: string;
  product: {
    img: {
      src: string;
      alt: string;
    };
    name: string;
    viewsCount: string;
  }[];
};


export const HeroDeskProduct: HeroProductDesktopType[] =[
{ 
  
  url:"WomenDress",
  product:[
  {
    img:{
        src:"https://m.media-amazon.com/images/I/71R7flci04L._AC_SS304_.jpg",
        alt:"Miss Chase Women's Comfy Round Neck Striped Midi Dress",
    },
    name: "Miss Chase Women's Comfy Round Neck Striped Midi Dress",
     viewsCount:'1'
  },
  {
    img:{
        src:"https://m.media-amazon.com/images/I/51yWXtfLxjL._AC_SR175,263_FMwebp_QL65_.jpg",
        alt:"Biba Solid A-Line Kurti for Women",
    },
    name: "Biba Solid A-Line Kurti for Women",
    viewsCount:'1'
  },
  {
    img:{
        src:"https://m.media-amazon.com/images/I/41o4R+mh7iL._AC_SR175,263_FMwebp_QL65_.jpg",
        alt:"Jaipur Kurti Women’s Crocheted Yoke Kurta",
    },
    name: "Jaipur Kurti Women’s Crocheted Yoke Kurta",
    viewsCount:'1'
  },
  {
    img:{
        src:"https://m.media-amazon.com/images/I/51n2jT511uL._AC_SR175,263_FMwebp_QL65_.jpg",
        alt:"Aurelia Printed Straight Kurti",
    },
    name: "Aurelia Printed Straight Kurti",
    viewsCount:'2'
  }

]}]

export type diffrentCateType={
  img:{
    src:string,
    alt:string
  },
  title:string
}

export const mensDress:diffrentCateType[]=[
{
    img:{
      src:"https://m.media-amazon.com/images/I/612MkbVyluL._AC_SR175,263_FMwebp_QL65_.jpg",
      alt:"Roadster Half‑Sleeve Polo Tee"
    },
    title:"Roadster Half‑Sleeve Polo Tee"
  },
  {
    img:{
      src:"https://m.media-amazon.com/images/I/51slHK9woDL._AC_SR175,263_FMwebp_QL65_.jpg",
      alt:"Puma Performance Round‑Neck Tee"
    },
    title:"Puma Performance Round‑Neck Tee"
  },
  {
    img:{
      src:"https://m.media-amazon.com/images/I/61W3TkfRLrL._AC_SR175,263_FMwebp_QL65_.jpg",
      alt:"HRX Slim‑Fit Sports Tee"
    },
    title:"HRX Slim‑Fit Sports Tee"
  },
  {
    img:{
      src:"https://m.media-amazon.com/images/I/61HS4sTDnPL._AC_SR175,263_FMwebp_QL65_.jpg",
      alt:"Allen Solly Active T‑Shirt"
    },
    title:"Allen Solly Active T‑Shirt"
  }
]

export type CategoryProductImg = {
  img: {
    src:string,
    alt:string
  };
};


export const HomeKitchenProduct:CategoryProductImg[]=[
  {
    img:{
      src:"https://m.media-amazon.com/images/I/71a0mwTxooL._AC_SY200_.jpg",
      alt:"beauty products "
    },
  },
   {
    img:{
      src:"https://m.media-amazon.com/images/I/61aM36RGwgL._AC_SY200_.jpg",
      alt:"induction cooker "
    },
  },
  {
    img:{
      src:"https://m.media-amazon.com/images/I/61KKxQiKA+L._AC_SY200_.jpg",
      alt:"clock "
    },
  },
  {
    img:{
      src:"https://m.media-amazon.com/images/I/81GgEhnkx7L._AC_SY200_.jpg",
      alt:"Garbage bags"
    },
  },
  {
    img:{
      src:"https://m.media-amazon.com/images/I/718ou0YnWIL._AC_SY200_.jpg",
      alt:"Brick Wallpaper"
    },
  },
  {
    img:{
      src:"https://m.media-amazon.com/images/I/61ITlnte9uL._AC_SY200_.jpg",
      alt:"Bucket spin mop"
    },
  },
  {
    img:{
      src:"https://m.media-amazon.com/images/I/81BNQrU7lYL._AC_SY200_.jpg",
      alt:"Hanger"
    },
  },
  {
    img:{
      src:"https://m.media-amazon.com/images/I/714THosaxdL._AC_SY200_.jpg",
      alt:"Plastic storage container"
    },
  },
  {
    img:{
      src:"https://m.media-amazon.com/images/I/81SEVBzTWhL._AC_SY200_.jpg",
      alt:"Ankle Socks"
    },
  },
  {
    img:{
      src:"https://m.media-amazon.com/images/I/61wURjcgIEL._AC_SY200_.jpg",
      alt:"Sandwich Toster"
    },
  },
   {
    img:{
      src:"https://m.media-amazon.com/images/I/813RG-5ObbL._AC_SY200_.jpg",
      alt:"Universal Liquid Vaporiser"
    },
  },
  {
    img:{
      src:"https://m.media-amazon.com/images/I/71zSI8ZHvgL._AC_SY200_.jpg",
      alt:"Mosquito"
    },
  },
  {
    img:{
      src:"https://m.media-amazon.com/images/I/81g3zQi9KcL._AC_SY200_.jpg",
      alt:"Chopping Board"
    },
  },
  

]

export const MobileCategoryProduct: CategoryProductImg[] = [
  {
    img: {
      src: "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Wireless/Mounika/Desktop/AugART/D280189136_IN_WLD_AUGART_25_MSO_PC_Shoveler_200x200_1._CB804961893_.jpg",
      alt: "Iphone 15",
    },
  },
  {
    img: {
      src: "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Wireless/Mounika/Desktop/AugART/D280189136_IN_WLD_AUGART_25_MSO_PC_Shoveler_200x200_2._CB804961893_.jpg",
      alt: "IQOO 13",
    },
  },
  {
    img: {
      src: "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Wireless/Mounika/Desktop/AugART/D280189136_IN_WLD_AUGART_25_MSO_PC_Shoveler_200x200_3._CB804961893_.jpg",
      alt: "Samsung Galaxy S24 Ultra",
    },
  },
  {
    img: {
      src: "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Wireless/Mounika/Desktop/AugART/D280189136_IN_WLD_AUGART_25_MSO_PC_Shoveler_200x200_4._CB804961893_.jpg",
      alt: "OnePlus 13R",
    },
  },
  {
    img: {
      src: "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Wireless/Mounika/Desktop/AugART/D280189136_IN_WLD_AUGART_25_MSO_PC_Shoveler_200x200_5._CB804961893_.jpg",
      alt: "Xiomi",
    },
  },
  {
    img: {
      src: "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Wireless/Mounika/Desktop/AugART/D280189136_IN_WLD_AUGART_25_MSO_PC_Shoveler_200x200_6._CB804961893_.jpg",
      alt: "OnePlus",
    },
  }
];

export const BeautyCategoryProducts: CategoryProductImg[] =[
  {
    img: {
      src: "https://m.media-amazon.com/images/I/51PQhsaEcLL._AC_SY200_.jpg",
      alt: "Mascara",
    },
  },
  {
    img: {
      src: "https://m.media-amazon.com/images/I/41weWR13HDL._AC_SY200_.jpg",
      alt: "Sun-Screen",
    },
  },
  {
    img: {
      src: "https://m.media-amazon.com/images/I/418xNtmWDoL._AC_SY200_.jpg",
      alt: "Lakme body lotion",
    },
  },
  {
    img: {
      src: "https://m.media-amazon.com/images/I/418xNtmWDoL._AC_SY200_.jpg",
      alt: "Lakme Sun-Screen",
    },
  },
  {
    img: {
      src: "https://m.media-amazon.com/images/I/41sXjSVQrbL._AC_SY200_.jpg",
      alt: "Lipstick",
    },
  },
  {
    img: {
      src: "https://m.media-amazon.com/images/I/518i9EgA+xL._AC_SY200_.jpg",
      alt: "Kajal",
    },
  },
  {
    img: {
      src: "https://m.media-amazon.com/images/I/51Y2UGLW+bL._AC_SY200_.jpg",
      alt: "Mascara",
    },
  },
  {
    img: {
      src: "https://m.media-amazon.com/images/I/61RH5LWdzoL._AC_SY200_.jpg",
      alt: "Mascara waterproof",
    },
  },
  {
    img: {
      src: "https://m.media-amazon.com/images/I/51A7QCfQYJL._AC_SY200_.jpg",
      alt: "HyperCurl Mascara",
    },
  },
  {
    img: {
      src: "https://m.media-amazon.com/images/I/41ElP7oKPcL._AC_SY200_.jpg",
      alt: "Eyeliner",
    },
  },
  {
    img: {
      src: "https://m.media-amazon.com/images/I/61zh5b1GQjL._AC_SY200_.jpg",
      alt: "Foundation",
    },
  },
  {
    img: {
      src: "https://m.media-amazon.com/images/I/61JTG53HldL._AC_SY200_.jpg",
      alt: "Foundation spf",
    },
  },
  
]



export const deskNavfooterOne:string[]=["About Amazon","Careers","Press Releases","Amazon Science"]
export const deskNavfooterTwo:string[]=["Facebook","Twitter","Instagram"]
export const deskNavfooterThree:string[]=["Sell on Amazon","Sell under Amazon Accelerator","Protect and Build Your Brand","Amazon Global Selling","Supply to Amazon","Become an Affiliate","Fulfilment by Amazon","Advertise Your Products","Amazon Pay on Merchants"]
export const deskNavfooterFour:string[]=["Your Account","Returns Centre","Recalls and Product Safety Alerts","100% Purchase Protection","Amazon App Download","Help"]

type amazonServiceType={
  heading:string,
  firstPart:string,
  secondPart:string
}

export const amazonServiceOne:amazonServiceType[]=[
  {
    heading:'AbeBooks',
    firstPart:'Books, art',
    secondPart:'& collectibles'
  },
  {
    heading:'Amazon Web Services',
    firstPart:'Scalable Cloud ',
    secondPart:'Computing Services'
  },
  {
    heading:'Audible',
    firstPart:'Download ',
    secondPart:'Audio Books'
  },
  {
    heading:'IMDb',
    firstPart:'Movies, TV ',
    secondPart:'& Celebrities'
  }
]

export const amazonServiceTwo:amazonServiceType[]=[
  {
    heading:'Shopbop',
    firstPart:'Designer ',
    secondPart:'Fashion Brands'
  },
  {
    heading:'Amazon Business',
    firstPart:'Everything For ',
    secondPart:'Your Business'
  },
  {
    heading:'Prime Now',
    firstPart:'2-Hour Delivery ',
    secondPart:'on Everyday items'
  },
  {
    heading:'Amazon Prime Music',
    firstPart:'100 million songs, ad-free ',
    secondPart:'Over 15 million podcast episodes'
  }

]



export const deskCarousel:string[]=[
  "https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2025/GW/BAU/Unrec/PC/934044814._CB551384116_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/IMG25/Home/2025/BAU/GW/Aug/MHS/Mega_home_sale_BAU_PC_-_Laundry_essentials._CB803648198_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2025/GW/BAU/Unrec/PC/934044815._CB551384116_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img25/Media/PC_Hero_3000x1200_Asin-toys-2x._CB547414496_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/uber_new_high._CB537689643_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/2024/BAU_BTF/Nov/Unrec/Shoes/1/30001._CB542120021_.jpg"
]


   export type CarWashProduct={
      id:string,
      title:string,
      img:string[],
      no_of_rating:string,
      rating:string,
      original_price:string,
      offer_price:string,
      offer_percentage:string
    }


    export type RecentlyViewedType={
      img:{
        src:string,
        alt:string
      },
      no_of_views:string
    }


   export const RecentlyViewed:RecentlyViewedType[]=[
      {
        img:{
          src:"https://m.media-amazon.com/images/I/51eN72fGH9L._MCnd_AC_.jpg",
          alt:"books"
        },
        no_of_views:"2 viewed"
      },
      {
        img:{
          src:"https://m.media-amazon.com/images/I/41kJPrvjxyL._MCnd_AC_.jpg",
          alt:"t-shirts"
        },
        no_of_views:"8 viewed"
      },
      {
        img:{
          src:"https://m.media-amazon.com/images/I/41LSMx4-i1L._MCnd_AC_.jpg",
          alt:"home appliance"
        },
        no_of_views:"1 viewed"
      },
      {
        img:{
          src:"https://m.media-amazon.com/images/I/41lKfFsdKOL._MCnd_AC_.jpg",
          alt:"kurta"
        },
        no_of_views:"2 viewed"
      },
      {
        img:{
          src:"https://m.media-amazon.com/images/I/41HIlwR9RsL._MCnd_AC_.jpg",
          alt:"spray"
        },
        no_of_views:"1 viewed"
      },
      {
        img:{
          src:"https://m.media-amazon.com/images/I/51694ovH5qL._MCnd_AC_.jpg",
          alt:"Ujala"
        },
        no_of_views:"1 viewed"
      },
      {
        img:{
          src:"https://m.media-amazon.com/images/I/31-oSLJMpUL._MCnd_AC_.jpg",
          alt:"scissors"
        },
        no_of_views:"1 viewed"
      },
      {
        img:{
          src:"https://m.media-amazon.com/images/I/31eD5NuEVGL._MCnd_AC_.jpg",
          alt:"shoes"
        },
        no_of_views:"1 viewed"
      },
      {
        img:{
          src:"https://m.media-amazon.com/images/I/41ip130VUuL._MCnd_AC_.jpg",
          alt:"car washing"
        },
        no_of_views:"11 viewed"
      },
      {
        img:{
          src:"https://m.media-amazon.com/images/I/51z2VTsej1L._MCnd_AC_.jpg",
          alt:"ornaments"
        },
        no_of_views:"2 viewed"
      },{
        img:{
          src:"https://m.media-amazon.com/images/I/31khu1-yRbL._MCnd_AC_.jpg",
          alt:"case"
        },
        no_of_views:"1 viewed"
      },
      {
        img:{
          src:"https://m.media-amazon.com/images/I/31f6Bja6ydL._MCnd_AC_.jpg",
          alt:"iron box"
        },
        no_of_views:"1 viewed"
      }

   ]


   type  offerType={
    offername:string,
    description:string,
    noOffers:string
   }


   export const offers:offerType[]=[{
    offername:"Cashback",
    description:"Upto ₹11.00 cashback as Amazon Pay Balance when…",
    noOffers:"1 offer"
  },
  {
    offername:"Bank Offer",
    description:"Upto ₹1,000.00 discount on select Credit Cards, Debit…",
    noOffers:"15 offer"
  },
  {
    offername:"Partner Offers",
    description:"Get GST invoice and save up to 28% on business purchases. ",
    noOffers:"1 offer"
  },
]

type productOfferType={
  img:{
    src:string,
    alt:string
  },
  offerName:string
}

export const productOfferType:productOfferType[] = [
  {
    img:{
      src:"https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB562506657_.png",
      alt:"Cash/Pay on Delivery"
    },
    offerName:"Cash/Pay on Delivery"
  },
  {
    img:{
      src:"https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB562549966_.png",
      alt:" Free Delivery"
    },
    offerName:" Free Delivery"
  },
  {
    img:{
      src:"https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-top-brand._CB562506657_.png",
      alt:"Top Brand"
    },
    offerName:"Top Brand"
  }
]