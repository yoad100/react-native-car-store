import React, { createContext, useState } from "react";
import Car from "../schemas/Car";
import CategoryScheme from "../schemas/CategoryScheme";
import CommentCar from "../schemas/CommentCar";
import Coupon from "../schemas/Coupon";

export const DataContext = createContext();

const DataContextProvider = (props) => {
	const [chosenCar, setChosenCar] = useState(null);
	const [shoppingCart, setShoppingCart] = useState([]);
	const filterCars = (cars, categoryName) => {
		return cars.filter((car) => car.category == categoryName);
	};
	const numberWithCommas= (x)=> {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

	const cars = [
		new Car(
			"https://cdn.motor1.com/images/mgl/qNALJ/s1/nissan-gt-r50-by-italdesign.jpg",
			"Nissan gtr COUPE",
			"Very good car ",
			3799,
			711,
			17000,
			"Nissan",
			895000
		),
		new Car(
			"https://www.kvishim.co.il/wp-content/uploads/images-001/Nissan-370Z_Nismo-2015.jpg",
			"Nissan 370Z NISMO",
			"Car with a speed",
			3200,
			609,
			1000,
			"Nissan",
			750000
		),
		new Car(
			"https://prod.pictures.autoscout24.net/listing-images/5b17906f-6885-470b-b6ec-89f3f4993051_edfef2c6-7768-49fb-94e9-5063c50a2339.jpg/420x315.jpg",
			"Nissan GT-R NISMO",
			"Monster who swallow all the ground ",
			3000,
			574,
			9000,
			"Nissan",
			700000
		),
		new Car(
			"https://www-europe.nissan-cdn.net/content/dam/Nissan/israel/vehicles/370zcoupe/z34/2017-update/performance/Performance_02_1170x585.jpg.ximg.l_12_m.smart.jpg",
			"Nissan 370Z Coupe",
			"a fantasy car with great vibe",
			2500,
			399,
			4000,
			"Nissan",
			550000
		),
		new Car(
			"https://upload.wikimedia.org/wikipedia/commons/c/cd/2019_Nissan_Juke_Tekna_Dig-T_S-A_1.0.jpg",
			"Nissan Juke",
			"a fantasy car with great vibe",
			2500,
			299,
			1500,
			"Nissan",
			250000
		),
		new Car(
			"https://www.nissanusa.com/content/dam/Nissan/us/vehicles/sentra/2020/overview/2020-nissan-sentra-consumer-reports.jpg",
			"Nissan Sentra",
			"Wow thats looks amazing",
			3000,
			350,
			2000,
			"Nissan",
			200000
		),
		new Car(
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-X-d4m8BK1o53Djh2w_fHPUlia1k7YvZq0g&usqp=CAU",
			"Porsche carrera gt",
			" this one ",
			3500,
			600,
			4000,
			"Porsche",
			900000
		),
		new Car(
			"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/roa070120fea-caymangt4-10-1596031988.jpg?crop=1.00xw:0.334xh;0,0.393xh&resize=1200:*",
			"Porsche Cayman",
			" this one ",
			2900,
			450,
			3000,
			"Porsche",
			800000
		),
		new Car(
			"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/p20-0586-a3-rgb-1610471756.jpg?crop=0.503xw:0.383xh;0.274xw,0.329xh&resize=1200:*",
			"Porsche Boxter",
			" this one ",
			2200,
			500,
			2000,
			"Porsche",
			450000
		),
		new Car(
			"https://cdn.motor1.com/images/mgl/Q0QyB/s3/2021-porsche-macan-ev-rendering.jpg",
			"Porsche Macan",
			"This vehicle has amazing aspects of style you defently should try this one ",
			3200,
			650,
			3200,
			"Porsche",
			1000000
		),
		new Car(
			"https://cdn.motor1.com/images/mgl/18PZX/s1/porsche-cayenne-s-coupe.jpg",
			"Porsche Cayenne",
			"This vehicle has amazing aspects of style you defently should try this one ",
			3500,
			620,
			12000,
			"Porsche",
			1500000
		),
		new Car(
			"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Porsche_Panamera_4S_%28970%29_%E2%80%93_Frontansicht%2C_20._September_2011%2C_W%C3%BClfrath.jpg/1200px-Porsche_Panamera_4S_%28970%29_%E2%80%93_Frontansicht%2C_20._September_2011%2C_W%C3%BClfrath.jpg",
			"Porsche Panamera",
			"This vehicle has amazing aspects of style you defently should try this one ",
			4000,
			780,
			14000,
			"Porsche",
			2000000
		),
		new Car(
			"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Porsche_Panamera_4S_%28970%29_%E2%80%93_Frontansicht%2C_20._September_2011%2C_W%C3%BClfrath.jpg/1200px-Porsche_Panamera_4S_%28970%29_%E2%80%93_Frontansicht%2C_20._September_2011%2C_W%C3%BClfrath.jpg",
			"Tesla X",
			"This vehicle has amazing aspects of style you defently should try this one ",
			500,
			550,
			10000,
			"Tesla",
			400000
		),
		new Car(
			"https://media.autoexpress.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1567604609/autoexpress/2019/08/01_41.jpg",
			"Tesla 3",
			"This vehicle has amazing aspects of style you defently should try this one ",
			2500,
			480,
			1100,
			"Tesla",
			200000
		),
		new Car(
			"https://i.pinimg.com/originals/e0/c6/80/e0c68023f1b99d2cdde8bb2df8a125cc.jpg",
			"Tesla S",
			"This vehicle has amazing aspects of style you defently should try this one ",
			4800,
			660,
			9000,
			"Tesla",
			700000
		),
		new Car(
			"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-tesla-model-y-long-range-204-1592938856.jpg?crop=0.638xw:0.478xh;0.127xw,0.291xh&resize=1200:*",
			"Tesla Y",
			"This vehicle has amazing aspects of style you defently should try this one ",
			3000,
			440,
			3000,
			"Tesla",
			233000
		),
		new Car(
			"https://thedriven.io/wp-content/uploads/2020/09/trubni_66078064_680934838985964_4785273039763483571_n-1280x720.jpg",
			"Tesla 2",
			"This vehicle has amazing aspects of style you defently should try this one ",
			2700,
			390,
			6000,
			"Tesla",
			190000
		),
		new Car(
			"https://cdn.motor1.com/images/mgl/zOrx0/s3/tesla-roadster.jpg",
			"Tesla Roadster",
			"This vehicle has amazing aspects of style you defently should try this one ",
			5000,
			800,
			10000,
			"Tesla",
			950000
		),
		new Car(
			"https://images.auto.co.il/Attachment/Gallery/1710/1622823/BMW-X1-2020-01.jpg?width=480",
			"BMW X1",
			"This vehicle has amazing aspects of style you defently should try this one ",
			4000,
			350,
			7000,
			"BMW",
			800000
		),
		new Car(
			"https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https%3A%2F%2Fcdni.autocarindia.com%2FExtraImages%2F20201006041619_BMW-2-GC-static.jpg&h=795&w=1200&c=0",
			"BMW Gran Coupe",
			"This vehicle has amazing aspects of style you defently should try this one ",
			3220,
			500,
			12000,
			"BMW",
			1000000
		),
		new Car(
			"https://www.bmw.bb/content/dam/bmw/common/all-models/3-series/series-overview/bmw-3er-overview-page-ms-07.jpg",
			"BMW 3",
			"This vehicle has amazing aspects of style you defently should try this one ",
			2500,
			430,
			4000,
			"BMW",
			400000
		),
		new Car(
			"https://www.motortrend.com/uploads/sites/5/2020/06/2021-BMW-4-Series-12.jpg",
			"BMW 4",
			"This vehicle has amazing aspects of style you defently should try this one ",
			2500,
			510,
			10000,
			"BMW",
			600000
		),
		new Car(
			"https://mediapool.bmwgroup.com/cache/P9/201812/P90333060/P90333060-the-new-bmw-7-series-in-painting-bernina-grey-amber-effect-metallic-with-light-alloy-wheel-styling-7-2250px.jpg",
			"BMW 7",
			"This vehicle has amazing aspects of style you defently should try this one ",
			3500,
			600,
			10000,
			"BMW",
			760000
		),
		new Car(
			"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-lamborghini-urus-mmp-1-1592423712.jpg",
			"Lamborghini Urus",
			"This vehicle has amazing aspects of style you defently should try this one ",
			4245,
			550,
			20000,
			"Lamborghini",
			560000
		),
		new Car(
			"https://cdn.motor1.com/images/mgl/vkPeK/s1/le-10-lamborghini-piu-rare-e-costose-di-sempre.jpg",
			"Lamborghini veneno",
			"This vehicle has amazing aspects of style you defently should try this one ",
			4600,
			650,
			15000,
			"Lamborghini",
			1000000
		),
		new Car(
			"https://cdn.motor1.com/images/mgl/8LQ6M/s3/lamborghini-aventador-svj-63-roadster.webp",
			"Lamborghini Aventador",
			"This vehicle has amazing aspects of style you defently should try this one ",
			5500,
			780,
			23000,
			"Lamborghini",
			990000
		),
		new Car(
			"https://www.cartube.co.il/media/showtime/storage/2020/11/19/240/main/lamborghini-huracan-sto-official-30.jpg?1605789609",
			"Lamborghini Huracan",
			"This vehicle has amazing aspects of style you defently should try this one ",
			4890,
			800,
			10000,
			"Lamborghini",
			1200000
		),
		new Car(
			"https://www.cartube.co.il/images/stories/audi/R8/2019/Audi-R8_V10_Decennium-2019-1600-01-970px.jpg",
			"Audi R8",
			"This vehicle has amazing aspects of style you defently should try this one ",
			3400,
			550,
			5000,
			"Audi",
			340000
		),
		new Car(
			"https://www.audi.co.il/wp-content/uploads/2017/07/%D7%97%D7%99%D7%A6%D7%95%D7%A0%D7%99-%D7%A1%D7%93%D7%90%D7%9F-1.jpg",
			"Audi A3",
			"This vehicle has amazing aspects of style you defently should try this one ",
			2500,
			470,
			2000,
			"Audi",
			250000
		),
		new Car(
			"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2019-audi-q8-361-1544802623.jpg?crop=0.744xw:0.558xh;0.256xw,0.380xh&amp;resize=1200:*",
			"Audi Q8",
			"This vehicle has amazing aspects of style you defently should try this one ",
			4000,
			610,
			8700,
			"Audi",
			500000
		),
		new Car(
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxx92-iUio0PSEHCmlcCDRVaKDvIGMc6We7loY7hQ0nDxao0cwHkuy0n2UMAmVJWBawIM&usqp=CAU",
			"Audi RS7",
			"This vehicle has amazing aspects of style you defently should try this one ",
			3900,
			590,
			15000,
			"Audi",
			700000
		),

	];

	const categories = [
		new CategoryScheme(
			"Nissan",
			filterCars(cars, "Nissan"),
			"https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Nissan-logo.svg/2378px-Nissan-logo.svg.png"
		),
		new CategoryScheme(
			"Porsche",
			filterCars(cars, "Porsche"),
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxNhn1coJ9wJqc6VtCx769ATm5mQGEc_DUZA&usqp=CAU"
		),
		new CategoryScheme(
			"Tesla",
			filterCars(cars,"Tesla"),
			"https://i.pinimg.com/originals/b0/46/8c/b0468c61baa72515ada2838c236466e8.jpg"
		),
		new CategoryScheme(
			"BMW",
			filterCars(cars,"BMW"),
			"https://brandslogo.net/wp-content/uploads/2015/09/bmw-flat-logo-vector-download.jpg"
		),
		new CategoryScheme(
			"Lamborghini",
			filterCars(cars,"Lamborghini"),
			"https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Lamborghini_Logo.svg/1200px-Lamborghini_Logo.svg.png"
		),
		new CategoryScheme(
			"Audi",
			filterCars(cars,"Audi"),
			"https://i.pinimg.com/originals/e2/bb/3e/e2bb3ec0ada2e382f0d499c6f7499d29.jpg"
		),
	];

	const coupons = [
		new Coupon("123", 15),
		new Coupon("yoadCar", 20),
		new Coupon("rachelCar", 5),
	  ];
	

	cars.forEach((car) => {
		car.comments = [
			new CommentCar(
				"https://media.fashionnetwork.com/cdn-cgi/image/fit=contain,width=1000,height=1000/m/0d2f/313d/73c9/143a/6875/d46e/d976/bb81/2b1d/b017/b017.jpg",
				"Yoad gadot",
				"What a noice vehicle to ride at the dame morning"
			),
			new CommentCar(
				"https://media.fashionnetwork.com/cdn-cgi/image/fit=contain,width=1000,height=1000/m/0d2f/313d/73c9/143a/6875/d46e/d976/bb81/2b1d/b017/b017.jpg",
				"Yoad gadot",
				"What a noice vehicle to ride at the dame morning"
			),
			
		];
	});

	return (
		<DataContext.Provider
			value={{
				cars: cars,
				categories: categories,
				chosenCar,
				setChosenCar,
				shoppingCart,
				setShoppingCart,
				numberWithCommas,
				coupons
			}}>
			{props.children}
		</DataContext.Provider>
	);
};

export default DataContextProvider;
