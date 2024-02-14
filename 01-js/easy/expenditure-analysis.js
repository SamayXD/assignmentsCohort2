/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

// function calculateTotalSpentByCategory(transactions) {
//   final_total = [];
//   list_of_categories = [];
//   temp_list = {category: "",price: 0}
//   let rough = 0
//   for(let i = 0; i<transactions.length; i++){
//     if(!list_of_categories.includes(transactions[i].category)){
//       list_of_categories.push(transactions[i].category)
//     }else{
//         // rough = temp_list.price + transactions[i].price
//         temp_list = {category: transactions[i].category,price: transactions[i].price }
//         final_total.push(temp_list)
//     }
//   }

//   return final_total;
// }
function calculateTotalSpentByCategory(transactions) {
  const categoryTotals = {};

  transactions.forEach(transaction => {
      const { category, price } = transaction;
      if (category in categoryTotals) {
          categoryTotals[category] += price;
      } else {
          categoryTotals[category] = price;
      }
  });

  return Object.entries(categoryTotals).map(([category, totalSpent]) => ({
      category,
      totalSpent,
  }));
}



// console.log(calculateTotalSpentByCategory(sampleinput))
module.exports = calculateTotalSpentByCategory;
