// List of provinces 
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];

// Names
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];

// Products and their prices
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

// 1.Logging out each province and name in sequence
provinces.forEach(province => console.log(province));
names.forEach(name => console.log(name));
names.forEach((name, index) => console.log(`${name} (${provinces[index]})`)); // Log names with corresponding province.

// 2.Making the province names uppercase for easy reading
const upperCaseProvinces = provinces.map(province => province.toUpperCase()); 
console.log(upperCaseProvinces);

// 3.Get the length of each name
const nameLengths = names.map(name => name.length);
console.log(nameLengths);

// 4.Alphabetically sorting the provinces
const sortedProvinces = [...provinces].sort();
console.log(sortedProvinces);

// 5.Filtering out provinces with 'Cape' in the name – to see what’s left
const filteredProvinces = provinces.filter(province => !province.includes("Cape"));
console.log(filteredProvinces.length); // How many provinces don’t have 'Cape'?

// 6.Do any of the names contain the letter 'S'?
const containsS = names.map(name => name.includes('S'));
console.log(containsS);

// 7.Creating an object that maps names to provinces for easy lookup
const provinceMapping = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});
console.log(provinceMapping);

// Advanced Exercises

// 1.Logging all product names at once
console.log(products.map(product => product.product).join(', '));

// 2.Filter products by name length (5 characters or less), then log them
const filteredProductsByLength = products.filter(product => product.product.length <= 5);
console.log(filteredProductsByLength.map(product => product.product).join(', '));

// 3.Total price of all products that actually have prices
const totalPrice = products
  .filter(product => product.price.trim() !== '') // Get only products with valid prices
  .map(product => Number(product.price)) // Convert prices to numbers
  .reduce((sum, price) => sum + price, 0);
console.log(totalPrice);

// 4.Concatenating all product names into a single string
const concatenatedNames = products.reduce((acc, product) => acc + product.product + ' ', '').trim();
console.log(concatenatedNames);

// 5.Find the highest and lowest prices
const prices = products
  .filter(product => product.price.trim() !== '') // Only products with valid prices
  .map(product => Number(product.price));

const highestPrice = Math.max(...prices);
const lowestPrice = Math.min(...prices);
console.log(`Highest: ${highestPrice}. Lowest: ${lowestPrice}.`);

// 6.Transform products into a new structure with 'name' and 'cost'
const transformedProducts = products.map(({ product, price }) => ({ name: product, cost: price }));
console.log(transformedProducts);
