export default class Car{
	constructor(imgUrl,title,paragraph,engineCapacity,horsePower,delivery,category,finalPrice){
		this.imgUrl = imgUrl;
		this.title = title;
		this.paragraph = paragraph;
		this.engine_capacity = engineCapacity;
		this.horse_power = horsePower;
		this.delivery = delivery;
		this.final_price = finalPrice;
		this.category = category;
		this.comments = []
	}


}