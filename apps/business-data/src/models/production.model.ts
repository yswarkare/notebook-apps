interface PriceInt {
	id: string;
	name: string;
	description: string;
	quantity: number;
	cost: number;
	profit: number;
	sellingPrice: number;
	gst: number;
	gstPrice: number;
}

class PriceCalculation implements PriceInt {
	id: string;
	name: string;
	description: string;
	quantity: number;
	cost: number;
	profit: number;
	sellingPrice: number;
	gst: number;
	gstPrice: number;
	constructor(quantity, costPerKg, gstRate, profitRate) {
		this.cost = quantity * costPerKg;
		this.profit = this.cost * profitRate;
		this.sellingPrice = this.cost + this.profit;
		this.gst = this.sellingPrice * gstRate;
		this.gstPrice = this.sellingPrice + this.gst;
	}
}

interface ProductPricingType {
	manufacturer: PriceInt;
	distributor: PriceInt;
	wholesaler: PriceInt;
	retailer: PriceInt;
};

export type GstRateType = {
	manufacturer: number;
	distributor: number;
	wholesaler: number;
	retailer: number;
}

export class ProductPricing implements ProductPricingType {
	manufacturer: PriceInt;
	distributor: PriceInt;
	wholesaler: PriceInt;
	retailer: PriceInt;
	constructor(quantity: number, costPerKg: number, gstRate: GstRateType, profitRate: GstRateType){
		this.manufacturer = new PriceCalculation(quantity, costPerKg, gstRate.manufacturer, profitRate.manufacturer);
		this.distributor = new PriceCalculation(quantity, this.manufacturer.gstPrice, gstRate.distributor, profitRate.distributor);
		this.wholesaler = new PriceCalculation(quantity, this.distributor.gstPrice, gstRate.wholesaler, profitRate.wholesaler);
		this.retailer = new PriceCalculation(quantity, this.wholesaler.gstPrice, gstRate.retailer, profitRate.retailer);
	}	
}