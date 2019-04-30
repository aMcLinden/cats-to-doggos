// content.js
let net;
async function app() {
	net = await mobilenet.load();
	for(var i = 0; i< document.images.length; i++){
	try {
	const image = document.images[i];
	const result = await net.classify(image);

	if (result[0]['className'].includes("cat") || result[1]['className'].includes("cat") || result[2]['className'].includes("cat")) {
		// document.images[i].style.visibility = "hidden";
		
		fetch('https://dog.ceo/api/breeds/image/random')
		.then(
		function(response) {
			if (response.status !== 200) {
				console.log('Looks like there was a problem. Status Code: ' +
				response.status);
			return;
		}

		// Examine the text in the response
		response.json().then(function(data) {
			let url = data['message']
			document.images[i].src=url;
			console.log(url)
		});
		}
		)
		.catch(function(err) {
			console.log('Fetch Error :-S', err);
		});
		
		}
	else {
		console.log(result[0]['className'] + result[1]['className'] + result[2]['className'])
	}
	}
	catch(err) {
		console.log(err);
		}
	}
}


app();


