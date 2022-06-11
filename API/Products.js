let products = [
  {
    name: "pizza",
    isSelected: true,
    img: require("../assets/icons/pizza.png"),
    items: [
      {
        id: "1",
        img: require("../assets/images/Pizzas/pizza1.png"),
        name: "Primavera Pizza",
        weight: 540,
        price: 5.99,
        crust: "thin crust",
        size: {
          small: 10,
          medium: 14,
        },
      },
      {
        id: "2",
        img: require("../assets/images/Pizzas/pizza2.png"),
        name: "Margirita Pizza",
        weight: 540,
        price: 5.99,
        crust: "thin crust",
        size: {
          small: 10,
          medium: 14,
        },
      },
      {
        id: "3",
        img: require("../assets/images/Pizzas/pizza3.png"),
        name: "Mojjilla Pizza",
        weight: 540,
        price: 5.99,
        crust: "thin crust",
        size: {
          small: 10,
          medium: 14,
        },
      },
    ],
  },
  {
    name: "sea food",
    isSelected: false,
    img: require("../assets/icons/seafood.png"),
    items: [],
  },
  {
    name: "soft drinks",
    isSelected: false,
    img: require("../assets/icons/soda.png"),
    items: [],
  },
];

export default products;
