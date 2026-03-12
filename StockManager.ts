import { Order } from "./order";

export class StockManager {
    public validationList: Order[] = []; 
    public validateStock(order: Order): boolean {
        
        const hasStock = true; 
        if (hasStock) {
            this.validationList.push(order);
            return true;
        }
        return false; 
    }
}