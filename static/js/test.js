function greet(){
	 
        
  
        alert("aaaa")
  
            
            const xhr = new XMLHttpRequest(); 
  
             
            xhr.open("GET",  
"http://127.0.0.1:5000/list"); 
            xhr.onreadystatechange=(e)=>{
            	// if(this.readyState==4&& this.status==200)
            	{
            		alert("Bas gap")
            		console.log(xhr.responseText)
            	}
            }
  
  	xhr.send();
  
  
  
            
             
        
}
