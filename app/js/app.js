$(document).ready(function(){
		var d = new Date();
		$('.copyrightYear').html(d.getFullYear());

		var winHT = $(window).height();
		var winWD = $(window).width();
		var navHt = $("header").outerHeight();
		// var bannerHt = winHT - navHt;
		var bannerHt = winHT;
		isFloorplan = 0;
		isBrochure = 0;

		$('.banner_ht').css('height', bannerHt);
		// $('.section-first').css('margin-top', navHt)

		var get_custom_margin = winWD - $(".container").width();
		const ovr_mar_left = get_custom_margin / 2;
		$(".containerleft").css("margin-left", ovr_mar_left);
		$(".qrWrapper").css("right", ovr_mar_left);
		// $(".dy-margin-right").css("margin-right", ovr_mar_left)

		// console.log(winHT);
		// if (winWD < 992) {
		// 	$(".home-banner-cont").css("bottom", winHT/25.6);
		// }

		$(".goto-home").on("click", function(){
			$("html,body").animate({
				scrollTop : 0
			}, 1000);
		});

		$(".scroll-next").click(function() {
			var cls = $(this).closest("section").next().offset().top - 50;
			$("html, body").animate({scrollTop: cls}, 1000);
		});

		

		if (winWD > 992) {
			$(".enq_click, .frmclose").click(function() {
				if ($(".form-container").is(':visible')) {
					$(".form-container").slideUp();
				} else {
					$(".form-container").slideToggle();
				}
				$(".form-container, .frmclose").toggleClass("show");
			});

		}

		$(".menu-icon-mobile").on("click", function(){
			$(".nav-links").slideToggle();
			$(".menu-icon-mobile").toggleClass("active");
		});
		
		if(winWD <= 992){
			$(".nav-links a").on("click", function(){
				$(".menu-icon-mobile").trigger("click");
			})

			$(".mob_enq_click, .frmclose").on("click" , function(){
				isBrochure = 0;
				isFloorplan = 0;
				$(".form-container").toggleClass("show");
			});
		}


		var childrenSelector = $(".nav-links a");
		var aChildren = $(".nav-links a"); // find the a children of the list items
		if(winWD <= 700)
			var gap = 55;// $(".header-wrapper").outerHeight(); //Navigation height
		else
			var gap = 100;
		var aArray = []; // create the empty aArray
		for (var i=0; i < childrenSelector.length; i++) {    
			var aChild = aChildren[i];
			if (!$(aChild).hasClass('extLink')) {
				if ($(aChild).attr('rel')) {
					var ahref = $(aChild).attr('rel');
					aArray.push(ahref);
				}
			}
		}
		
		//On Scroll - Add class active to active tab
		$(window).scroll(function(){
			var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
			var windowHeight = $(window).height(); // get the height of the window
			var docHeight = $(document).height();
			for(i=0;i<aArray.length;i++){
				var theID = aArray[i];
				var divPos = $("#"+theID).offset().top; // get the offset of the div from the top of page
				var divHeight = $("#"+theID).outerHeight(); // get the height of the div in question
				if (windowPos >= (divPos - gap) && windowPos < ((divPos - gap) + divHeight)) {
					if (!$("a[rel='" + theID + "']").hasClass("active"))
					{
           	// ga('set', 'page', '/'+theID);
           	// ga('send', 'pageview');
           	$("a[rel='" + theID + "']").addClass("active"); 
          }
	      } 
	      else 
	      {
	       	$("a[rel='" + theID + "']").removeClass("active");
	      }
	   	}	

			//If document has scrolled to the end. Add active class to the last navigation menu
			if(windowPos + windowHeight == docHeight) {
				if (!$(".nav-links a:not(.extLink):last-child").hasClass("active")) {
					var navActiveCurrent = $(".active").attr("rel");
					$("a[rel='" + navActiveCurrent + "']").removeClass("active");
					$(".nav-links a:not(.extLink):last-child").addClass("active");
				}
			}
		});
		
		//On Click
		// $('.nav-links a').on("click", function(){
		// 	if(!$(this).hasClass('extLink')) {
		// 		var href = $(this).attr("rel");
		// 		if(winWD <= 700)
		// 			var gap = 45; // $(".header-wrapper").outerHeight(); //Navigation height
		// 		else
		// 			var gap = 96;
				
		// 		$('html,body').animate({
		// 			scrollTop: $("#"+href).offset().top - gap
		// 		}, 1000);
		// 	}
		// });

		// custom form js begins here 
		$(".open-form, .close-custom").click(function () {

			$(".poptheform").slideToggle()
		});
		$('.clicktoshare').click(function (x) {
			x.preventDefault();
			$('.clicktoshareWraper').hide()
			$('.closingtxtWrapper').css('display', 'flex').fadeOut(5000);

			var copyText = $(this).attr('data-url');

			document.addEventListener('copy', function(e) {
				e.clipboardData.setData('text/plain', copyText);
				e.preventDefault();
			}, true);

			document.execCommand('copy');
		});
	// custom form js ends here 

		// slicks 

		if (winWD > 992) {
			$('.TextSlider').slick({
				slidesToShow:4,
				infinite: false,
				vertical:true,
				asNavFor: '.featureSlider',
				focusOnSelect: true,
				autoplay:true,
				draggable:false,
			});
			$('.featureSlider').slick({
				vertical:true,
				slidesToShow:1,
				autoplay:true,
				arrows:false,
				asNavFor: '.TextSlider',
				focusOnSelect: true,
			});
		}
		$('.reviewSlider').slick({
			dots: true,
			appendDots: '.reviewdots',
			arrows: false,
			infinite: true,
			speed: 300,
			slidesToShow: 3,
			// centerMode: true,
			// centerPadding: "10px",
			responsive: [
				// {
				// 	breakpoint: 1920,
				// 	settings: {
				// 		slidesToShow: 3,
				// 		slidesToScroll: 1,
				// 		centerMode: false,
				// 		centerPadding: "0px",
				// 	}
				// },
				{
					breakpoint: 1025,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						centerMode: false,
						centerPadding: "0px",
					}
				},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						centerMode: false,
						centerPadding: "0px",
					}
				},
				{
					breakpoint: 700,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						centerMode: false,
						centerPadding: "0px",
					}
				}
			]
		  });

		//accordian

		// $('.accordion-list > li > .answer').hide();
		$('.accordion-list > li').click(function() {
		if ($(this).hasClass("active")) {
			$(this).removeClass("active").find(".answer").slideUp();
		} else {
			$(".accordion-list > li.active .answer").slideUp();
			$(".accordion-list > li.active").removeClass("active");
			$(this).addClass("active").find(".answer").slideDown();
		}
		return false;
		});

		// Volatile code for the slider height adjustment


		// Function to adjust slider height dynamically
		function adjustSliderHeight() {
			$('.TextSlider .slick-slide').each(function() {
			if ($(this).hasClass('slick-current')) {
				var currentHeight = $(this).find('.hidedesc').outerHeight();
				$('.TextSlider .slick-list').css('height', currentHeight + 'px');
			}
			});
		}
		  setTimeout(function() {
			// Initial height adjustment
			adjustSliderHeight();
		  }, 500);
		
		  // Adjust height on slide change
		  $('.TextSlider').on('afterChange', function(event, slick, currentSlide) {
			// console.log('afterChange');
			adjustSliderHeight();
		  });
		
		  // Adjust height on window resize
		  $(window).on('resize', function() {
			adjustSliderHeight();
		  });
		  // Volatile code for the slider height adjustment


			/*------------------- animation js----------------------------------------*/

			var $window = $(window),
			win_height_padded = $window.height() * 2;
	  
				$window.on('scroll', revealOnScroll);
			
				function revealOnScroll() {
					var scrolled = $window.scrollTop(),
						win_height_padded = $window.height() * 1.02;
			
					// Showed...
					$(".revealOnScroll:not(.animated)").each(function() {
						var $this = $(this),
							offsetTop = $this.offset().top;
						if (scrolled + win_height_padded > offsetTop) {
							
							if ($this.data('timeout')) {
								
								window.setTimeout(function() {
									if ($this.hasClass("path")) {
										$this.addClass($this.data('animation'));
									} else {
										$this.addClass('animated ' + $this.data('animation'));
									}
									function stopTimer() {
										timer.stop;
									}
									$this.animate("", "slow");
								}, parseInt($this.data('timeout'), 10));
							} else {
								$this.addClass('animated ' + $this.data('animation'));
							}
						}
					});
				}
			// --------------------------------------

	});

	$(window).scroll(function(){
		$(".lazy").each(function(){
			if($(this).attr("data-src")){
				(this.tagName == "IMG" || this.tagName == "IFRAME") ? $(this).attr("src", $(this).data("src")) : $(this).css("background-image", "url("+$(this).data("src")+")");
				$(this).removeAttr("data-src");
			}
		});
		var windscroll = $(window).scrollTop();
		if (windscroll >= 50) {
			$("header").addClass("active");
		}
		else{
			$("header").removeClass("active");
		}

		// TOP NAV ANIMATION ----------------------------------------s------------
	if (windscroll >= 50) {

		$("header").addClass("active");
		// $("#comp-logo .brand-logo").addClass("compress-logo")
		// $(".nav-links").removeClass("set-transform");

	}
	else{
		$("header").removeClass("active");
		// $("#comp-logo .brand-logo").removeClass("compress-logo")
		// $(".nav-links").addClass("set-transform");
	}

	});

