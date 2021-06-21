import React, { createContext, useState } from "react";
import Car from "../schemas/Car";
import CategoryScheme from "../schemas/CategoryScheme";
import CommentCar from "../schemas/CommentCar";

export const DataContext = createContext();

const DataContextProvider = (props) => {
  const [chosenCar, setChosenCar] = useState(null);
  const [shoppingCart, setShoppingCart] = useState([]);
  const filterCars = (cars, categoryName) => {
    return cars.filter((car) => car.category == categoryName);
  };

  const cars = [
    new Car(
      "https://cdn.motor1.com/images/mgl/qNALJ/s1/nissan-gt-r50-by-italdesign.jpg",
      "Nissan gtr",
      "Very good car ",
      3799,
      711,
      70,
      "Nissan",
      15000
    ),
    new Car(
      "https://cdn.motor1.com/images/mgl/qNALJ/s1/nissan-gt-r50-by-italdesign.jpg",
      "Nissan gtr",
      "Very good car ",
      3799,
      711,
      70,
      "Nissan",
      15000
    ),
    new Car(
      "https://cdn.motor1.com/images/mgl/qNALJ/s1/nissan-gt-r50-by-italdesign.jpg",
      "Nissan gtr",
      "Very good car ",
      3799,
      711,
      70,
      "Nissan",
      15000
    ),
    new Car(
      "https://cdn.motor1.com/images/mgl/qNALJ/s1/nissan-gt-r50-by-italdesign.jpg",
      "Nissan gtr",
      "Very good car ",
      3799,
      711,
      70,
      "Nissan",
      15000
    ),
    new Car(
      "https://www.automobilemag.com/uploads/sites/11/2020/04/2004-Porsche-Carrera-GT-_0-1.jpg",
      "Porsche carrera gt",
      " this one ",
      2600,
      400,
      1000,
      "Porsche",
      120000
    ),
    new Car(
      "https://mercerhabby.com/wp-content/uploads/2019/10/porsche_911_992_200.jpg",
      "Porsche 911",
      "This vehicle has amazing aspects of style you defently should try this one ",
      3400,
      600,
      120,
      "Porsche",
      1705000
    ),
    new Car(
      "https://mercerhabby.com/wp-content/uploads/2019/10/porsche_911_992_200.jpg",
      "Porsche 911",
      "This vehicle has amazing aspects of style you defently should try this one ",
      3400,
      600,
      120,
      "Porsche",
      1705000
    ),
    new Car(
      "https://mercerhabby.com/wp-content/uploads/2019/10/porsche_911_992_200.jpg",
      "Porsche 911",
      "This vehicle has amazing aspects of style you defently should try this one ",
      3400,
      600,
      120,
      "Porsche",
      1705000
    ),
  ];

  const categories = [
    new CategoryScheme("Nissan", filterCars(cars, "Nissan")),
    new CategoryScheme("Porsche", filterCars(cars, "Porsche")),
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
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
