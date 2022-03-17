var titulo = document.querySelector('.titulo')
	console.log(titulo.textContent)
	titulo.textContent = 'Aparecida Nutricionista';

	var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 1000) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
		paciente.classList.add("paciente-inválido");
    }

    if (altura <= 0 || altura >= 3.00) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
		paciente.classList.add('paciente-inválido');
    }

  if (alturaEhValida && pesoEhValido) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}

var botaoAdicionarPaciente = document.querySelector('#adicionar-paciente');{
    botaoAdicionarPaciente.addEventListener('click', function(event){
        event.preventDefault();

        var form = document.querySelector('#form-adiciona');

        var nome = form.nome.value;
        var peso = form.peso.value;
        var altura = form.altura.value;
        var gordura = form.gordura.value;
        console.log(nome);
        console.log(peso);
        console.log(altura);
        console.log(gordura);
        
        var pacienteTr = document.createElement('tr');

        var nomeTd = document.createElement ('td');
        var pesoTd = document.createElement ('td');
        var alturaTd = document.createElement ('td');
        var gorduraTd = document.createElement ('td');
        var imcTd = document.createElement ('td');

        nomeTd.textContent = nome;
        pesoTd.textContent = peso;
        alturaTd.textContent = altura;
        gorduraTd.textContent = gordura;
        
        pacienteTr.appendChild(nomeTd);
        pacienteTr.appendChild(pesoTd);
        pacienteTr.appendChild(alturaTd);
        pacienteTr.appendChild(gorduraTd);
        console.log(pacienteTr);

        var tabela = document.querySelector('#tabela-pacientes');
        tabela.appendChild(pacienteTr);

    })};



botaoAdicionarPaciente.addEventListener("click", function(){
    event.preventDefault();
    console.log("Olá, eu fui clicado");
});

