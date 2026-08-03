const eventos = [

{
fecha:"Siglo XV a.C.",
titulo:"Código de Hammurabi",
pensador:"Civilización Babilónica",
descripcion:"Uno de los primeros códigos legales escritos de la historia.",
idea:"La justicia debía aplicarse de manera proporcional mediante leyes establecidas.",
imagen:"img/01.jpg"
},

{
fecha:"Siglo VI a.C.",
titulo:"Confucianismo",
pensador:"Confucio",
descripcion:"Desarrolló una ética basada en el respeto y la armonía social.",
idea:"La virtud nace del deber, el respeto y la educación moral.",
imagen:"img/02.jpg"
},

{
fecha:"470-399 a.C.",
titulo:"Sócrates",
pensador:"Sócrates",
descripcion:"Padre de la ética occidental.",
idea:"El conocimiento conduce al bien y la virtud.",
imagen:"img/03.jpg"
},

{
fecha:"427-347 a.C.",
titulo:"Platón",
pensador:"Platón",
descripcion:"La justicia es la armonía del alma.",
idea:"El bien supremo guía la conducta humana.",
imagen:"img/04.jpg"
},

{
fecha:"384-322 a.C.",
titulo:"Aristóteles",
pensador:"Aristóteles",
descripcion:"Fundó la ética de la virtud.",
idea:"La felicidad se alcanza mediante el equilibrio y la virtud.",
imagen:"img/05.jpg"
},

{
fecha:"341-270 a.C.",
titulo:"Epicuro",
pensador:"Epicuro",
descripcion:"La felicidad consiste en evitar el sufrimiento.",
idea:"El placer moderado conduce a una vida buena.",
imagen:"img/06.jpg"
},

{
fecha:"Siglo III a.C.",
titulo:"Estoicismo",
pensador:"Zenón de Citio",
descripcion:"Escuela filosófica griega.",
idea:"La virtud es vivir conforme a la razón y aceptar el destino.",
imagen:"img/07.jpg"
},

{
fecha:"354-430",
titulo:"San Agustín",
pensador:"San Agustín",
descripcion:"Integra el cristianismo con la filosofía clásica.",
idea:"El bien proviene de Dios.",
imagen:"img/08.jpg"
},

{
fecha:"1225-1274",
titulo:"Santo Tomás de Aquino",
pensador:"Tomás de Aquino",
descripcion:"Une la filosofía aristotélica con el cristianismo.",
idea:"Ley natural como fundamento moral.",
imagen:"img/09.jpg"
},

{
fecha:"1588-1679",
titulo:"Thomas Hobbes",
pensador:"Thomas Hobbes",
descripcion:"Ética basada en el contrato social.",
idea:"El Estado garantiza el orden moral.",
imagen:"img/10.jpg"
},

{
fecha:"1632-1704",
titulo:"John Locke",
pensador:"John Locke",
descripcion:"Derechos naturales.",
idea:"Vida, libertad y propiedad.",
imagen:"img/11.jpg"
},

{
fecha:"1711-1776",
titulo:"David Hume",
pensador:"David Hume",
descripcion:"La moral nace de los sentimientos.",
idea:"La razón sirve a las emociones.",
imagen:"img/12.jpg"
},

{
fecha:"1724-1804",
titulo:"Immanuel Kant",
pensador:"Kant",
descripcion:"Ética del deber.",
idea:"Imperativo categórico.",
imagen:"img/13.jpg"
},

{
fecha:"1748-1832",
titulo:"Jeremy Bentham",
pensador:"Bentham",
descripcion:"Utilitarismo.",
idea:"Mayor felicidad para el mayor número.",
imagen:"img/14.jpg"
},

{
fecha:"1806-1873",
titulo:"John Stuart Mill",
pensador:"Mill",
descripcion:"Perfeccionó el utilitarismo.",
idea:"La calidad del placer también importa.",
imagen:"img/15.jpg"
},

{
fecha:"1844-1900",
titulo:"Friedrich Nietzsche",
pensador:"Nietzsche",
descripcion:"Crítica a la moral tradicional.",
idea:"Transvaloración de los valores.",
imagen:"img/16.jpg"
},

{
fecha:"1902-1994",
titulo:"Karl Popper",
pensador:"Popper",
descripcion:"Ética de la sociedad abierta.",
idea:"Pensamiento crítico y libertad.",
imagen:"img/17.jpg"
},

{
fecha:"1921-2002",
titulo:"John Rawls",
pensador:"Rawls",
descripcion:"Teoría de la justicia.",
idea:"Equidad como principio moral.",
imagen:"img/18.jpg"
},

{
fecha:"1929-2022",
titulo:"Alasdair MacIntyre",
pensador:"MacIntyre",
descripcion:"Renovación de la ética de la virtud.",
idea:"La moral depende de las tradiciones.",
imagen:"img/19.jpg"
},

{
fecha:"Siglo XXI",
titulo:"Ética Digital",
pensador:"Diversos autores",
descripcion:"Nuevos desafíos derivados de la inteligencia artificial y la tecnología.",
idea:"Uso responsable de la información y la IA.",
imagen:"img/20.jpg"
}

];

const timeline=document.querySelector(".timeline");

eventos.forEach((e,i)=>{

timeline.innerHTML+=`

<div class="card ${i%2==0?"left":"right"}">

<img src="${e.imagen}">

<div class="date">${e.fecha}</div>

<h2>${e.titulo}</h2>

<h3>${e.pensador}</h3>

<p>${e.descripcion}</p>

<div class="idea">

<strong>Principal aporte:</strong>

<p>${e.idea}</p>

</div>

</div>

`;

});

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".card").forEach(card=>observer.observe(card));