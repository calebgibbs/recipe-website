$(document).ready(function(){
	$('.control').click(function(){
		$(this).next('.topic').slideToggle({"display" : "block"});
	});
}); 

console.log("hi");