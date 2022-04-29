const brands = ["bmw", "Huawei", "Apple", "Volkswagen"]

const newArr = brands.map( (brand) =>{
    return brand.toLocaleUpperCase().slice(0,3)
})

console.log(newArr)