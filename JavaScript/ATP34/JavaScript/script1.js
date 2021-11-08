window.onload = function(){
    console.log('Carregando Js...');
    let viagem = []
    localStorage.setItem("viagem", JSON.stringify(viagem));
}


function salvar(event){
    event.preventDefault();
    let id = document.getElementById('id');
    let destino = document.getElementById('destino');
    let ida = document.getElementById('ida');
    let volta = document.getElementById("volta")
    let pessoas = document.getElementById("pessoas")

     viagem = { "id": id.value, "destino": destino.value, "ida": ida.value , "volta": volta.value, "qtdDePessoas":pessoas.value};
     let viagens = JSON.parse(localStorage.getItem("viagem"));
     viagens.push(viagem);
     localStorage.setItem("viagem", JSON.stringify(viagens));
    
    carregaTabela();
}

function carregaTabela(){
    let tbody = document.getElementById("ListaDestino");
    let viagens = JSON.parse(localStorage.getItem("viagem"));
    tbody.innerHTML = "";
    viagens.forEach(v => {
        tbody.innerHTML += "<tr>"
                        +"<td>"+ v["id"] +"</td>"
                        +"<td>"+ v["destino"] +"</td>"
                        +"<td>"+ v["ida"] +"</td>"
                        +"<td>"+ v["volta"] +"</td>"
                        +"<td>"+ v["qtdDePessoas"] +"</td>"
                       +"</tr>";
    });    
}