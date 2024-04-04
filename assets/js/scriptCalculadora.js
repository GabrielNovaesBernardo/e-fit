function calcularIMC(peso, altura) {
    let imc = peso / ((altura / 100) * (altura / 100));
    return  imc;
}

function mostrarResultadoIMC(imc) {
    
    let inputAlturaUsuario = document.querySelector('#inputAltura').value;
    let inputPesoUsuario = document.querySelector('#inputPeso').value;
    let imcUsuario = document.querySelector('#imcUsuario');
    let alturaUsuario = document.querySelector('#alturaUsuario');
    let pesoUsuario = document.querySelector('#pesoUsuario');
    let containerIMC = document.querySelector('.infImcRetornado');
    let tituloIMC = document.querySelector('#tituloImcRetornado');
    let textoIMC = document.querySelector('#textoImcRetornado');

    if (imc < 18.5) {
        imcUsuario.innerHTML = imc.toFixed(2);
        alturaUsuario.innerHTML = (inputAlturaUsuario / 100).toFixed(2);
        pesoUsuario.innerHTML = `${inputPesoUsuario} kg`;
        containerIMC.style.backgroundColor = 'var(--amarelo-tabela-IMC)';
        tituloIMC.innerHTML = 'Abaixo do Peso';
        textoIMC.innerHTML = 'Estar abaixo do peso pode parecer inofensivo, mas traz riscos à saúde. Fraqueza muscular, fadiga constante e maior suscetibilidade a doenças são apenas alguns dos problemas enfrentados por quem está abaixo do peso. Busque orientação médica para desenvolver uma dieta balanceada e ganhar peso de forma saudável.';
    } else if (imc < 24.9) {
        imcUsuario.innerHTML = imc.toFixed(2);
        alturaUsuario.innerHTML = (inputAlturaUsuario / 100).toFixed(2);
        pesoUsuario.innerHTML = `${inputPesoUsuario} kg`;
        containerIMC.style.backgroundColor = 'var(--verde-tabela-IMC)';
        tituloIMC.innerHTML = 'Peso Ideal';
        textoIMC.innerHTML = 'Parabéns por manter um peso saudável! Estar dentro da faixa de peso ideal traz uma série de benefícios, como melhor saúde cardiovascular, maior energia e menor risco de doenças crônicas. Continue com seus hábitos saudáveis, pois estão contribuindo para uma vida plena e ativa.';
    } else if (imc < 30) {
        imcUsuario.innerHTML = imc.toFixed(2);
        alturaUsuario.innerHTML = (inputAlturaUsuario / 100).toFixed(2);
        pesoUsuario.innerHTML = `${inputPesoUsuario} kg`;
        containerIMC.style.backgroundColor = 'var(--laranja-tabela-IMC)';
        tituloIMC.innerHTML = 'Sobrepeso';
        textoIMC.innerHTML = 'O sobrepeso pode aumentar significativamente o risco de desenvolver condições como diabetes, doenças cardíacas e hipertensão. Priorize uma dieta equilibrada e a prática regular de exercícios para reduzir esse risco. Pequenas mudanças podem fazer uma grande diferença na sua saúde a longo prazo.';
    } else {
        imcUsuario.innerHTML = imc.toFixed(2);
        alturaUsuario.innerHTML = (inputAlturaUsuario / 100).toFixed(2);
        pesoUsuario.innerHTML = `${inputPesoUsuario} kg`;
        containerIMC.style.backgroundColor = 'var(--vermelho-tabela-IMC)';
        tituloIMC.innerHTML = 'Obeso';
        textoIMC.innerHTML = 'A obesidade é uma preocupação séria de saúde, aumentando drasticamente o risco de uma série de condições médicas graves, incluindo derrame, doença hepática e certos tipos de câncer. Busque apoio médico e adote um plano de estilo de vida saudável, incluindo dieta balanceada e exercícios regulares, para melhorar sua saúde e qualidade de vida.';
    }
}


function receitaRecomendada (imc) {
    let cafeManha = document.querySelector('#texto-apresentacao-cafe-manha');
    let almoco = document.querySelector('#texto-apresentacao-almoco');
    let lancheTarde = document.querySelector('#texto-apresentacao-lanche-tarde');
    let jantar = document.querySelector('#texto-apresentacao-jantar');
    let ceia = document.querySelector('#texto-apresentacao-ceia');

    let itensCafeManha = document.querySelector('#itens-cafe-manha');
    let itensAlmoco = document.querySelector('#itens-almoco');
    let itensLancheTarde = document.querySelector('#itens-lanche-tarde');
    let itensJantar = document.querySelector('#itens-jantar');
    let itensCeia = document.querySelector('#itens-ceia');

    let textosGanharMassaCafeManha = ['40g de tapioca com 3 ovos', '50g de aveia com 1 ou 2 frutas']
    let textosGanharMassaAlmoco = ['200g de arroz branco cozido', '100g de feijão carioca', '80g de algum tipo de vegetal', '150g de carne vermelha', 'Mix de vegetais: abobrinha, aspargos, brócolis, chuchu, jíló, quiabo, pimentão, à vontade', 'Salada à vontada.'];
    let textosGanharMassaLacheTarde = ['1 Panqueca de banana com aveia', '1 ovo cozido', '1 banana', '20g de farinha de aveia'];
    let textosGanharMassaJantar = ['100g de filé de frango', '200g de arroz', '50g de algum tipo de vegetal', 'Salada a vontade'];
    let textosGanharMassaCeia = ['Omelete de 4 ovos com legumes a vontade'];

    let textosManterMassaCafeManha = ['Opção 1: Omelete de vegetais (tomate, espinafre, pimentão) com 2 ovos', 'Opção 2: Vitamina de frutas (banana, morangos, maçã) com 50g de aveia'];
    let textosManterMassaAlmoco = ['150g de arroz branco cozido' , '60g de feijão carioca', '100g de legumes grelhados (abobrinha, berinjela, cenoura)', '100g de peito de frango grelhado ou tofu'];
    let textosManterMassaLacheTarde = ['Smoothie de proteína: 1 scoop de proteína em pó, 200ml de leite de amêndoas, 1 banana, 1 punhado de espinafre'];
    let textosManterMassaJantar = ['Salada de folhas verdes (alface, rúcula, agrião) com tomate cereja e pepino, temperada com azeite e limão', '150g de salmão grelhado ou lentilhas cozidas (para opção vegetariana)'];
    let textosManterMassaCeia = ['2 ovos mexidos com cogumelos e espinafre'];

    let textosPerderMassaCafeManha = ['2 fatias de pão integral', '30g queijo padrão, minas', 'Tomate cereja à gosto', '1 xícara café ou chá sem açucar'];
    let textosPerderMassaAlmoco = ['60g arroz integral ou branco', '60g feijão carioca, preto, gra-de-bico, ervilha', '100g carne vermelha magra', 'Salada de folhas verdes: Alface, Americana, Crespa, Roxa, Agrião à vontade Azeite de oliva extra virgem: Fio de Azeite'];
    let textosPerderMassaLacheTarde = ['1 ovo de galinha 30g goma de tapioca', '1 colher de sopa de iogurte natural', '50g queijo, minas frescal, padrão'];
    let textosPerderMassaJantar = ['80g batata doce ou inglesa', '100g filé de frango grelhado', 'Mix de vegetais: abobrinha, aspargos, brócolis, chuchu, jiló, quiabo, pimentão', 'Salada de folhas verdes: Alface, Americana, Crespa, Roxa, Agrião à vontadee de oliva extra virgem: Fio de Azeite'];
    let textosPerderMassaCeia = ['200ml de iogurte natural 120g de maça, morango, banana', '1 colher de sobremesa de granola sem açucar'];

    if (imc < 18.5) {
        cafeManha.innerHTML = 'Comece o dia com uma refeição substancial para fornecer energia e apoiar o crescimento muscular.';
        almoco.innerHTML = 'Recarregue seu corpo com uma refeição rica em nutrientes para promover o ganho de massa muscular.';
        lancheTarde.innerHTML = 'Reabasteça seu corpo com um lanche energético para suportar seus objetivos de ganho de massa.';
        jantar.innerHTML = 'Promova a recuperação muscular durante a noite com uma refeição rica em nutrientes para suportar o crescimento muscular.';
        ceia.innerHTML = 'Termine o dia com uma fonte adicional de proteínas para apoiar a recuperação muscular durante a noite.';

        textosGanharMassaCafeManha.forEach(function(texto) {
            let itemLista = document.createElement('li');
            itemLista.textContent = texto;
            itensCafeManha.appendChild(itemLista);
        });

        textosGanharMassaAlmoco.forEach(function(texto) {
            let itemLista = document.createElement('li');
            itemLista.textContent = texto;
            itensAlmoco.appendChild(itemLista);
        });

        textosGanharMassaLacheTarde.forEach(function(texto) {
            let itemLista = document.createElement('li');
            itemLista.textContent = texto;
            itensLancheTarde.appendChild(itemLista);
        });

        textosGanharMassaJantar.forEach(function(texto) {
            let itemLista = document.createElement('li');
            itemLista.textContent = texto;
            itensJantar.appendChild(itemLista);
        });

        textosGanharMassaCeia.forEach(function(texto) {
            let itemLista = document.createElement('li');
            itemLista.textContent = texto;
            itensCeia.appendChild(itemLista);
        });

    } else if (imc < 24.9) {
        cafeManha.innerHTML = 'Inicie o dia com uma refeição equilibrada para sustentar seu peso atual.';
        almoco.innerHTML = 'Desfrute de uma refeição nutritiva e satisfatória para manter seu peso atual.';
        lancheTarde.innerHTML = 'Escolha um lanche saudável para manter seus níveis de energia durante o dia.';
        jantar.innerHTML = 'Encerre o dia com uma refeição balanceada para manter seu peso atual.';
        ceia.innerHTML = 'Termine o dia com uma opção leve para manter seu equilíbrio calórico.';

        textosManterMassaCafeManha.forEach(function(texto) {
            let itemLista = document.createElement('li');
            itemLista.textContent = texto;
            itensCafeManha.appendChild(itemLista);
        });

        textosManterMassaCafeManha.forEach(function(texto) {
            let itemLista = document.createElement('li');
            itemLista.textContent = texto;
            itensAlmoco.appendChild(itemLista);
        });

        textosManterMassaCafeManha.forEach(function(texto) {
            let itemLista = document.createElement('li');
            itemLista.textContent = texto;
            itensLancheTarde.appendChild(itemLista);
        });

        textosManterMassaCafeManha.forEach(function(texto) {
            let itemLista = document.createElement('li');
            itemLista.textContent = texto;
            itensJantar.appendChild(itemLista);
        });

        textosManterMassaCafeManha.forEach(function(texto) {
            let itemLista = document.createElement('li');
            itemLista.textContent = texto;
            itensCeia.appendChild(itemLista);
        });

    } else {
        cafeManha.innerHTML = 'Inicie o dia com uma opção leve e nutritiva para apoiar seus objetivos de perda de peso.';
        almoco.innerHTML = 'Desfrute de uma refeição equilibrada e satisfatória para manter seus esforços de perda de peso.';
        lancheTarde.innerHTML = 'Evite a fome entre as refeições com uma escolha leve e saudável.';
        jantar.innerHTML = 'Encerre o dia com uma refeição leve e balanceada para manter seu progresso na perda de peso.';
        ceia.innerHTML = 'Escolha uma opção leve para sua ceia, mantendo-se alinhado com seus objetivos de perda de peso.';

        textosPerderMassaCafeManha.forEach(function(texto) {
            let itemLista = document.createElement('li');
            itemLista.textContent = texto;
            itensCafeManha.appendChild(itemLista);
        });

        textosPerderMassaAlmoco.forEach(function(texto) {
            let itemLista = document.createElement('li');
            itemLista.textContent = texto;
            itensAlmoco.appendChild(itemLista);
        });

        textosPerderMassaLacheTarde.forEach(function(texto) {
            let itemLista = document.createElement('li');
            itemLista.textContent = texto;
            itensLancheTarde.appendChild(itemLista);
        });

        textosPerderMassaJantar.forEach(function(texto) {
            let itemLista = document.createElement('li');
            itemLista.textContent = texto;
            itensJantar.appendChild(itemLista);
        });

        textosPerderMassaCeia.forEach(function(texto) {
            let itemLista = document.createElement('li');
            itemLista.textContent = texto;
            itensCeia.appendChild(itemLista);
        });

    } 
} 


const calcular = document.querySelector('#btnCalcularIMC');

calcular.addEventListener('click', () => {
    const elementoOculto = document.querySelector('.elemento-oculto');
    let inputAlturaUsuario = document.querySelector('#inputAltura').value;
    let inputPesoUsuario = document.querySelector('#inputPeso').value;
    let imc = calcularIMC(inputPesoUsuario, inputAlturaUsuario);

    elementoOculto.style.display = 'flex';
    elementoOculto.scrollIntoView({ behavior: "smooth" });  

    mostrarResultadoIMC(imc);
    receitaRecomendada(imc)
})
