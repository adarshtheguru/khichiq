$(document).ready(function(){var a=new Date,a=($(".copyrightYear").html(a.getFullYear()),$(window).height()),e=$(window).width();$("header").outerHeight();isFloorplan=0,isBrochure=0,$(".banner_ht").css("height",a);for(var s,a=(e-$(".container").width())/2,t=($(".containerleft").css("margin-left",a),$(".goto-home").on("click",function(){$("html,body").animate({scrollTop:0},1e3)}),$(".scroll-next").click(function(){var a=$(this).closest("section").next().offset().top-50;$("html, body").animate({scrollTop:a},1e3)}),992<e&&$(".enq_click, .frmclose").click(function(){$(".form-container").is(":visible")?$(".form-container").slideUp():$(".form-container").slideToggle(),$(".form-container, .frmclose").toggleClass("show")}),$(".menu-icon-mobile").on("click",function(){$(".nav-links").slideToggle(),$(".menu-icon-mobile").toggleClass("active")}),e<=992&&($(".nav-links a").on("click",function(){$(".menu-icon-mobile").trigger("click")}),$(".mob_enq_click, .frmclose").on("click",function(){isBrochure=0,isFloorplan=0,$(".form-container").toggleClass("show")})),$(".nav-links a")),i=$(".nav-links a"),l=(s=e<=700?55:100,[]),r=0;r<t.length;r++){var o=i[r];$(o).hasClass("extLink")||$(o).attr("rel")&&(o=$(o).attr("rel"),l.push(o))}$(window).scroll(function(){var a=$(window).scrollTop(),t=$(window).height(),e=$(document).height();for(r=0;r<l.length;r++){var i=l[r],o=$("#"+i).offset().top,n=$("#"+i).outerHeight();o-s<=a&&a<o-s+n?$("a[rel='"+i+"']").hasClass("active")||$("a[rel='"+i+"']").addClass("active"):$("a[rel='"+i+"']").removeClass("active")}a+t!=e||$(".nav-links a:not(.extLink):last-child").hasClass("active")||(t=$(".active").attr("rel"),$("a[rel='"+t+"']").removeClass("active"),$(".nav-links a:not(.extLink):last-child").addClass("active"))}),$(".nav-links a").on("click",function(){var a,t;$(this).hasClass("extLink")||(a=$(this).attr("rel"),t=e<=700?45:96,$("html,body").animate({scrollTop:$("#"+a).offset().top-t},1e3))}),$(".reviewSlider").slick({dots:!0,arrows:!1,speed:300,slidesToShow:3,centerMode:!0,centerPadding:"130px"});var n=$(window);n.height();n.on("scroll",function(){var t=n.scrollTop(),e=1.02*n.height();$(".revealOnScroll:not(.animated)").each(function(){var a=$(this);a.offset().top<t+e&&(a.data("timeout")?window.setTimeout(function(){a.hasClass("path")?a.addClass(a.data("animation")):a.addClass("animated "+a.data("animation")),a.animate("","slow")},parseInt(a.data("timeout"),10)):a.addClass("animated "+a.data("animation")))})})}),$(window).scroll(function(){$(".lazy").each(function(){$(this).attr("data-src")&&("IMG"==this.tagName||"IFRAME"==this.tagName?$(this).attr("src",$(this).data("src")):$(this).css("background-image","url("+$(this).data("src")+")"),$(this).removeAttr("data-src"))});var a=$(window).scrollTop();50<=a?$("header").addClass("active"):$("header").removeClass("active"),50<=a?$("header").addClass("active"):$("header").removeClass("active")});