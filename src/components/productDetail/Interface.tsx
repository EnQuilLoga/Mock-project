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
  sorted: ProductType[];
  totalPages: number;
  pageIndex: number;
  filterDisplay: any;
  displayGridIcon: boolean;
  displayBlockIcon: boolean;
  displayGridProduct: boolean;
  sortColumn: string;
  sortOrder: any;
  setDisplayGridIcon: (i: boolean) => void;
  setDisplayBlockIcon: (i: boolean) => void;
  setDisplayGridProduct: (i: boolean) => void;
  setClosePrice: (close: boolean) => void;
  setCloseCategory: (close: boolean) => void;
  onSort: (path: string) => void;
  onPrevious: () => void;
  onNext: () => void;
}
export interface sizeFilterType {
  value: string;
  label: string;
}

export interface renderCheckboxType {
  label: string;
  data: sizeFilterType[];
  name: string;
  inStock: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface tagFilterType {
  value: string;
}
export interface renderTagType {
  data: tagFilterType[];
}
