// Mkulima is new Kenyan business-to-business (B2B) agro-startup focusing on connecting grocery vendors to rural farmers. This is through their online marketplace where farmers can trade vegetables and fruits with grocery vendors. To begin with, farmers have to register on the platform and login. Thereafter, they can upload their products with respective prices. On the other hand, grocery vendors can signup and login to the platform to place their bulk order requests. 
// Create a class Mkulima that will keep a list of farms, grocery vendors and products. A single farm record should contain id, farm name, farmer, phone number and address. A single grocery vendor record should contain id, store name and phone number. A product should have id, name and price fields. 
// Users of the system should be able to:
//  addFarm - params: farmId, name, farmer, phone, address
// removeFarm - params: farmId
// updateFarm - params: farmId, name, farmer, phone, address
// getFarm - params: farmId - returns a farm object
// addProduct - params: productId, name, price
// removeProduct - params: productId
// updateProduct - params: productId, name, price
// getProduct - params: productId - returns a product object
// printProducts - No param, console logs a list of product items with their prices.
// calculateOrderCost - params: productId, quantity

class Mkulima{
    constructor(){
    this.farms = [];
    this.groceryVendors = [];
    this.products = [];
    this.addFarm = (farmId, name, farmer, phone, address) => {
    this.farms.push({farmId,name,farmer,phone,address})
    }
    this.removeFarm = (farmId) => {
    let specificItem = this.farms.find(item => item.farmId ===farmId);
    let farmIndex = this.farms.indexOf(specificItem);
    this.farms.splice(farmIndex, 1);
    }
    this.updateFarm = function(farmId,newFarmId,newFarmName,newFarmerName,newPhone,newAddress){
    let specificFarm = this.farms.find(item => item.farmId ===farmId)
    specificFarm.farmId =newFarmId;
    specificFarm.farmName =newFarmName;
    specificFarm.farmer =newFarmerName;
    specificFarm.phone =newPhone;
    specificFarm.address =newAddress;
    }
    this.getFarm = (Id)=>{
    console.log(this.farms.find(object=>object.farmId===Id))
    }
    this.addProduct = (productId, productName, price) => {
    this.product.push({productId,productName,price})
}
this.removeProduct = (productId) => {
let specific = this.product.find(item => item.productId ===productId);
let productIndex = this.product.indexOf(specific);
this.product.splice(productIndex, 1);
}
this.updateProduct = function(productId,newProductId,newProductName,newPrice){
let specificProduct = this.product.find(item => item.productId ===productId)
specificProduct.productId =newProductId;
specificProduct.productName = newProductName;
specificProduct.price = newPrice;
}
this.getProduct = (Id)=>{
console.log(this.product.find(object=>object.productId===Id))
}
this.printProducts = ()=>{
console.log(this.product)
}
this.calculateOrderCost = (productId,quantity)=>{
let specificProduct = this.product.find(object=>object.productId===productId);
console.log(`${quantity} ${specificProduct.productName} for KES ${quantity*specificProduct.price}`);
}
}
}

let farmA = new Mkulima();
farmA.addFarm("254","Nalenyi","Lark","0746745729", "Q170");
    farmA.addFarm("121","Naregae","Ann","0782785657", "LN494");
    farmA.addFarm("555","Akai","Verah","0794472929", "AN5605");
    farmA.addFarm("555","Felix","Nairoshi","072456729", "KY0516");
    console.log(farmA.farms);

    farmA.removeFarm("023");
    console.log()
     



