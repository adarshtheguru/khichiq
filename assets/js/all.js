$(document).ready(function(){var e=new Date,e=($(".copyrightYear").html(e.getFullYear()),$(window).height()),t=$(window).width();$("header").outerHeight();isFloorplan=0,isBrochure=0,$(".banner_ht").css("height",e);for(var n,e=(t-$(".container").width())/2,i=($(".containerleft").css("margin-left",e),$(".goto-home").on("click",function(){$("html,body").animate({scrollTop:0},1e3)}),$(".scroll-next").click(function(){var e=$(this).closest("section").next().offset().top-50;$("html, body").animate({scrollTop:e},1e3)}),992<t&&$(".enq_click, .frmclose").click(function(){$(".form-container").is(":visible")?$(".form-container").slideUp():$(".form-container").slideToggle(),$(".form-container, .frmclose").toggleClass("show")}),$(".menu-icon-mobile").on("click",function(){$(".nav-links").slideToggle(),$(".menu-icon-mobile").toggleClass("active")}),t<=992&&($(".nav-links a").on("click",function(){$(".menu-icon-mobile").trigger("click")}),$(".mob_enq_click, .frmclose").on("click",function(){isBrochure=0,isFloorplan=0,$(".form-container").toggleClass("show")})),$(".nav-links a")),a=$(".nav-links a"),l=(n=t<=700?55:100,[]),r=0;r<i.length;r++){var s=a[r];$(s).hasClass("extLink")||$(s).attr("rel")&&(s=$(s).attr("rel"),l.push(s))}function o(){$(".TextSlider .slick-slide").each(function(){var e;$(this).hasClass("slick-current")&&(e=$(this).find(".hidedesc").outerHeight(),$(".TextSlider .slick-list").css("height",e+"px"))})}$(window).scroll(function(){var e=$(window).scrollTop(),i=$(window).height(),t=$(document).height();for(r=0;r<l.length;r++){var a=l[r],s=$("#"+a).offset().top,o=$("#"+a).outerHeight();s-n<=e&&e<s-n+o?$("a[rel='"+a+"']").hasClass("active")||$("a[rel='"+a+"']").addClass("active"):$("a[rel='"+a+"']").removeClass("active")}e+i!=t||$(".nav-links a:not(.extLink):last-child").hasClass("active")||(i=$(".active").attr("rel"),$("a[rel='"+i+"']").removeClass("active"),$(".nav-links a:not(.extLink):last-child").addClass("active"))}),$(".nav-links a").on("click",function(){var e,i;$(this).hasClass("extLink")||(e=$(this).attr("rel"),i=t<=700?45:96,$("html,body").animate({scrollTop:$("#"+e).offset().top-i},1e3))}),$(".TextSlider").slick({slidesToShow:4,infinite:!1,vertical:!0,asNavFor:".featureSlider",focusOnSelect:!0,autoplay:!1,draggable:!1}),$(".featureSlider").slick({vertical:!0,slidesToShow:1,autoplay:!0,arrows:!1,asNavFor:".TextSlider",focusOnSelect:!0}),$(".reviewSlider").slick({dots:!0,appendDots:".reviewdots",arrows:!1,infinite:!0,speed:300,slidesToShow:3,responsive:[{breakpoint:1920,settings:{slidesToShow:3,slidesToScroll:1,centerMode:!1,centerPadding:"0px"}},{breakpoint:1600,settings:{slidesToShow:3,slidesToScroll:1,centerMode:!1,centerPadding:"0px"}},{breakpoint:992,settings:{slidesToShow:2,slidesToScroll:1,centerMode:!1,centerPadding:"0px"}},{breakpoint:700,settings:{slidesToShow:1,slidesToScroll:1,centerMode:!1,centerPadding:"0px"}}]}),$(".accordion-list > li > .answer").hide(),$(".accordion-list > li").click(function(){return $(this).hasClass("active")?$(this).removeClass("active").find(".answer").slideUp():($(".accordion-list > li.active .answer").slideUp(),$(".accordion-list > li.active").removeClass("active"),$(this).addClass("active").find(".answer").slideDown()),!1}),setTimeout(function(){o()},100),$(".TextSlider").on("afterChange",function(e,i,t){o()}),$(window).on("resize",function(){o()});var c=$(window);c.height();c.on("scroll",function(){var i=c.scrollTop(),t=1.02*c.height();$(".revealOnScroll:not(.animated)").each(function(){var e=$(this);e.offset().top<i+t&&(e.data("timeout")?window.setTimeout(function(){e.hasClass("path")?e.addClass(e.data("animation")):e.addClass("animated "+e.data("animation")),e.animate("","slow")},parseInt(e.data("timeout"),10)):e.addClass("animated "+e.data("animation")))})})}),$(window).scroll(function(){$(".lazy").each(function(){$(this).attr("data-src")&&("IMG"==this.tagName||"IFRAME"==this.tagName?$(this).attr("src",$(this).data("src")):$(this).css("background-image","url("+$(this).data("src")+")"),$(this).removeAttr("data-src"))});var e=$(window).scrollTop();50<=e?$("header").addClass("active"):$("header").removeClass("active"),50<=e?$("header").addClass("active"):$("header").removeClass("active")});