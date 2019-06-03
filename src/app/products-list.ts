export interface Product {
    id: string;
    name: string;
    price: number;
    wishlist?: boolean;
}
export let listProduct: Product[] = [
    { id: '1', name: 'Iphone X', price: 20000000, wishlist: true },
    { id: '2', name: 'Macbook pro', price: 50000000, wishlist: false },
    { id: '3', name: 'Apple Watch', price: 25000000, wishlist: false }
];

