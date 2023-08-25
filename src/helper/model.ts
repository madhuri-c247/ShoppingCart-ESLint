export interface ProductData {
    map(arg0: (product: ProductData) => { id: number; title: string; price: number; description: string; category: string; image: string; }): import("immer/dist/internal").WritableDraft<ProductData>[];
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

export type AsyncThunkConfig = {
    Product: ProductData
}

export interface ProductPayload {
    productData: ProductData[];
    type: string
}

export interface States{
    product: ProductData[];
    isLoading: boolean;
    isError: boolean;
    cart: number;
    productQuantity: number;
    productID: number;
}

export interface Actions{
    id: number,
    cartValue:number
}