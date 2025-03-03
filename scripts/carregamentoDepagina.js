function carregamentoDePagina(){
  window.addEventListener("beforeunload", (evento) => {
    evento.preventDefault();
    evento.returnValue = "Tem certeza que deseja sair? Suas alterações podem ser perdidas!";
  });
}

export default carregamentoDePagina;
