import { Order } from "./order";
import { StockManager } from "./StockManager"; 
import { SalesDepartment } from "./SalesDepartment";
import { FinanceModule } from "./FinanceModule";
import { ShippingService } from "./ShippingService"; 

class MainApp {
    
    private inventory = new StockManager();
    private sales = new SalesDepartment();
    private finance = new FinanceModule();
    private shipping = new ShippingService();

    
    public executeOrderWorkflow(customer: string, item: string, qty: number) {
        console.log("--- Step 1 & 2: Receive Order ---");
        
        
        const newOrder = new Order(Date.now(), customer, item, qty, 25.0);

      
        if (this.inventory.validateStock(newOrder)) {
            console.log("Step 5: Inventory Available. Generating Quote...");
            
            
            this.sales.quoteList.push(newOrder); 
            
            
            const customerDecision = true; 
            const processedOrder = this.sales.analyzeQuoteResponse(newOrder.id, customerDecision);

            if (processedOrder) {
                console.log("Step 11: Update Status. Proceeding to Finance.");
                
                
                if (this.finance.processPayment(processedOrder)) {
                    console.log("Step 13: Payment Successful.");
                    
                    
                    this.shipping.processShipment(processedOrder);
                    
                    console.log("Step 20: Order Successfully Completed! ✨");
                } else {
                    console.log("Step 13: Payment Failed. Transaction Aborted.");
                }
            } else {
                console.log("Step 10: Quote Rejected by Customer.");
            }
        } else {
            
            console.log("Step 6: Notify Out of Stock. Process Ended.");
        }
    }
}

export const app = new MainApp();