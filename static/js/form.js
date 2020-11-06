$(document).ready(function() {

    // process the form
    $('form').submit(function(event) {

       
        var formData = {
            'name'              : $('input[name=name]').val(),
            'email'             : $('input[name=email]').val(),
            'superheroAlias'    : $('input[name=superheroAlias]').val()
        };

        
        $.ajax({
            type        : 'POST', 
            url         : 'process.php',
            data        : formData, 
            dataType    : 'json', 
                        encode          : true
        })
           
            .done(function(data) {

               
                console.log(data);

               
            });

        
        event.preventDefault();
    });

});