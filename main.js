const button = document.querySelector('.button')


function fetchfunction() {
	fetch(("https://v2.jokeapi.dev/joke/Any"))
	.then(response => {
		return response.json();
	})
	.then(data => {
		console.log(data);
		displayjokes(data);
	})
	.catch(err => {

	});
}


function displayjokes(data){
	const text = document.getElementById('demo');

	  const joke = data.joke;
	  const delivery = data.delivery;
	  const setup = data.setup;

	  if(joke){
		  text.innerText = joke
	  }else{
		text.innerText = [delivery && setup]	  
	  }
}

function submitAction(data) {
	fetchfunction()
}	


button.addEventListener('click', submitAction);