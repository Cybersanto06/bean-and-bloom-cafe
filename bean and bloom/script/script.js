// This JavaScript file is linked to index.html.
const orderButton = document.getElementById('orderButton');
const orderMessage = document.getElementById('orderMessage');

// The click is an event. The code uses variables, data types and operators.
orderButton.addEventListener('click', function () {
  const customerName = document.getElementById('customerName').value.trim(); // string
  const drink = document.getElementById('drink');
  const quantity = Number(document.getElementById('quantity').value); // number
  const price = Number(drink.value);
  const total = price * quantity; // multiplication operator
  
  // NEW DISCOUNT VARIABLES
  let discount = 0;          // Stores the discount amount
  let finalTotal = total;    // Stores the total after discount
  
  // NEW CONDITION: Applies 10% discount if quantity is 3 or more
  if (quantity >= 3) {
    discount = total * 0.10;  // Calculate 10% discount
    finalTotal = total - discount; // Subtract discount from total
  }
  
  const isValid = customerName !== '' && quantity > 0; // boolean

  if (isValid) {
    const drinkName = drink.options[drink.selectedIndex].text.split(' — ')[0];
    
    // UPDATED MESSAGE with discount information
    if (quantity >= 3) {
      orderMessage.textContent = `Thank you, ${customerName}! You ordered ${quantity} ${drinkName}s. Original total: K${total}. Discount: K${discount.toFixed(2)}. Final total: K${finalTotal.toFixed(2)}.`;
    } else {
      orderMessage.textContent = `Thank you, ${customerName}! Your ${quantity} ${drinkName} order costs K${total}.`;
    }
    
    console.log(`New order: ${customerName}, total K${total}, discount K${discount}`); // console output
  } else {
    orderMessage.textContent = 'Please enter your name and a quantity of at least 1.';
  }
});