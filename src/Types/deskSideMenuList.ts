export type deskSideMenuList={
    list:string,
    hasSubList:boolean
}

export const deskSideMenuListOne:deskSideMenuList[]=[
    {
        list:"Bestsellers",
        hasSubList:false
    },
    {
        list:"New Releases",
        hasSubList:false
    },
    {
        list:"Movers and Shakers",
        hasSubList:false
    },
]

export type deskSideSubMenuList = {
    list: string;
    hasSubList: boolean;
    subList:{
        heading:string,
        lists:string[]
   }[]
}

export const deskSideMenuListTwo:deskSideSubMenuList[]=[
    {
        list:"Echo & Alexa",
        hasSubList:true,
        subList:[
            {
                heading:"Echo & Alexa",
                lists:["See al devices with Alexa"]
            },
            {
                heading:"Content & Resources",
                lists:["Meet Alexa","Alexa Skills","Alexa App","Alexa Smart Home","Amazon Prime Music"]
            }
        ]
    },
    {
        list:"Fire TV",
        hasSubList:true,
        subList:[
            {
                heading:"Fire TV",
                lists:["Amazon Prime Video","Fire TV Apps & Games","See all Fire TV devices"]
            }
        ]
    },
    {
        list:"Kindle E-Readers & eBooks",
        hasSubList:true,
        subList:[
            {
                heading:"Kindle E-readers",
                lists:["All-new Kindle ","All-new Kindle Paperwhite","Kindle Paperwhite Starter Pack","All-New Kindle Oasis","Refurbished & Open Box","Kindle E-Reader Accessories","See all Kindle E-readers"]
            },
            {
                heading:"Kindle eBooks",
                lists:["All Kindle eBooks","Prime Reading","Kindle Unlimited","Deals on Kindle eBooks","kindle Exam central","Kindle eTextbooks","eBooks Bestsellers","eBooks in Indian Languages","Hindi","Tamil"]
            }
        ]
    },
    {
        list:"Audible Audiobooks",
        hasSubList:true,
        subList:[{
            heading:"Audible Audiobooks",
            lists:["Audible Membership","All Audiobooks","Best Sellers","New Releases","Hindi Audiobooks"]
        }]
    },
    {
        list:"Amazon Prime Video",
        hasSubList:true,
        subList:[{
            heading:"Amazon Prime Video",
            lists:["All Videos","Categories","My Stuff"]
        }]
    },
    {
        list:"Amazon Prime Music",
        hasSubList:true,
        subList:[{
            heading:"Amazon Prime Music",
            lists:["Amazon Prime Music","Open web player","Voice controlled with Alexa","Amazon Prime Music Apps","CDs and Vinyls"]
        }]
    },
]

export const deskSideMenuListThree:deskSideSubMenuList[]=[
    {
        list:"Mobiles, Computers",
        hasSubList:true,
        subList:[{
            heading:"Mobile, Tablet & More",
            lists:["All Mobile Phones","All Mobile Accessories","Cases & Covers","Screen Protectors","Power Banks","Refurbished & Open Box","Tablets","Wearble Devices","Smart Home","Office Supplies & Stationery","Software"]
        },
        {
            heading:"Computer & Accessories",
            lists:["All computers & Accessories","Laptops","Drives & Storage","Printers & Ink","Networking Devices","Computer Accessories","Game Zone","Monitors","Desktops","Components","All Electronics"]
        }
        ]
    },
    {
        list:"TV, Appliances, Electronics",
        hasSubList:true,
        subList:[{
            heading:"TV, Audio & Cameras",
            lists:["Televisions","Home Entertainment System","Headphones","Speakers","Home Audio & Theater","Cameras","Security Cameras","Camera Accessories","Musical Instruments & Professional Audio","Gaming Consoles","All Electronics"]
        },
    {
        heading:"Appliances",
        lists:["Air Conditioners","Refrigerators","Washing Machines","Kitchen & Home Appliances","Heating & Cooling Appliances","All Appliances"]
    }]
    },
    {
        list:"Men's Fashion",
        hasSubList:true,
        subList:[{
            heading:"Men's Clothing",
            lists:["Clothing","T-shirts& Polos","Shirts","Jeans","Innerwear"]
        },
        {
            heading:"Accessories",
            lists:["Watches","Bags & Luggage","Sunglasses","Jewellery","Wallets"]
        },
        {
            heading:"Men's Shoes",
            lists:["Shoes","Sports Shoes","Formal Shoes","Casual Shoes"]
        },
        {
            heading:"Stores",
            lists:["Sportswear","The Designer Boutique","Men's Fashion","Men's Handlooms","Fahion Sales & Deals"]
        }
    ]
    },
    {
        list:"Women's Fashion",
        hasSubList:true,
        subList:[{
            heading:"Women's Clothing",
            lists:["Clothing","Western Wear","Ethinic Wear","Lingerie & Nightwear","Top Brands"]
        },
        {
            heading:"Accessories",
            lists:["Watches","HandBags & Luggage","Gold & Diamond Jewellery","Fashion & Silver Jewellery","Sunglasses"]
        },
        {
            heading:"Women's Shoes",
            lists:["Shoes","Fashion Sandals","Bellerinas"]
        },
        {
            heading:"Stores",
            lists:["The Designer Boutique","Handloom & Handicraft Store","Sportswear","Women' Fashion","Amazon Fashion","Fashion Sales & Deals"]
        }]
    },
    {
        list:"Home, Kitchen, Pets",
        hasSubList:true,
        subList:[
            {
                heading:"Home & Kitchen",
                lists:["Explore Showroom","Kitchen & Dining","Kitchen Storage & Containers","Furniture","Fine Art","Home Furnishing","Bedroom Linen","Home Décor","Garden & Outdoors","Home Storage","Indoor Lighting","Home Improvement","Sewing & Craft Supplies","All Home & Kitchen","Shop by Room","Home & Kitchen Deals"]
            },
            {
                heading:"Pet Supplies",
                lists:["All Pet Supplies","Dog Supplies"]
            },
            {
                heading:"Home, Kitchen, Pets",
                lists:["Refurbished & Open Box"]
            }
        ]
    },
    {
        list:"Beauty, Health, Grocery",
        hasSubList:true,
        subList:[
            {
                heading:"Beauty & Health",
                lists:["Beauty & Grooming","Luxury Beauty","Make-up","Health & Personal Care","Amazon Pharmacy","Househols Supplies","Personal Care Appliances","Diet & Nutrition","Subscribe & Save","Value Bazaar"]
            },
            {
                heading:"Grocery & Gourmet Foods",
                lists:["All Grocery & Gourmet Foods","Coofee, Tea & Beverages","Snack Foods"]
            }

        ]
    },
    {
        list:"Sports, Fitness, Bags, Luggage",
        hasSubList:true,
        subList:[{
            heading:"Sports & Fitness",
            lists:["Cricket","Badminton","Cycling","Football","Running","Camping & Hiking","Fitness Accessories","Yoga","Strength Training","Cardio Equipment","Sports Collectibles","Refurbished & Open Box","All Exercise & Fitness","All Sports, Fitness & Outdoors"]
        },{
            heading:"Bags & Luggage",
            lists:["Backpacks","Rucksacks","Suitcases & Trolley Bags","Travel Duffles","Travel Accessories","Wallets"]
        }
    ]
    },
    {
        list:"Toys, Baby Products, Kids' Fashion",
        hasSubList:true,
        subList:[
            {
                heading:"Toys & Baby Products",
                lists:["Toys & Games","Baby Proudcts","Diapers","Toys Gifting Store","STEM Toys Store","International Toy Store","Baby Bath, Skin & Gromming","Strollers & Prams","Nursing & Feeding","Subscribe & Save","Pantry"]
            },
            {
                heading:"Kids' Fashion",
                lists:["Kids' Clothing","Kids' Shoes","School Bags","Kids' Watches","Kids' Fashion","Baby Fashion"]
            }
        ]
    },
    {
        list:"Car, Motorbike, Industrial",
        hasSubList:true,
        subList:[{
            heading:"Car & Motorbike",
            lists:["Motorbike Accessories & Parts","Car Accessories","Car Electronics","Car Parts","Car & Bike Care","All Car & Motorbike Products"]
        },
    {
        heading:"Industrial Supplies",
        lists:["Industrial & Scientific Supplies","Test, Measures & Inspect","Lab & Scientific","Janitorial & Sanitation Supplies"]
    }]
    },
    {
        list:"Books",
        hasSubList:true,
        subList:[{
            heading:"Books",
            lists:["All Books","Fiction Books","Editor's Corner","School Textbooks","Children's Books","Exam Central","Textbooks","Indian Language Books","Kindle eBooks"]
        },
        {
            heading:"Audible Audiobooks",
            lists:["Audibel Audiobooks & more","Audible Membership"]
        }
    ]
    },
    {
        list:"Movies, Music & Video Games",
        hasSubList:true,
        subList:[
            {
                heading:"Movies & TV Shows",
                lists:["All Movies & TV Shows","Blu-ray","All English","All Hindi","Entertainment Collectibles"]
            },
            {
                heading:"Video Games",
                lists:["Gaming Consoles","Lates Video Games","Gaming Accesories","PC Games","Video Games Deals","All Video Games"]
            },
            {
                heading:"Music",
                lists:["All Music","International Music","Film Songs","Indian Classical","Musical Instruments & Professinoal Audio"]
            },{
                heading:"Stream Music",
                lists:["Open web player","Amazon Prime Music"]
            }
        ]
    },
]

export const deskSideMenuListFour:(deskSideMenuList | deskSideSubMenuList)[]=[
   {
        list:"Amazon Pay",
        hasSubList:false
    },
    {
        list:"Gift Cards & Mobile Recharges",
        hasSubList:true,
        subList:[{
            heading:"Gift Cards",
            lists:["All Gifts Cards","Popular Gift Cards","Gift Boxes, Gift Tags, Greeting Cards","Popular Brand Gift Vouchers","Birthday Gift Cards","Wedding & Anniversary","best Wishes & Thank You","Corporate Gift Cards"]
        },
        {
            heading:"Recharges",
            lists:["Mobile Recharges"]
        }
        ]
    },
    {
        list:"Amazon Launchpad",
        hasSubList:false
    },
    {
        list:"Amazon Business",
        hasSubList:false
    },
    {
        list:"Handloom and Handicrafts",
        hasSubList:false
    },
    {
        list:"Amazon Saheli",
        hasSubList:false
    },
    {
        list:"Amazon Custom",
        hasSubList:false
    },
     {
        list:"Flight Tickets",
        hasSubList:false
    },
    {
        list:"Buy more, Save more",
        hasSubList:false
    },
    {
        list:"Clearance store",
        hasSubList:false
    },
    {
        list:"International Brands",
        hasSubList:false
    },
   
]

export const deskSideMenuListFive:deskSideMenuList[]=[
    {
        list:"Your Account",
        hasSubList:false
    },
    {
        list:"Customer Service",
        hasSubList:false
    },
    {
        list:"Sign in",
        hasSubList:false
    },
]