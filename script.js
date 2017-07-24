	var mainMenu = document.querySelector('.assort'); 
	var itemActiveClass = 'active-menu-item';
	var menuActiveClass = 'active-sub-menu';
	var itemActive;
	var menuActive;


	mainMenu.addEventListener('click', function(e){


		var nodeClick = e.target;
		var subMenu = e.target.nextElementSibling;
		var closestUl = e.target.closest('.assort-item-in');

		if(closestUl) return;

		if(menuActive){
			menuActive.classList.remove(menuActiveClass);
		}

		if(itemActive){
			itemActive.classList.remove(itemActiveClass);
		}


		if(nodeClick !== itemActive && nodeClick.nextElementSibling.tagName == 'UL'){
			nodeClick.classList.add(itemActiveClass);
			itemActive = nodeClick;

			subMenu.classList.add(menuActiveClass);
			menuActive = subMenu;

		} else {
			menuActive = null;
			itemActive = null;
		}

	});


				// OPEN SIDEBAR


	var sidebar = document.querySelector('.sidebar');
	var buttonSidebar = document.querySelector('.sidebar-mob');

	buttonSidebar.addEventListener('click', function(){

		sidebar.style.display = 'block';
		document.body.style.cssText = 'overflow:hidden';
		buttonSidebar.style.display = 'none';
	});


			// CLOSE SIDEBAR

	var closeSidebar = document.querySelector('.close-sidebar');

	closeSidebar.addEventListener('click', function(){
		sidebar.style.display = '';
		document.body.style.cssText = '';
		buttonSidebar.style.display = '';
	});