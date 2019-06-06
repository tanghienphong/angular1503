import { Action } from '@ngrx/store';
import {Product , listProduct} from '../products-list';

export function counterReducer(state: number = 0, action: Action) {
    if (action.type === 'INCREASE') {
        return state + 1;
    }
    if (action.type === 'DECREASE') {
        return state - 1;
    }
    if (action.type === 'RESET') {
        return 0;
    }
    return state;
}


//phải đảm bảo state luôn không thay đổi, 
//luôn giữ nguyên trạng thái ban đầu.
export function productReducer(state: Array<Product> = listProduct, action: any /*Action*/){
    if(action.type === 'ADD_PRODUCT'){
        return state.concat(action.product);
    }
    if(action.type === 'TOGGLE_WISHLIST'){
        return state.map(product=>{
            if(product.id === action.idProduct){
                product.wishlist = !product.wishlist
                return product;
            }
            return product;
        })
    }
    if(action.type === 'REMOVE_PRODUCT'){
        return state.filter(product=>{
            return product.id !== action.idProduct;
        })
    }
    return state;
}

export function toggleFormAddProduct(state: boolean = false, action: any){
    if(action.type === 'TOGGLE_FORM'){
        return action.status;
    }
    return state;
}

/**
 * định nghĩa Reducer
 * khai báo reducer tại App.Module.ts
 * gọi state default sử dụng ở 1 component bất kỳ
 * thay đổi trạng thái ở 1 component bất kỳ
 */