// const addproduct = () =>{
//        const productField = document.getElementById("Product-Name")
//        const quantityField = document.getElementById("Product-Quantity");
//        const product = productField.value;
//        const quantity = quantityField.value;
//        productField.value = "";
//        quantityField.value = "";
//        displayProduct(product, quantity)
//        saveProductToLocalStorage(product, quantity)
// }
// const displayProduct = (product, quantity) =>{
//        const ul = document.getElementById("product-Container")
//        const li = document.createElement("li")
//        li.innerText = `${product} : ${quantity}`
//        ul.appendChild(li);
// }
// const getStoredShoppingCard = () =>{
//        let card = {};
//        const storedCard = localStorage.getItem("card")
//        if(storedCard){
//               card = JSON.parse(storedCard)
//        }
//        return card;
// }
// const saveProductToLocalStorage = (product, quantity) =>{
//        const card = getStoredShoppingCard();
//        card[product] = quantity;
//        const stringFied = JSON.stringify(card);
//        localStorage.setItem("card", stringFied)
// }
// const displayProductsFromLocalStorage = () =>{
//        const savedCard = getStoredShoppingCard();
//        console.log(savedCard)
//        for(product in savedCard){
//               const quantity = savedCard[product]
//               console.log(product, quantity)
//               displayProduct(product, quantity)
//        }
// }
// displayProductsFromLocalStorage()