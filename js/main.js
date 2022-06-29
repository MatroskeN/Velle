window.onload = function() {
    // short timeout
    setTimeout(function() {
        window.scrollTo(0,window.scrollY-300);
        console.log('scroll');
    }, 100);
};

//carousel

const swiper = new Swiper('.mainSlider', {
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

const milk = new Swiper('.milk', {
    direction: 'horizontal',
    loop: false,
    centeredSlides: true,
    spaceBetween: 19,

    pagination: {
        el: '.milk_pagination',
        clickable: true,
    },
});
const barista = new Swiper('.barista', {
    direction: 'horizontal',
    loop: false,
    centeredSlides: true,
    spaceBetween: 19,

    pagination: {
        el: '.barista_pagination',
        clickable: true,
    },
});
const drink = new Swiper('.drink', {
    direction: 'horizontal',
    loop: false,
    centeredSlides: true,
    spaceBetween: 19,

    pagination: {
        el: '.drink_pagination',
        clickable: true,
    },
});
const spoon = new Swiper('.spoon', {
    direction: 'horizontal',
    loop: false,
    centeredSlides: true,
    spaceBetween: 19,

    pagination: {
        el: '.spoon_pagination',
        clickable: true,
    },
});
const porridge = new Swiper('.porridge', {
    direction: 'horizontal',
    loop: false,
    centeredSlides: true,
    spaceBetween: 19,

    pagination: {
        el: '.porridge_pagination',
        clickable: true,
    },
});
const dessert = new Swiper('.dessert', {
    direction: 'horizontal',
    loop: false,
    centeredSlides: true,
    spaceBetween: 19,

    pagination: {
        el: '.dessert_pagination',
        clickable: true,
    },
});

const cardSlider = new Swiper('.cardSlider', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,

    // If we need pagination
    pagination: {
        el: '.main-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.next-arrow',
        prevEl: '.prev-arrow',
    }
});
const recipesSlider = new Swiper('.recipesSlider',{
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    centeredSlides: false,

    navigation: {
        nextEl: '.next-recipe',
        prevEl: '.prev-recipe',
    },
    // Responsive breakpoints
    breakpoints: {
        768: {
            slidesPerView: 4,
            centeredSlides: true,
        }
    }
})
const otherSLider = new Swiper('.otherSlider',{
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 21,
    pagination: {
        el: '.other-pagination',
        clickable: true,
    },
    // Responsive breakpoints
    breakpoints: {
        768: {
            slidesPerView: 4,
            spaceBetween: 0
        }
    }
})

let scroll = 0;
$(window).on("scroll", function () {
    scroll = window.pageYOffset || (document.documentElement.clientHeight ? document.documentElement.scrollTop : document.body.scrollTop);
    if (scroll > 130) { // высота банера
        $('header').addClass("scroll-header");
    }
    if (scroll < 130) {
        $('header').removeClass("scroll-header");
    }
});

//parallax

let bg = document.querySelector('.fruits');
window.addEventListener('mousemove', function (e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    bg.style.transform = 'translate(-' + x * 30 + 'px, -' + y * 5 + 'px)';
});
let bg1 = document.querySelector('.fruits1');
window.addEventListener('mousemove', function (e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    bg1.style.transform = 'translate(-' + x * 30 + 'px, -' + y * 5 + 'px)';
});
let bg2 = document.querySelector('.fruits2');
window.addEventListener('mousemove', function (e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    bg2.style.transform = 'translate(-' + x * 30 + 'px, -' + y * 5 + 'px)';
});

//header menu

let count = -1;
let count1 = -1;

$(".popupMenu").mouseover(function () {
    $('.itemPassive').addClass('itemActive')
    $(".headerWrapper").css("background", "#FFFFFF")
    if ($('.aboutPassive').hasClass('aboutActive')) {
        $('.aboutPassive').removeClass('aboutActive')
        $('.aboutPopup').addClass('closedAbout')
    }
})
$(".aboutMenu").mouseover(function (){
    $('.aboutPassive').addClass('aboutActive')
    $('.aboutPopup').removeClass('closedAbout')
    $(".headerWrapper").css("background", "#FFFFFF")
    if ($('.itemPassive').hasClass('itemActive')) {
        $('.itemPassive').removeClass('itemActive')
    }
})

$('main').mouseover(function () {
    if ($('.aboutPassive').hasClass('aboutActive')) {
        $('.aboutPassive').removeClass('aboutActive')
        $('.aboutPopup').addClass('closedAbout')
        // $(".headerWrapper").css("background", "transparent")
    }
    if ($('.itemPassive').hasClass('itemActive')) {
        $('.itemPassive').removeClass('itemActive')
        // $(".headerWrapper").css("background", "transparent")
    }
})

$('.itemEmpty').mouseover(function () {
    if ($('.itemPassive').hasClass('itemActive')) {
        $('.itemPassive').removeClass('itemActive')
        $("header").css("background", "transparent")
    }
    if ($('.aboutPassive').hasClass('aboutActive')) {
        $('.aboutPassive').removeClass('aboutActive')
        $('.aboutPopup').addClass('closedAbout')
        $(".headerWrapper").css("background", "transparent")
    }
})

$(".itemLink").on("click", function () {
    $(".maskPage").css("display", "flex")
})
$(".xclose").on("click", function () {
    $(".maskPage").css("display", "none")
})

$(".burger").on("click", function () {
    $(".mWrapper").css("display", "flex")
    $(".closeBurger").css("display", "block")
    $(".burger").css("display", "none")
})

$(".closeBurger").on("click", function () {
    $(".mWrapper").css("display", "none")
    $(".burger").css("display", "block")
    $(".closeBurger").css("display", "none")
})

let mobCounter = 1;
$(".mobMenuProducts").on("click", function () {
    mobCounter *= -1;
    if (mobCounter == 1) {
        $(".subItems").css("display", "flex")
        $(".mobMenuProducts").addClass("openedItem")
    } else if (mobCounter == -1) {
        $(".subItems").css("display", "none")
        $(".mobMenuProducts").removeClass("openedItem")
    }
})

let mobCounter1 = 1;
$(".mobAboutProducts").on("click", function () {
    mobCounter1 *= -1;
    if (mobCounter1 == 1) {
        $(".subAbout").css("display", "flex")
        $(".mobAboutProducts").addClass("openedItem")
    } else if (mobCounter1 == -1) {
        $(".subAbout").css("display", "none")
        $(".mobAboutProducts").removeClass("openedItem")
    }
})

//filter

$(".lineage").on("click", function () {
    if ($(this).hasClass('active')){
        clearFilter();
    } else {
        $(".item").removeClass('active');
    $(".all-items").removeClass('active');
    $(this).addClass('active');
    let data = this.getAttribute('data-attribute');
    $(".contentItem").show();
    $(".contentBlock").hide();
    $("." + data).show();
    }
})

$(".flavour").on("click", function () {
    if ($(this).hasClass('active')){
        clearFilter();
    } else {
        $(".item").removeClass('active');
        $(this).addClass('active');
        let data = this.getAttribute('data-attribute');
        $(".contentBlock").show();
        $(".contentItem").hide();
        $("." + data).show();
        hideShit(data);
    }
})

function hideShit(data){
    let arr = document.querySelectorAll(".contentBlock");
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].children[1].children.length; j++){
            if (arr[i].children[1].children[j].classList[1] === data){
                count++;
            }
        }
        if (count === 0){
            arr[i].style.display = "none"
        }
        else {
            count = 0;
        }
    }
}

function clearFilter(){
    $(".item").removeClass('active');
    $(".all-items").addClass('active');
    $(".contentBlock").show();
    $(".contentItem").show();
}

$(".all-items").on("click", function () {
    $(".item").removeClass('active');
    $(this).addClass('active');
    $(".contentBlock").show();
    $(".contentItem").show();
})

//mob filter
$('#line').change(function () {
    let data = $(this).val();
    $(".slider").hide();
    $("." + data).show();
    clearFlavour();
    if (data == 'all-items') {
        $(".slider").show();
    }
})
$('#flavour').change(function () {
    let data = $(this).val();
    $(".slider").show();
    $(".swiper-slide").hide();
    $("." + data).show();
    clearLine();
    if (data == 'all-flavours') {
        $(".swiper-slide").show();
    }
})

function clearLine(){
    $("#line option").prop('selected', function() {
        return this.defaultSelected;
    });
}

function clearFlavour(){
    $("#flavour option").prop('selected', function() {
        return this.defaultSelected;
    });
}

function swipeSlide(){
    let anchor = String(document.location.href).split('?');
    let index = anchor[1];
    if (anchor[1]){
        console.log(anchor[1]);
        cardSlider.slideTo(index, 1000, false)
    }
}
swipeSlide();

let clickFilter = () => {
    let data = String(document.location.href).split('#');
    if (data[1]){
        console.log(data[1])
        $("."+data[1]).click();
    }
}

clickFilter();
