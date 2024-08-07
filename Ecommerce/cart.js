// sub = document.querySelector('button')
// function chi(){
// if (sub.innerText === "Subscribe") {
// sub.innerText = "Unsubsribe"
// }
// else{sub.innerText = "Subscribe"}
// }


// var cart = document.querySelector('.btn');

// function addToo(){
//     if(cart.innerText == "Add to Cart"){
//         cart.innerText = "cart Added"
//     }
//     else{
//         cart.innerText = "Add to Cart"
//     }
// }

// gdg = document.querySelector('.btn')
// function ccc(){
//     if (gdg.innerText === "Add to Cart") {
//         gdg.innerText = "cart Added"
//     }
//     else{gdg.innerText = "Add to Cart"}
//     }
let addToCartButton = document.getElementsByClassName('btn-primary');
for(let i = 0; i <addToCartButton.length; 1++ ){
    addToCartButton[i].addEventListener('click', addToCart)
}
function addToCart(cli){
let btn = cli.target
let btn_parent = btn_parentElement
let btn_grandparent = btn_parentElement.btn_parentElement
let ItemName = btn_parent.children[0]
let ItemPrice = btn_parent.children[1]
let ItemImage = btn_grandparent.children[0].src
let itemContainer = document.createElement(tr)

}