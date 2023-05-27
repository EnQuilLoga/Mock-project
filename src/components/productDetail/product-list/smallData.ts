import _ from 'lodash'

export const sortProduct =  [
    {path: 'name', label: 'Name'},
    {path: 'price', label: 'Price'},
  
]

export const category = [
    {value: "CASUAL", name: 'Category'},
]


export const tags = [
    { value: 'Shopping' },
    { value: 'New Products' },
    { value: 'Accessories' },
    { value: 'Sale' },
]

export const star = _.range(5);


export const des = [ 'Description', 'Product Details', 'Reviews']
