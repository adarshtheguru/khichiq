$(document).ready(function(){for(var n,a=new Date,a=($(".copyrightYear").html(a.getFullYear()),$(window).height()),o=$(window).width(),t=($("header").outerHeight(),isFloorplan=0,isBrochure=0,$(".banner_ht").css("height",a),$(".goto-home").on("click",function(){$("html,body").animate({scrollTop:0},1e3)}),$(".scroll-next").click(function(){var a=$(this).closest("section").next().offset().top-50;$("html, body").animate({scrollTop:a},1e3)}),992<o&&$(".enq_click, .frmclose").click(function(){$(".form-container").is(":visible")?$(".form-container").slideUp():$(".form-container").slideToggle(),$(".form-container, .frmclose").toggleClass("show")}),$(".menu-icon-mobile").on("click",function(){$(".nav-links").slideToggle(),$(".menu-icon-mobile").toggleClass("active")}),o<=992&&($(".nav-links a").on("click",function(){$(".menu-icon-mobile").trigger("click")}),$(".mob_enq_click, .frmclose").on("click",function(){isBrochure=0,isFloorplan=0,$(".form-container").toggleClass("show")})),$(".nav-links a")),e=$(".nav-links a"),l=(n=o<=700?55:100,[]),r=0;r<t.length;r++){var s=e[r];$(s).hasClass("extLink")||$(s).attr("rel")&&(s=$(s).attr("rel"),l.push(s))}$(window).scroll(function(){var a=$(window).scrollTop(),t=$(window).height(),o=$(document).height();for(r=0;r<l.length;r++){var e=l[r],s=$("#"+e).offset().top,i=$("#"+e).outerHeight();s-n<=a&&a<s-n+i?$("a[rel='"+e+"']").hasClass("active")||$("a[rel='"+e+"']").addClass("active"):$("a[rel='"+e+"']").removeClass("active")}a+t!=o||$(".nav-links a:not(.extLink):last-child").hasClass("active")||(t=$(".active").attr("rel"),$("a[rel='"+t+"']").removeClass("active"),$(".nav-links a:not(.extLink):last-child").addClass("active"))}),$(".nav-links a").on("click",function(){var a,t;$(this).hasClass("extLink")||(a=$(this).attr("rel"),t=o<=700?45:96,$("html,body").animate({scrollTop:$("#"+a).offset().top-t},1e3))});var i=$(window);i.height();i.on("scroll",function(){var t=i.scrollTop(),o=1.02*i.height();$(".revealOnScroll:not(.animated)").each(function(){var a=$(this);a.offset().top<t+o&&(a.data("timeout")?window.setTimeout(function(){a.hasClass("path")?a.addClass(a.data("animation")):a.addClass("animated "+a.data("animation")),a.animate("","slow")},parseInt(a.data("timeout"),10)):a.addClass("animated "+a.data("animation")))})})}),$(window).scroll(function(){$(".lazy").each(function(){$(this).attr("data-src")&&("IMG"==this.tagName||"IFRAME"==this.tagName?$(this).attr("src",$(this).data("src")):$(this).css("background-image","url("+$(this).data("src")+")"),$(this).removeAttr("data-src"))});var a=$(window).scrollTop();50<=a?$("header").addClass("active"):$("header").removeClass("active"),50<=a?($("header").addClass("active"),$("#comp-logo .brand-logo").addClass("compress-logo"),$(".nav-links").removeClass("set-transform")):($("header").removeClass("active"),$("#comp-logo .brand-logo").removeClass("compress-logo"),$(".nav-links").addClass("set-transform"))});