// $(document).ready(function(){ //문서준비 이벤트
// 	var menu = $('.main-menu > li');
// 	var subMenu = $('.sub-menu');
// 	var last = $('.sub-menu li:last-child a');
	
// 	//어느 메뉴위에 마우스오버가 되면 그 해당메뉴의 서브메뉴
// 	menu.hover(function(){
// 		$(this).find(subMenu).toggleClass('menu-act');
// 	});
// 	menu.focusin(function(){
// 		$(this).find(subMenu).addClass('menu-act');
// 	});
// 	last.focusout(function(){
// 		$(this).parents('.sub-menu').removeClass('menu-act');
// 	});
// }); //jquery end



// $()
// document 

$(document).ready(function(){
	var menu = $('.main-menu > li');
	var tab = $('.notice-heading, .pds-heading');

	//메인메뉴
	menu.hover(function(){
		$(this).find('.sub-menu').toggleClass('menu-act');
	});
	menu.focusin(function(){
		$(this).siblings().find('.sub-menu').removeClass('menu-act'); //reset
		$(this).find('.sub-menu').addClass('menu-act');
	});

	// $('.box').on('click', function(){
	// 	$(this).toggleClass('box-act');
	// });

	//탭메뉴
	tab.on('click focusin', function(){
		$(this).parent().addClass('board-act').siblings().removeClass('board-act');
	});

	
	
});//jQuery end

//hover는 .on()에 바인딩할수없음, 단일이벤트라서
