$(document).ready(function(){
	var menu = $('.main-menu > li');
	var subMenu = $('.sub-menu');
	var last = $('.sub-menu li:last-child a');
	
	//어느 메뉴위에 마우스오버가 되면 그 해당메뉴의 서브메뉴
	menu.hover(function(){
		$(this).find(subMenu).toggleClass('menu-act');
	});
	menu.focusin(function(){
		$(this).find(subMenu).addClass('menu-act');
	});
	last.focusout(function(){
		$(this).parents('.sub-menu').removeClass('menu-act');
	});
}); //jquery end
