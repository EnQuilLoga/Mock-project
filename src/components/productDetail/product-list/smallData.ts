import _ from 'lodash'

export const sortProduct =  [
    {path: 'name', label: 'Name'},
    {path: 'price', label: 'Price'},
  
]

export const category = [
    {label: "Casual",value: 'CASUAL', name: 'Category', },
    {label: "Formal",value: 'FORMAL', name: 'Category'},
    {label: "Running",value: 'RUNNING', name: 'Category'},
    {label: "Football",value: 'FOOTBALL', name: 'Category'},
]


export const tags = [
    { value: 'Shopping' },
    { value: 'New Products' },
    { value: 'Accessories' },
    { value: 'Sale' },
]

export const star = _.range(5);


export const des = [ 'Description', 'Product Details', 'Reviews']

export const fakeData = {  
    _id: "646e00088fbc98e44e7a276btgfdg",
    name: "Nike React Infinity Run Flyknit",
    brand: "NIKE",
    gender: "MEN",
    category: "RUNNING",
    price: 160,
    is_in_inventory: true,
    items_left: 3,
    imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-665455a5-45de-40fb-945f-c1852b82400d/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg",
    slug: "nike-react-infinity-run-flyknit",
    featured: 0,
    createdAt: "2023-05-24T12:16:08.080Z",
    updatedAt: "2023-05-24T12:16:08.080Z",
    
}