const fillQuantity = document.getElementById("quantity");
const cartPage = document.getElementById("cart");
const cartBtn = document.getElementById("cartBtn");
const modal = document.getElementById("modal");
const openSlide = document.getElementById("product-view");
const slideModal = document.getElementById("slide-modal");
const showAmount = document.getElementById("item-amount");
const price = document.getElementById("item-price");
const removeItem = document.getElementById("delete-btn");
const indicator = document.getElementById("indicator");

const addCart = document.getElementById("add-to-cart");

var empty = document.getElementById("empty");
var itemSneakers = document.getElementById("item-sneakers");
var checkOut = document.getElementById("checkout");

function minus() {
    let  quantity = fillQuantity.value;
    if(quantity > 0) {
        quantity = quantity - 1;
        fillQuantity.value = quantity;
    }
}

function plus() {
    let  quantity = fillQuantity.value;
    if(quantity >= 0) {
        quantity = Number(quantity) + Number(1);
        fillQuantity.value = quantity;
    }
}

document.addEventListener("click" , (e)=> {
    if(e.target.id == 'cartBtn' || e.target.id == 'indicator'){
        cartPage.style.display = "flex";
        modal.style.display = "block";
    } if(e.target.id == 'modal'){
        cartPage.style.display = "none";
        modal.style.display = "none";
    } if(e.target.id == 'slide-modal' || e.target.id == 'close-btn') {
        slideModal.style.display = "none";
        slide.style.display = "none";
    }
})

var cart = {};
cart.sneakers = '0'

function updateCart() {
    cart.sneakers = Number(cart.sneakers) + Number(quantity.value);
    showAmount.innerText = cart.sneakers;
    price.innerText = (Number(cart.sneakers) * Number(125)).toFixed(2);
    console.log(price.innerText);
}


addCart.addEventListener("click" , ()=> {

    updateCart();
    if(cart.sneakers >= 1){
        empty.style.display = "none";
        itemSneakers.style.display = "flex";
        checkOut.style.display = "flex";
        indicator.style.display = "flex";
    }else {
        empty.style.display = "";
        itemSneakers.style.display = "none";
        checkOut.style.display = "none";
        indicator.style.display = "none";
    } indicator.innerText = cart.sneakers;
    
})

removeItem.addEventListener("click" , ()=> {
    cart.sneakers = '0';
    indicator.innerText = cart.sneakers;
    empty.style.display = "";
    itemSneakers.style.display = "none";
    checkOut.style.display = "none";
    indicator.style.display = "none";

})

var i = 0;
var preview = [];
    preview[0] = 'images/image-product-1.jpg';
    preview[1] = 'images/image-product-2.jpg';
    preview[2] = 'images/image-product-3.jpg';
    preview[3] = 'images/image-product-4.jpg';

const nextBtn = document.getElementById("next");
const previousBtn = document.getElementById("previous");
var activeSlide = document.getElementById("active-slide");
const slide = document.getElementById("slideshow");

nextBtn.addEventListener("click" , ()=> {
    if(i < 3){
        i++;
    }else {
        i = 0;
    }
    changeImage(i);
})
previousBtn.addEventListener("click" , ()=> {
    if(i <= 0){
        i = 3;
    }else {
        i--;
    }
    changeImage(i);
})

function changeImage(selected) {
    const img0 = document.getElementById("img0");
    const img1 = document.getElementById("img1");
    const img2 = document.getElementById("img2");
    const img3 = document.getElementById("img3");

    i = selected
    if(i == 0) {
        img0.classList.add("active-img");
        img1.classList.remove("active-img");
        img2.classList.remove("active-img");
        img3.classList.remove("active-img");
    }
    if(i == 1) {
        img1.classList.add("active-img");
        img0.classList.remove("active-img");
        img2.classList.remove("active-img");
        img3.classList.remove("active-img");
    }
    if(i == 2) {
        img2.classList.add("active-img");
        img1.classList.remove("active-img");
        img0.classList.remove("active-img");
        img3.classList.remove("active-img");
    }
    if(i == 3) {
        img3.classList.add("active-img");
        img1.classList.remove("active-img");
        img2.classList.remove("active-img");
        img0.classList.remove("active-img");
    }
    activeSlide.src = preview[i];
}
openSlide.addEventListener("click" , ()=> {
    slide.style.display = "flex";
    slideModal.style.display = "block";
})