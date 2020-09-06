// Portfolio item

const filterContainer = document.querySelector(".portolio-filter"),
    filterBtns = filterContainer.children,
    totalFilterBtfn = filterBtns.length,
portfolioItems = document.querySelectorAll("portfolio-item"),
    totalPortfolioItem = portfolioItems.length;
// console.log(totalPortfolioItem);


for (let i = 0; i < totalFilterBtfn; i++) {
    filterBtns[i].addEventListener("click", function () {
        filterContainer.querySelector(".active").classList.remove("active");
        this.classList.add("active");


        const  filterValue=this.getAttribute("data-filter");
        for (let k = 0; k <totalPortfolioItem; k++) {
            if (filterValue === portfolioItems[k].getAttribute("data-category")) {
                portfolioItems[k].classList.remove("hide");
                portfolioItems[k].classList.add("show");

            } else {
                portfolioItems[k].classList.remove("show");
                portfolioItems[k].classList.add("hide");
            }
            if (filterValue === "all") {
                portfolioItems[k].classList.remove("hide");
                portfolioItems[k].classList.add("show");
            }


        }
    })

}

// Portfolio Lightbox

const lightbox =document.querySelector(".lightbox"),
    lightboxImg=lightbox.querySelector(".lightbox-img"),
    lightboxText=lightbox.querySelector(".caption-text"),
    lightboxCounter=lightbox.querySelector(".caption-counter");

let itemIndex=0;

for (let i = 0; i < totalPortfolioItem; i++) {
    portfolioItems[i].addEventListener("click",function () {
        itemIndex=i;
        chаngeItem();
        toggleLightbox();

    })
}

function toggleLightbox() {
lightbox.classList.toggle("open")

}

function  chаngeItem() {
    imgSrc=portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src")
  lightboxImg.src=imgSrc;
    lightboxText.innerHTML=portfolioItems[itemIndex].querySelector("h4").innerHTML;
    lightboxCounter.innerHTML=(itemIndex)+1+" of "+totalPortfolioItem;
}

