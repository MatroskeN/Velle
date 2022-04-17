const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.next-arrow',
        prevEl: '.prev-arrow',
    },
});
const gallery = new Swiper('.gallery', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.next-gallery',
        prevEl: '.prev-gallery',
    },
});

let scroll = 0;
$(window).on("scroll", function(){
    scroll = window.pageYOffset || (document.documentElement.clientHeight ? document.documentElement.scrollTop : document.body.scrollTop);
    if (scroll > 130) { // высота банера
        $('header').addClass("scroll-header");
    }
    if (scroll < 130){
        $('header').removeClass("scroll-header");
    }
});

//parallax
let bg = document.querySelector('.fruits');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    bg.style.transform = 'translate(-' + x * 30 + 'px, -' + y * 5 + 'px)';
});
let bg1 = document.querySelector('.fruits1');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    bg1.style.transform = 'translate(-' + x * 30 + 'px, -' + y * 5 + 'px)';
});
let bg2 = document.querySelector('.fruits2');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    bg2.style.transform = 'translate(-' + x * 30 + 'px, -' + y * 5 + 'px)';
});

let count = -1;
let count1 = -1;
$(".popupMenu").mouseover(function (){
    if ($('.itemPassive').hasClass('itemActive')){
        $('.itemPassive').removeClass('itemActive')
        $("header").css("background", "transparent")
    } else {
        $('.itemPassive').addClass('itemActive')
        $("header").css("background", "#FFFFFF")
        if($('.aboutPassive').hasClass('aboutActive')){
            $('.aboutPassive').removeClass('aboutActive')
            $('.aboutPopup').addClass('closedAbout')
        }
    }
})
$(".aboutMenu").mouseover(function (){
    if ($('.aboutPassive').hasClass('aboutActive')){
        $('.aboutPassive').removeClass('aboutActive')
        $('.aboutPopup').addClass('closedAbout')
        $("header").css("background", "transparent")
    } else {
        $('.aboutPassive').addClass('aboutActive')
        $('.aboutPopup').removeClass('closedAbout')
        $("header").css("background", "#FFFFFF")
        if($('.itemPassive').hasClass('itemActive')){
            $('.itemPassive').removeClass('itemActive')
        }
    }
})

$('main').mouseover(function (){
    if ($('.aboutPassive').hasClass('aboutActive')){
        $('.aboutPassive').removeClass('aboutActive')
        $('.aboutPopup').addClass('closedAbout')
        $("header").css("background", "transparent")
    }
    if($('.itemPassive').hasClass('itemActive')){
        $('.itemPassive').removeClass('itemActive')
        $("header").css("background", "transparent")
    }
})

$('.itemEmpty').mouseover(function (){
    if($('.itemPassive').hasClass('itemActive')){
        $('.itemPassive').removeClass('itemActive')
        $("header").css("background", "transparent")
    }
    if($('.aboutPassive').hasClass('aboutActive')){
        $('.aboutPassive').removeClass('aboutActive')
        $('.aboutPopup').addClass('closedAbout')
        $("header").css("background", "transparent")
    }
})

$(".itemLink").on("click", function (){
$(".maskPage").css("display", "flex")
})
$(".xclose").on("click", function (){
    $(".maskPage").css("display", "none")
})

$(".burger").on("click", function (){
    $(".mWrapper").css("display", "flex")
    $(".closeBurger").css("display", "block")
    $(".burger").css("display", "none")
})

$(".closeBurger").on("click", function (){
    $(".mWrapper").css("display","none")
    $(".burger").css("display", "block")
    $(".closeBurger").css("display", "none")
})

let mobCounter = 1;
$(".mobMenuProducts").on("click", function (){
    mobCounter*=-1;
    if (mobCounter == 1){
        $(".subItems").css("display","flex")
        $(".mobMenuProducts").addClass("openedItem")
    } else if (mobCounter == -1){
        $(".subItems").css("display","none")
        $(".mobMenuProducts").removeClass("openedItem")
    }
})

let mobCounter1 = 1;
$(".mobAboutProducts").on("click", function (){
    mobCounter1*=-1;
    if (mobCounter1 == 1){
        $(".subAbout").css("display","flex")
        $(".mobAboutProducts").addClass("openedItem")
    } else if (mobCounter1 == -1){
        $(".subAbout").css("display","none")
        $(".mobAboutProducts").removeClass("openedItem")
    }
})



