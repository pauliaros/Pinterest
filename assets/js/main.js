for (var i = 0 ; i<20; i++){
		console.log(pinterest[i].image_url);
		$(".listafotos").append("<div class='listafotitos'> <div class='cont'><img src='dist/img/" + pinterest[i].image_url + "'></div></div>");
		
		console.log(pinterest[i].title);
		$(".listafotos").append("<h4 class='titulo'>" + pinterest[i].title + "</h4>" );
		
		console.log(pinterest[i].description);
		$(".listafotos").append("<h5 class='descripcion'>" + pinterest[i].description + "</h5>");

		console.log(pinterest[i].user);
		$(".listafotos").append("<h6 class='usuario'>" + pinterest[i].user + "</h6>");
		
		console.log(pinterest[i].hashtag);
		$(".listafotos").append("<h6 class='hash'>" + pinterest[i].hashtag + "</h6><br>");
	}


