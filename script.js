let container_barras = document.getElementById("container_barras");
let barra1 = document.getElementById("barra1");
let barra2 = document.getElementById("barra2");
let barra3 = document.getElementById("barra3");
let navegacao = document.getElementById("navegacao");
let link1 = document.getElementById("link1");
let link2 = document.getElementById("link2");
let link3 = document.getElementById("link3");
let link4 = document.getElementById("link4");
let link5 = document.getElementById("link5");


let menu_status_ativo_desativo = true;

function muda_links_juntos(){
    if(menu_status_ativo_desativo){
        navegacao.classList.remove("ancoras_desativadas");
        link1.classList.add("links_ativos")
        link2.classList.add("links_ativos")
        link3.classList.add("links_ativos")
        link4.classList.add("links_ativos")
        link5.classList.add("links_ativos")
    }else{
        link1.classList.remove("links_ativos")
        link1.classList.add("links_desativos")
        link2.classList.remove("links_ativos")
        link3.classList.remove("links_ativos")
        link4.classList.remove("links_ativos")
        link5.classList.remove("links_ativos")
    }
}

function abre_fecha_menu(){
    if(menu_status_ativo_desativo){
        barra1.classList.add("barra1_ativa");
        barra2.classList.add("barra2_ativa");
        barra3.classList.add("barra3_ativa");
        navegacao.classList.add("ancoras_ativas");
        muda_links_juntos();

        menu_status_ativo_desativo = false

        console.log("Ativado");
    }else{
        barra1.classList.remove("barra1_ativa");
        barra2.classList.remove("barra2_ativa");
        barra3.classList.remove("barra3_ativa");
        navegacao.classList.add("ancoras_desativadas");
        navegacao.classList.remove("ancoras_ativas");
        muda_links_juntos();
        menu_status_ativo_desativo = true;

       console.log("desativado");
    }
}