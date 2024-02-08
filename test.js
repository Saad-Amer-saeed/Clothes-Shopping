const fff = [
  {
    id: "p1",
    dfd: "Majestic Vintage Mocha Overcoat",
    price: 129.99,
    quantity: 1,
  },
];

const gggg = fff.map((item) => ({ ...item, quantity: 77 }));

console.log(gggg);
