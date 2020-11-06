$(function(){
		// var $order=$('#order');

 $('#final').click(function() {
 alert("aaa");	
 // $.ajax({
 // 	type:'GET',
 // 	url:'http://127.0.0.1:5000/list',
 // 	 success: function(data){
 // 	 	alert("yyyyyyyyyyyyy");
 // 	 	alert(data);
 // 	 	//console.log(data)
 // 	 	//$("#myproList").html(data)
	// 			//$('body').append(data);
	// 			window.location="/display"
 // 	 	document.write(data); 
 // 		// $.each(order,function(i,order){
 // 		// $order.append('<li>firstnm: '+order.nm+',lastnm: '+order.nm1+'</li>');
 // 		// });
 // 	}
	// });
	
	input_data = {
		"product_name": $('#nm').val(),
		"category_name": $('#nm1').val(),
		"price": $('#nm2').val(),
		"quantity": $('#nm3').val()
	}
alert(input_data);
	$.ajax({
		url: '/add_data',
		method: "POST",
		processData: false,
		contentType: 'application/json',
		data: JSON.stringify(input_data),
		success: function(data) {

					console.log(data)
						

		},
		error: function(xhr) {
			console.log(xhr)
						// var data = JSON.parse(xhr.responseText);
						// $('#errors').text(data['message']);
						// $('#messageModal').modal('show');
		}
});
});

});