export interface ProductType {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
export interface ListProductType {
  data: ProductType[];
  totalPages: number;
  pageIndex: number;
  filterDisplay: any;
  displayGridIcon: boolean;
  displayBlockIcon: boolean;
  displayGridProduct: boolean;
  sorted: ProductType[];
  sortColumn: string;
  sortOrder: any;
  setDisplayGridIcon: (i: boolean) => void;
  setDisplayBlockIcon: (i: boolean) => void;
  setDisplayGridProduct: (i: boolean) => void;
  setClosePrice: (close: boolean) => void;
  setCloseCategory: (close: boolean) => void;
  onSort: (path: string) => void;
  setPageIndex: (number: number) => void;
}
export interface renderPriceFilterType {
  displayPrice: boolean;
  max: number;
  rangePrice: string;
  min: number;
  handlePriceRange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface renderCategoryFilterType {
  selected: string;
  handleCategory: (value: string) => void;
}
export interface tagFilterType {
  value: string;
}
export interface renderTagType {
  data: tagFilterType[];
}
export interface GridAndBlockIconType {
  displayGridIcon: boolean;
  displayBlockIcon: boolean;
  displayGridProduct: boolean;
  sorted: ProductType[];
  sortColumn: string;
  sortOrder: any;
  setDisplayGridIcon: (i: boolean) => void;
  setDisplayBlockIcon: (i: boolean) => void;
  setDisplayGridProduct: (i: boolean) => void;
  onSort: (path: string) => void;
}

export interface DisplayFilterType {
  filterDisplay: any;
  setClosePrice: (close: boolean) => void;
  setCloseCategory: (close: boolean) => void;
}
export interface SortType {
  sortColumn: string;
  sortOrder: any;
  onSort: (path: string) => void;
}

export interface DetailProductType {
  data: ProductType[];
  number: number;
  discount: number;
}
export interface ListProductDetailType {
  data: ProductType[];
  number: number;
}
export interface PaginationType {
  pageIndex: number;
  totalPages: number;
  setPageIndex: (number: number) => void;
}
export interface sizeFilterType {
  value: string;
  label: string;
}

// <Header
//           displayGridProduct={ displayGridProduct }
//           displayGridIcon={ displayGridIcon }
//           setDisplayGridIcon={ setDisplayGridIcon }
//           setDisplayBlockIcon={ setDisplayBlockIcon }
//           setDisplayGridProduct={ setDisplayGridProduct }
//           displayBlockIcon={ displayBlockIcon }
//           sorted={ sorted }
//           onSort={ onSort }
//           sortColumn={ sortColumn }
//           sortOrder={sortOrder  }
//           setClosePrice={ setClosePrice }
//           filterDisplay={ filterDisplay }
//           setCloseCategory={ setCloseCategory }

//         />
