const formElement = document.getElementById("saveTransaction");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  let transactionDescription = document.getElementById("transactionDescription").value;
  let transactionPrice = document.getElementById("transactionPrice").value;
  
  let transaction = { transactionDescription: transactionDescription, transactionPrice: transactionPrice};
  let transactionJson = JSON.stringify(transaction)

  // to Back
  fetch('http://localhost:3000/transactions', {
    method: 'Post',
    body: transactionJson
  })
})

fetch('http://localhost:3000/transactions').then(e => e.json()).then(console.log)