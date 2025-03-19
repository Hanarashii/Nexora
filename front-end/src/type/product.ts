interface Product {
    id: number;
    price: string;
    name: string;
    desc: string;
    img?: string;
    category_id?: number;
    number: number;
    formatted_discount_price?:string;
    formatted_price:string;
    total?: string
}

export default Product