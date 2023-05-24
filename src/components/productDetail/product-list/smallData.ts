import _ from 'lodash'

export const sortProduct =  [
    {path: 'title', label: 'Name'},
    {path: 'price', label: 'Price'},
  
]

export const category = [
    {value: "men's clothing", name: 'Category'},
    {value: "jewelery", name: 'Category'},
    {value: "electronics", name: 'Category'},
    {value: "women's clothing", name: 'Category'},
    
]


export const tags = [
    { value: 'Shopping' },
    { value: 'New Products' },
    { value: 'Accessories' },
    { value: 'Sale' },
]

export const star = _.range(5);



