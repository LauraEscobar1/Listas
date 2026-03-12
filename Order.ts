export class Order {
    public status: string = "Received";
    public isPaid: boolean = false;
    public trackingCode: string = "N/A";

    constructor(
        public id: number,
        public customer: string,
        public product: string,
        public quantity: number,
        public price: number
    ) {}
}