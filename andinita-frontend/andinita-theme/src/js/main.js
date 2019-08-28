AUI().ready(

	/*
	This function gets loaded when all the HTML, not including the portlets, is
	loaded.
	*/

	function() {
	}
);

Liferay.Portlet.ready(

	/*
	This function gets loaded after each and every portlet on the page.

	portletId: the current portlet's id
	node: the Alloy Node object of the current portlet
	*/

	function(portletId, node) {
	}
);


Liferay.on(
	'allPortletsReady',
	

	function() {
		
		$("body").dblclick(function(){
			$("#ControlMenu").toggle()
		})
	}
);

