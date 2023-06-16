import { ApiError } from "./Error";
import { Product } from "./Product";

export interface ApiProductResponse {
    products: Product[];
    error: ApiError | null;
}