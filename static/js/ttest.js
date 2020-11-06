$(function(){
	var $order=$('#order');

 $('#final').click(function() {
 alert("aaa");	
 $.ajax({
 	type:'GET',
 	url:'http://127.0.0.1:5000/temp',
 	 success: function(order){
 	 	alert("Bbb");
 		$.each(order,function(i,order){
 		$order.append('<li>firstnm: '+order.nm+',lastnm: '+order.nm1+'</li>');
 		});
 	}
 });
});

});