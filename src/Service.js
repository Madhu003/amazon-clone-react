import productList from "./amazon.json";

export function getProductDetails(id){
    return productList.filter(product => product.id == id)[0];
}