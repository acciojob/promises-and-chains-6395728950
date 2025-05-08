//your JS code here. If required.
  document.getElementById('voteform').addEventListener("submit",function(e){
	  e.preventDefault();
	  const name = document.getElementById('name').value.trim();
	  const age =  parseInt(document.getElementById('age').value);
	  if(name ==='' || age ===''){
		  alert("Please enter valid details");
		  return;
	  }

	  // now your task is create a promise
	  const promise = new Promise((resolve,reject)=>{
		   setTimeout(()=>{
			   if(age>=18){
				   resolve();
			   }else{
				   reject();
			   }
		   },4000);
	  });
	  promise.then(()=>{
		  alert("Welcome,.You can vote.")
	  }).catch(()=>{
		  alert("Oh sorry.You aren't old enough");
	  });
	  
	  
	  
  })

 