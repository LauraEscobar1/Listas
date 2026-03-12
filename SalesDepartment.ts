import { Order } from "./order";

export class SalesDepartment {
    public quoteList: Order[] = [];

   
    public analyzeQuoteResponse(id: number, customerDecision: boolean): Order | null {
        const index = this.quoteList.findIndex(o => o.id === id);
        if (index !== -1) {
            let processedOrder = this.quoteList.splice(index, 1)[0];
            
            
            if (customerDecision) {
                processedOrder.status = "Quote Accepted"; // Step 11
                processedOrder.isPaid = true; // Step 12 & 13
                return processedOrder;
            }
        }
        return null;
    }
}