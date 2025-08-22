import { createContext, useEffect, useState, type ReactNode } from "react";
import type { CategoryFilter, CategoryProdut } from "../Types/product";
import { useParams } from "react-router-dom";
import axiosInstance from "../api/axios";
import FilterProduct from "../Helpers/FilterProduct";

type ProductListContextType = {
  cateProduct: CategoryProdut[] | [];
  sortCategory: string[] | [];
  filterCategory: CategoryFilter[] | [];
  activeIndex: number;
  filterBtn: {
    filter_Type: string;
    filter_sub_head: string;
    filter_buttons: string[];
  };
  activeFilter: { [key: string]: number[] };
  selectedFilters: { [key: string]: string[] };
  handleCategory: (index: number) => void;
  handleActiveFilter: (
    index: number,
    item: string,
    filterTitle: string
  ) => void;
  handleRating: () => void;
  handleClearFilter: () => void;
  handleSliderValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFilters: () => void;
  sliderValue: { [key: string]: number };
  toggle:boolean,
  handleModal:()=>void,
  filteredLists:CategoryProdut[] | []

};

export const ProductListContext = createContext<ProductListContextType>({
  cateProduct: [],
  sortCategory: [],
  filterCategory: [],
  activeIndex: 0,
  filterBtn: {
    filter_Type: "",
    filter_sub_head: "",
    filter_buttons: [],
  },
  activeFilter: {},
  selectedFilters: {},
  handleCategory: () => {},
  handleActiveFilter: () => {},
  handleRating: () => {},
  handleClearFilter: () => {},
  handleSliderValue: () => {},
  handleFilters: () => {},
  sliderValue: {},
  toggle:false,
  handleModal:()=>{},
  filteredLists:[]
});

export const ProductListProvider = ({ children }: { children: ReactNode }) => {
  const params = useParams();
  const [cateProduct, setCateProduct] = useState<CategoryProdut[]>([]);
  const [sortCategory, setSortCategory] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [filterCategory, setFilterCategory] = useState<CategoryFilter[]>([]);

  // data fetching
  useEffect(() => {
    axiosInstance
      .get(`/${params.url}.json`)
      .then((res: any) => {
        setCateProduct(res.data.product);
        setSortCategory(res.data.category);
        setFilteredLists(res.data.product)
        setFilterCategory(res.data.filterCategory);
        setFilterBtn(res.data.filterCategory[0]);
      })
      .catch((err) => {
        setError("Failed to load data");
        console.log(err);
      });
  }, []);

  // filter modal toggle function
  const [toggle,setToggle] = useState<boolean>(false)

  const handleModal=()=>{
    setToggle(!toggle)
  }


  // main fiiter section

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [filterBtn, setFilterBtn] = useState(filterCategory[0]);
  const [activeFilter, setActiveFilter] = useState<{ [key: string]: number[] }>(
    {}
  );
  const [selectedFilters, setSelectedFilters] = useState<{
    [key: string]: string[];
  }>({});
  const [sliderValue, setSliderValue] = useState<{ [key: string]: number }>({
    sliderOne: 115,
    sliderTwo: 3999,
  });

  const handleCategory = (index: number) => {
    setActiveIndex(index);
    setFilterBtn(filterCategory[index]);
  };
  const [filteredLists,setFilteredLists] = useState<CategoryProdut[]>([])

  // active filter function
  const handleActiveFilter = (
    index: number,
    item: string,
    filterTitle: string
  ) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterTitle]: [...(prev[filterTitle] || []), item],
      slider: [String(sliderValue.sliderOne), String(sliderValue.sliderTwo)],
    }));

    setActiveFilter((prev) => ({
      ...prev,
      [filterTitle]: [...(prev[filterTitle] || []), index],
    }));
  };

  // rating controller function
  const handleRating = () => {
    setSelectedFilters((prev) => ({
      ...prev,
      ["Customer Rating"]: ["4"],
    }));

    setActiveFilter((prev) => ({
      ...prev,
      ["Customer Rating"]: [0],
    }));
  };

  // clear selected values
  const handleClearFilter = () => {
    setActiveFilter({});
    setSelectedFilters({});
    setSliderValue({
      sliderOne: 115,
      sliderTwo: 3999,
    });
    setFilteredLists(cateProduct)
  };

  // slider value controller function
  const handleSliderValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const minGap: number = 70;
    const { name, value } = e.target;
    const val = Number(value);

    if (name === "sliderOne") {
      if (sliderValue.sliderTwo - val >= minGap) {
        setSliderValue((prev) => ({
          ...prev,
          [name]: val,
        }));
      }
    }

    if (name === "sliderTwo") {
      if (val - sliderValue.sliderOne >= minGap) {
        setSliderValue((prev) => ({
          ...prev,
          [name]: val,
        }));
      }
    }
  };

  useEffect(() => {
    setSelectedFilters((prev) => ({
      ...prev,
      slider: [String(sliderValue.sliderOne), String(sliderValue.sliderTwo)],
    }));
  }, [sliderValue]);


  // filtering main function 
  const handleFilters = () => {
    const filtered = FilterProduct(cateProduct, selectedFilters);
    console.log("filtered",filtered)
    setFilteredLists(filtered);
    handleModal()
  };

  console.log("cateProduct",cateProduct)

  return (
    <ProductListContext.Provider
      value={{
        cateProduct,
        sortCategory,
        filterCategory,
        activeIndex,
        handleCategory,
        filterBtn,
        activeFilter,
        selectedFilters,
        handleActiveFilter,
        handleRating,
        handleClearFilter,
        handleSliderValue,
        handleFilters,
        sliderValue,
        handleModal,
        toggle,
        filteredLists
      }}
    >
      {children}
    </ProductListContext.Provider>
  );
};
