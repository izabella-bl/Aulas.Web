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

     viagem = { "Id": id.value, "Destino": destino.value, "Ida": ida.value , "Volta": volta.value, "Qtd de pessoas":pessoas.value};
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
                        +"<td>"+ v["Id"] +"</td>"
                        +"<td>"+ v["Destino"] +"</td>"
                        +"<td>"+ v["Dia de ida"] +"</td>"
                        +"<td>"+ v["Dia de volta"] +"</td>"
                        +"<td>"+ v["Qtd. de pessoas"] +"</td>"
                       +"</tr>";
    });    
}