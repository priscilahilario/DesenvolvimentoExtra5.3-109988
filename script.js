let tituloSimples = document.createElement('h1');

//manipulando o elemento//
tituloSimples.innerText = 'Lilith Cosmeticos';
tituloSimples.id ='titulo';


//capturando o elemento pai body//
let body = document.querySelector("body");

// Adicionando o elemento 'titulo' no DOM
body.appendChild(tituloSimples);


// Criando um elemento para o produto
let produto = document.createElement('div');

// Manipulando o elemento
produto.innerHTML =
`
<div>
<h2>Elysee Tradicional</h2>
    <p id="preco-perfume">Preço da unidade: R$ 279.90</p>

    <p>Sofisticação e Alta Fixação na Pele Para Arrasar Por Onde Passa. 
  Confira Todos as Versões.
    <img src="https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_800/v1/imagens/product/B19685/73445cb9-c141-4644-823c-8a450a1c4ba4-b19685-elysee-eau-de-parfum-50ml.jpg" alt="elysee">
    </p>
</div>`
;
// Adicionando o elemento no dom
body.appendChild(produto);