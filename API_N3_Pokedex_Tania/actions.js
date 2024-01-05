async function funsion() {
	for(i = 1; i < 151; i++){
		const config = {headers: {Accept: 'application/json'}}
		const res = await fetch('https://pokeapi.co/api/v2/pokemon/' + i, config);
		const data = await res.json();

		/*Div del card*/
		var carddiv = document.createElement('div');
		carddiv.className = 'pokemon';
		carddiv.style.backgroundColor = colors[data.types[0].type.name];
		document.getElementById('poke-container').appendChild(carddiv);

		/*Div de la imagen*/
		var cardimg = document.createElement('div');
		cardimg.className = 'img-container';
		carddiv.appendChild(cardimg);

		/*Imagen del avatar*/
		var imgcard = document.createElement('img');
		imgcard.src = data.sprites.other["official-artwork"].front_default;
		cardimg.appendChild(imgcard);

		/*Div info*/
		var divinfo = document.createElement('div');
		divinfo.className = 'info';
		carddiv.appendChild(divinfo);

		/*Div span numero*/
		var spannum = document.createElement('span');
		spannum.className = 'number';
		spannum.innerHTML = '#' + ('000'+data.id).slice(-3);
		divinfo.appendChild(spannum);

		/*Div span info*/
		var spannombre = document.createElement('h3');
		spannombre.className = 'name';
		spannombre.innerHTML = data.name[0].toUpperCase() + data.name.slice(1);
		divinfo.appendChild(spannombre);

		/*Div span info*/
		var spantipo = document.createElement('small');
		spantipo.className = 'type';
		spantipo.innerHTML = 'Type: ' + data.types[0].type.name;
		divinfo.appendChild(spantipo);

	}
}
	
///////////////////////////////////////////////////////////////////////////////

//const poke_container = document.getElementById('poke-container')
//const pokemon_count = 150
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
}