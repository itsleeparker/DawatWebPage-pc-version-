var menubtn = $(".menu-card-btn");
var chefCard = $(".chef-card");
const menu = $("#menu");
const menuList = $("#menu-list>li>a");
//disable the contact us bar 
$(document).ready(function () {
    menuList.addClass("light-text");
});


$(window).scroll(function () { 
    var scroll = $(window).scrollTop();
    const contactBar = $("#contact-us");
    
    menuList.addClass("light-text");
    if(scroll == 0){
        contactBar.css("display" , "flex");
        $("#main-logo").attr("src", "images/main_logo.png");
        menu.removeClass("light-bar");
        menuList.addClass("light-text");
    }
    else if(scroll > 200){
        contactBar.css("display" , "none");
        menu.addClass("light-bar");
        $("#main-logo").attr("src", "images/main_logo_black.png");
        menuList.removeClass("light-text");
        menuList.addClass("dark-text");
    }
});



//wap for menu display section here 
menubtn.click(function (e) { 
    var clickedbtn = $(this).text();
    $("."+clickedbtn).toggle(".active-flex");
    $(".menu-card-items").removeClass(".active-flex").not(this);
});

//display chef contact 
chefCard.hover(function () {
        // over
        var chef = $(this).attr("id");
        $("#"+chef+">div>div").removeClass("non-active");
    }, function () {
        // out;
       var chef = $(this).attr("id");
        $("#"+chef+">div>div").addClass("non-active");
    }
);