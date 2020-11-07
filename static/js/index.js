$(function(){
		// var $order=$('#order');

		$('#final').click(function() {

			if(!$('#prodName').val() || !$('#prodCate').val() || !$('#prodPrice').val() || !$('#prodQuant').val() ){
		// alert("Enter all values");
		swal("Sorry!", "Enter All Values....!", "warning");
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
			swal("Good job!", "Data Added Succesfully!", "success");
					//alert(data["msg"])
					console.log(data)
					window.location="/"

				},
				error: function(xhr) {
					console.log(xhr)
					
				}
			});
});

	});