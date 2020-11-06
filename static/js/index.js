$(function(){
		// var $order=$('#order');

 $('#final').click(function() {
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
	if(!$('#prodName').val() || !$('#prodCate').val() || !$('#prodPrice').val() || !$('#prodQuant').val() ){
		alert("Enter all values");
		return 0;
	}

	input_data = {
		"product_name": $('#prodName').val(),
		"category_name": $('#prodCate').val(),
		"price": $('#prodPrice').val(),
		"quantity": $('#prodQuant').val()
	}

	$.ajax({
		url: '/add_data',
		method: "POST",
		processData: false,
		contentType: 'application/json',
		data: JSON.stringify(input_data),
		success: function(data) {
					alert(data["msg"])
					console.log(data)
					window.location="/display"

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