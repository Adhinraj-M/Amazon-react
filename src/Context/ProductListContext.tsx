import { createContext, useEffect, useState, type ReactNode } from "react";
import {
  priceRangeMap,
  type CategoryFilter,
  type CategoryProdut,
} from "../Types/product";
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
  selectedFilters: { [key: string]: string[] | { min: number; max: number }[] };
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
  toggle: boolean;
  handleModal: () => void;
  filteredLists: CategoryProdut[] | [];
  handleFilterModal: (i: number) => void;
  modalIndex: number | null;
  handleCategoryClear: (i: number | null) => void;
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
  toggle: false,
  handleModal: () => {},
  filteredLists: [],
  handleFilterModal: () => {},
  modalIndex: null,
  handleCategoryClear: () => {},
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
        setFilteredLists(res.data.product);
        setFilterCategory(res.data.filterCategory);
        setFilterBtn(res.data.filterCategory[0]);
      })
      .catch((err) => {
        setError("Failed to load data");
        console.log(err);
      });
  }, []);

  // filter modal toggle function
  const [toggle, setToggle] = useState<boolean>(false);

  const handleModal = () => {
    setToggle(!toggle);
  };

  // main fiiter section

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [filterBtn, setFilterBtn] = useState(filterCategory[0]);
  const [activeFilter, setActiveFilter] = useState<{ [key: string]: number[] }>(
    {
      "Price and Deals": [0],
    }
  );
  const [selectedFilters, setSelectedFilters] = useState<{
    [key: string]: string[] | { min: number; max: number }[];
  }>({
    "Price and Deals": [{ min: 115, max: 3999 }],
  });
  const [sliderValue, setSliderValue] = useState<{ [key: string]: number }>({
    sliderOne: 115,
    sliderTwo: 3999,
  });

  const handleCategory = (index: number) => {
    setActiveIndex(index);
    setFilterBtn(filterCategory[index]);
  };
  const [filteredLists, setFilteredLists] = useState<CategoryProdut[]>([]);

  // active filter function
  const handleActiveFilter = (
    index: number,
    item: string,
    filterTitle: string
  ) => {
    setSelectedFilters((prev) => {
      let currentItems: any = prev[filterTitle] || [];
      let updatedItems: string[] = [];

      if (filterTitle === "Price and Deals") {
        if (currentItems.includes("All Prices")) {
          updatedItems = [item];
        } else {
          const isSelected = currentItems.includes(item);

          updatedItems = isSelected
            ? currentItems.filter((i: any) => i !== item)
            : [item];

          if (updatedItems.length === 0) {
            updatedItems = ["All Prices"];
          }
        }

        const PriceRange = updatedItems.map((label) => priceRangeMap[label]);
        return {
          ...prev,
          [filterTitle]: PriceRange,
          slider: [
            String(sliderValue.sliderOne),
            String(sliderValue.sliderTwo),
          ],
        };
      }

      const isSelected = currentItems.includes(item);
      updatedItems = isSelected
        ? currentItems.filter((i: any) => i !== item)
        : [...currentItems, item];

      return {
        ...prev,
        [filterTitle]: updatedItems,
        slider: [String(sliderValue.sliderOne), String(sliderValue.sliderTwo)],
      };
    });

    setActiveFilter((prev) => {
      const currentIndexes = prev[filterTitle] || [];
      let updatedIndexes: number[] = [];

      if (filterTitle === "Price and Deals") {
        if (currentIndexes.includes(0)) {
          updatedIndexes = [index];
        } else {
          const isSelected = currentIndexes.includes(index);

          updatedIndexes = isSelected
            ? currentIndexes.filter((i) => i !== index)
            : [index];

          if (updatedIndexes.length === 0) {
            updatedIndexes = [0];
          }
        }
      } else {
        const isSelectedIndex = currentIndexes.includes(index);
        updatedIndexes = isSelectedIndex
          ? currentIndexes.filter((i) => i !== index)
          : [...currentIndexes, index];
      }
      return {
        ...prev,
        [filterTitle]: updatedIndexes,
      };
    });
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
    setActiveFilter({
      "Price and Deals": [0],
    });
    setSelectedFilters({
      "Price and Deals": [{ min: 0, max: 3999 }],
    });
    setSliderValue({
      sliderOne: 115,
      sliderTwo: 3999,
    });
    setFilteredLists(cateProduct);
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

  //when the price and deals button changes
  useEffect(() => {
    if (selectedFilters["Price and Deals"]) {
      const sliderArr = Object.values(selectedFilters["Price and Deals"][0]);
      const filtered = Object.fromEntries(
        Object.entries(selectedFilters).filter(
          ([key]) => key !== "Price and Deals" && key !== "slider"
        )
      );
      const updated = {
        ...filtered,
        slider: [String(sliderArr[0]), String(sliderArr[1])],
      };
      setSelectedFilters(updated);
    }
  }, [selectedFilters["Price and Deals"]]);

  //when slider changes
  useEffect(() => {
    setActiveFilter({
      "Price and Deals": [0],
    });
    setSelectedFilters((prev) => ({
      ...prev,
      slider: [String(sliderValue.sliderOne), String(sliderValue.sliderTwo)],
    }));
  }, [sliderValue]);

  // filtering main function
  const handleFilters = () => {
    const filtered = FilterProduct(cateProduct, selectedFilters);
    setFilteredLists(filtered);
    handleModal();
    handleFilterModal(modalIndex);
  };

  //clear category section for desktop
  const handleCategoryClear = (i: any) => {
    if (i !== null) {
      const clearCate = filterCategory[i].filter_Type;

      const updatedActiveFilter = Object.fromEntries(
        Object.entries(activeFilter).filter(([key, _]) => key !== clearCate)
      );
      const updatedSelectedFilter = Object.fromEntries(
        Object.entries(selectedFilters).filter(([key, _]) => key !== clearCate)
      );

      const finalActiveFilter = {
        ...updatedActiveFilter,
        "Price and Deals": [0],
      };
      const finalSelectedFilter = {
        ...updatedSelectedFilter,
        slider: ["115", "3999"],
      };

      setActiveFilter(finalActiveFilter);

      setSelectedFilters(finalSelectedFilter);

      const filtered = FilterProduct(cateProduct, finalSelectedFilter);
      setFilteredLists(filtered);
    }
  };

  // large screen filter modal handling

  const [modalIndex, setModalIndex] = useState<number | null>(null);

  const handleFilterModal = (i: number | null) => {
    if (modalIndex === i) {
      setModalIndex(null);
    } else {
      setModalIndex(i);
    }
  };

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
        filteredLists,
        handleFilterModal,
        modalIndex,
        handleCategoryClear,
      }}
    >
      {children}
    </ProductListContext.Provider>
  );
};
