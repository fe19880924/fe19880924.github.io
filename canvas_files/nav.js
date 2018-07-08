(function() {

	var bodyEl = document.body,
		content = document.querySelector( '.content_box','.content_box2','.content_box3' ),
		openbtn = document.getElementById( 'open_btn' ),
		closebtn = document.getElementById( 'close_btn' ),
		isOpen = false;

	function init() {
		initEvents();
	}

	function initEvents() {
		openbtn.addEventListener( 'click', toggleMenu );
		if( closebtn ) {
			closebtn.addEventListener( 'click', toggleMenu );
		}

		// close the menu element if the target it´s not the menu element or one of its descendants..
		content.addEventListener( 'click', function(ev) {
			var target = ev.target;
			if( isOpen && target !== openbtn ) {
				toggleMenu();
			}
		} );
	}

	function toggleMenu() {
		if( isOpen ) {
			classie.remove( bodyEl, 'show_nav' );
		}
		else {
			classie.add( bodyEl, 'show_nav' );
		}
		isOpen = !isOpen;
	}

	init();

})();

