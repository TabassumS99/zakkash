$(function(){$(".counter").counterUp({time:1e3}),$(".banner-active").slick({slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:5e3,dots:!0,arrows:!0,prevArrow:'<b><i class="fas fa-long-arrow-alt-left l-a"></i></b>',nextArrow:'<b><i class="fas fa-long-arrow-alt-right r-a"></i></b>',responsive:[{breakpoint:786,settings:{arrows:!1,dots:!1}},{breakpoint:480,settings:{arrows:!1,dots:!1}}]}),$(".slider-for").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,asNavFor:".team-slider"}),$(".team-slider").slick({centerMode:!0,centerPadding:"0",slidesToShow:5,slidesToScroll:1,asNavFor:".slider-for",autoplay:!0,autoplaySpeed:2e3,focusOnSelect:!1,arrows:!0,prevArrow:'<b><i class="fas fa-long-arrow-alt-left l-a"></i></b>',nextArrow:'<b><i class="fas fa-long-arrow-alt-right r-a"></i></b>',responsive:[{breakpoint:1024,settings:{slidesToShow:4}},{breakpoint:786,settings:{slidesToShow:3,slidesToScroll:3,infinite:!1,dots:!1}},{breakpoint:480,settings:{slidesToShow:2,slidesToScroll:1}}]}),$(".single-item").slick({autoplay:!0,autoplaySpeed:2e3,dots:!1,arrows:!1,infinite:!0}),$(".multiple-items").slick({infinite:!0,slidesToShow:3,slidesToScroll:3,autoplay:!0,autoplaySpeed:2e3,dots:!1,prevArrow:'<b><i class="fas fa-angle-left l-a"></i></b>',nextArrow:'<b><i class="fas fa-angle-right r-a"></i></b>',responsive:[{breakpoint:1024,settings:{slidesToShow:2}},{breakpoint:786,settings:{slidesToShow:1}},{breakpoint:480,settings:{slidesToShow:1,arrows:!1}}]}),$(".logo-active").slick({infinite:!0,slidesToShow:5,arrows:!1,autoplay:!0,autoplaySpeed:2e3,dots:!1,slidesToScroll:3,responsive:[{breakpoint:1024,settings:{slidesToShow:4}},{breakpoint:786,settings:{slidesToShow:3}},{breakpoint:480,settings:{slidesToShow:2}}]}),$("[data-background]").each(function(){$(this).css("background-image","url("+$(this).attr("data-background")+")")}),$(window).on("scroll",function(){$(window).scrollTop()>350?$(".top").fadeIn(650):$(".top").fadeOut(650)}),$(".top").on("click",function(){$("html,body").animate({scrollTop:0},400)}),$("#bar1").barfiller({barColor:"#EE5020",tooltip:!0}),$("#bar2").barfiller({barColor:"#EE5020"}),$("#bar3").barfiller({barColor:"#EE5020"}),$("#bar4").barfiller({barColor:"#EE5020"});var o=$(".work-active").isotope({itemSelector:".grid-item",percentPosition:!0,layoutMode:"fitRows",masonry:{columnWidth:500}});$(".work-menu").on("click","button",function(){var e=$(this).attr("data-filter");o.isotope({filter:e})});var e=$(".header-area").height()-10;$(".menu ul").onePageNav({currentClass:"active",scrollOffset:e}),$("#sticker").sticky(),$(window).scroll(function(){$(window).scrollTop()>1?$(".header-area").addClass("black"):$(".header-area").removeClass("black")})});