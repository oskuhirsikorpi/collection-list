
// Suoritetaan funktiot kerran läpi sivun latautuessa (mm. rakentaa automaattisesti tilausluettelon)

window.onload = function () {
    buildProductTable()
    search()  
    buildInfoTable()
    kommentti()
    luoTilaukset()
}


/* TILAUSLISTA */ 

// Function to fetch json file and create a new table row for each order.

async function luoTilaukset(data){
	const response = await fetch('project.json');
	var data = await response.json();

	var tilaukset = document.getElementById('tilaukset');
	

	for (var i = 0; i < data.length; i++){
		var row = `<tr class="tilaus"  onclick=openOrder(this.id) id="${[i]}">
						<td>${data[i].orderid}</td>
						<td>${data[i].customerid}</td>
						<td>${data[i].customer}</td>
						<td>${data[i].respsalesperson}</td>
						<td>${data[i].totalprice}€</td>
				  </tr>`	  
		tilaukset.innerHTML += row;;
	}
}

// Function to save the index of order clicked to localStorage. 

function openOrder(ident){

	localStorage.setItem('arraynum', ident);

	window.open("order.html");
        return false;
}



// TILAUSSIVU


var orderNum = localStorage.getItem('arraynum');

// INFO SECTION OF COLLECTION LIST
async function buildInfoTable(data){
	const response = await fetch('project.json');
	var data = await response.json();
	
	var infoTable = document.getElementById('infoTable'); // JQUERYN AVULLA SYÖTETÄÄN infoTableen alla olevalla loopilla tilauksen tiedot

		
			for (var i = 0; i < 1; i++){
				var row = `<tr>
								<th style="text-align: center;">Tilausnumero: ${data[orderNum].orderid}</th>
							</tr>
                            <hr>
							<tr>
								<th style="text-align: center;">Asiakas: ${data[orderNum].customer}</th>
							</tr>
                            <hr>
							<tr>
								<th style="text-align: center;">Asiakasnumero: ${data[orderNum].customerid}</th>
							</tr>
                            <hr>
							<tr>
								<th style="text-align: center;">Toimitusosoite: ${data[orderNum].delivaddr}</th>
							</tr>
                            <hr>
							<tr>
								<th style="text-align: center;">Toimitusaika: ${data[orderNum].deliverydate}</th>
							</tr>
                            <hr>
							`
				infoTable.innerHTML += row
	}
	}


// ITEMS TO COLLECT ON COLLECTION LIST	
async function buildProductTable(data){

	const response = await fetch('project.json');
	var data = await response.json();

	var productTable = document.getElementById('productTable');

	for (var i = 0; i < data.length; i++){
		var row = `                  
				<tr>
						<td>${data[orderNum].products[i].code}</td>
						<td>${data[orderNum].products[i].suppliercode}</td>
						<td>${data[orderNum].products[i].product}</td>
						<td>${data[orderNum].products[i].description}</td>			
						<td>${data[orderNum].products[i].shelf_pos}</td>
						<td>${data[orderNum].products[i].unit_price + "€"}</td>		
						<td>${data[orderNum].products[i].qty}</td>
				</tr>`
		productTable.innerHTML += row
	}

}

/* HTML2PDF -LIBRARYLLÄ TEHTY PDF TULOSTUSFUNKTIO */

function getPDF(){
    var tulostus = document.getElementById("main");

    var asetukset = {                                             
        margin:         0,
        filename:       "tilaus.pdf",
        image:          { type: "jpeg", quality: 1},
        html2canvas:    { scale: 2},
        jsPDF:          { format: "A4", orientation: "landscape"}
    };

    html2pdf(tulostus, asetukset);
	
}

//Loads customer comment

async function kommentti(data){
	const response = await fetch('project.json');
	var data = await response.json();
	var row = `${data[orderNum].comment}`

	document.getElementById("kommentti").innerHTML += row

}

// SEARCHBAR

//Filters tilaukset based on user input

function search() {
	$(document).ready(function(){
		$("#input").on("keyup", function() { // PÄIVITETÄÄN HAKU AINA KUN NAPPIA ON PAINETTU (ON KEY UP)
		  var value = $(this).val().toLowerCase(); // EI OLE CASE SENSITIVE
		  $("#tilaukset tr").filter(function() {
		  $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1) 
		});
	  });
	});
}

