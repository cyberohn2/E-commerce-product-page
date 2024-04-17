
// THE BASKET
let cart = document.getElementById("cart");
let finalPrice = document.getElementById("final-price");
finalPrice = Number(finalPrice);
let numberOfItem = document.getElementById("item-no");
let totalPrice = document.getElementById("total");
let deleteItem =document.getElementById("delete");
let checkoutBTN = document.getElementById("checkout-btn");
let cartDetails = document.getElementById("cart-details");
let emptyMessage = document.getElementById("empty-message");
let cartSummary = document.querySelector('.cart-summary');
let increase = document.getElementById("plus");
let decrease = document.getElementById("minus");
let itemNumber = document.getElementById("item-number");
let addToCart = document.getElementById("add-to-cart");
let countItem = 0;

increase.addEventListener('click', () => {countItem +=1;
    itemNumber.innerHTML = countItem;
});

decrease.addEventListener('click', () => {
    if(countItem <= 0){
    itemNumber.innerHTML = 0;
    }else{
        countItem -=1;
        itemNumber.innerHTML = countItem;
    }
});

    addToCart.addEventListener('click', 
    () => {
        if(itemNumber.innerHTML == 0){
            cartSummary.style.display = "block";
            emptyMessage.style.display = "block";
            emptyMessage.innerHTML = "please add an item";
            checkoutBTN.style.display = "block";
            checkoutBTN.innerHTML = "close";
        }else{
        cartSummary.style.display = "block";
        cartDetails.style.display = "flex";
        checkoutBTN.style.display = "block";
        emptyMessage.style.display = "none";
        emptyMessage.innerHTML = "Your cart is empty.";
        numberOfItem.innerHTML = itemNumber.innerHTML;
        totalPrice.innerHTML = `$${125*numberOfItem.innerHTML}`;}
    }

);

cart.addEventListener('click', () => {
    cartSummary.style.display = "block";
})

checkoutBTN.addEventListener('click', 

() => {
    cartSummary.style.display = "none";
});

deleteItem.addEventListener('click', () => {
    cartDetails.style.display = "none";
    emptyMessage.style.display = "block";
    checkoutBTN.innerHTML = "close";
});

//SWITCHING THE BIG DISPLAY IMAGE
let bigImage = document.getElementById("big-image");
let thumbNail1 = document.getElementById("image1");
let thumbNail2 = document.getElementById("image2");
let thumbNail3 = document.getElementById("image3");
let thumbNail4 = document.getElementById("image4");
let thumbNails = [thumbNail1, thumbNail2, thumbNail3, thumbNail4];

thumbNails.forEach(changeBigImage);


function changeBigImage (element) {
    element.addEventListener('click', () => {
        let indexOf = thumbNails.indexOf(element);
        bigImage.style.background = `url("image-product-${indexOf}.jpg")`;
        bigImage.style.backgroundRepeat = "no-repeat";
        bigImage.style.backgroundPosition = "center";
        bigImage.style.backgroundSize = "cover";
        element.style.opacity = ".7";
        element.style.border = "2px solid var(--Orange)";
        
    });
}




//THE LIGHTBOX(LB)
let lightBox = document.querySelector('.lightbox');
let previousButton = document.getElementById("previous-btn");
let nextButton = document.getElementById("next-btn");
let closeButton = document.getElementById("close-btn");
let LBbigImage = document.querySelector('.big-image');
let LBthumbNail1 = document.getElementById('lightbox-image1');
let LBthumbNail2 = document.getElementById('lightbox-image2');
let LBthumbNail3 = document.getElementById('lightbox-image3');
let LBthumbNail4 = document.getElementById('lightbox-image4');
let LBthumbNail = [LBthumbNail1, LBthumbNail2, LBthumbNail3, LBthumbNail4];



thumbNails.forEach(displayLB);
function displayLB (element) {
element.addEventListener('dblclick', () => {
    lightBox.style.display = "flex";
});
}
let nextImage = 1;

nextButton.addEventListener('click', () => {
    
    if(nextImage > 3 ){
        LBbigImage.style.background = `url("image-product-3.jpg")`;
        LBbigImage.style.backgroundRepeat = "no-repeat";
        LBbigImage.style.backgroundPosition = "center";
        LBbigImage.style.backgroundSize = "cover";
        nextImage = 3;
    }else{
        nextImage += 1;
        LBbigImage.style.background = `url("image-product-${nextImage}.jpg")`;
        LBbigImage.style.backgroundRepeat = "no-repeat";
        LBbigImage.style.backgroundPosition = "center";
        LBbigImage.style.backgroundSize = "cover";
    }
    
});

previousButton.addEventListener('click', () => {
    if(nextImage < 0 ){
        LBbigImage.style.background = `url("image-product-0.jpg")`;
        LBbigImage.style.backgroundRepeat = "no-repeat";
        LBbigImage.style.backgroundPosition = "center";
        LBbigImage.style.backgroundSize = "cover";
        nextImage = 1;
    }else{
        nextImage -= 1;
        LBbigImage.style.background = `url("image-product-${nextImage}.jpg")`;
        LBbigImage.style.backgroundRepeat = "no-repeat";
        LBbigImage.style.backgroundPosition = "center";
        LBbigImage.style.backgroundSize = "cover";
    }
    
});

closeButton.addEventListener('click', () => {
    lightBox.style.display = "none"
});

LBthumbNail.forEach(changeLBbigImage);

function changeLBbigImage (element) {
    element.addEventListener('click', () => {
        let indexOf = LBthumbNail.indexOf(element);
        LBbigImage.style.background = `url("image-product-${indexOf}.jpg")`;
        LBbigImage.style.backgroundRepeat = "no-repeat";
        LBbigImage.style.backgroundPosition = "center";
        LBbigImage.style.backgroundSize = "cover";
        element.style.opacity = ".7";
        element.style.border = "2px solid var(--Orange)";
        
    });
};


// MOBILE STATE

let menu = document.getElementById("menu");
let mobileLB = document.querySelector('.mobile-lightbox');
let menuClose = document.getElementById("close-menu");

menu.addEventListener('click', () => {
    mobileLB.style.visibility = "visible";
    mobileLB.style.pointerEvent = "unset";
    menuClose.style.visibility = "visible";
    menuClose.style.display = "block";
});

menuClose.parentElement.addEventListener('click', () => {
    mobileLB.style.visibility = "hidden";
    mobileLB.style.pointerEvent = "none";
});