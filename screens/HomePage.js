import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { DataContext } from "../data/DataContextProvider";
import CategoryCard from "../components/CategoryCard";
import Category from "./Category";

const HomePage = (props) => {
  const { categories } = useContext(DataContext);

  return (
    <View>
      {categories.map((category, index) => (
        <CategoryCard
          key={index}
          onSelect={() =>
            props.navigation.navigate({
              routeName: "Category",
              params: {
                categoryCars: category.cars,
                categoryName: category.name,
              },
            })
          }
          name={category.name}
          cars={category.cars}
          navigation={props.navigation}
          route={props.route}
        />
      ))}
    </View>
  );
};

export default HomePage;
