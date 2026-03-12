import { Order } from "./order";

export class FinanceModule {

    public pendingPayments: Order[] = []; 

    public processPayment(order: Order): boolean {
        console.log(`Processing payment for Order: ${order.id}`);
        
        
        const paymentLogic = Math.random() > 0.1; 
        
        if (paymentLogic) {
            order.status = "Payment Confirmed";
            this.pendingPayments.push(order);
            return true;
        } else {
            order.status = "Payment Failed";
            return false;
        }
    }
}