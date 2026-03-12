import { Order } from "./order";

export class ShippingService {
    public shippingQueue: Order[] = []; 

    public processShipment(order: Order) {
       
        order.trackingCode = "TRK-" + Math.random().toString(36).toUpperCase().substring(2, 9);
        order.status = "Shipped";
        this.shippingQueue.push(order);
    }
}