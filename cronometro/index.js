let temporizador = document.getElementById('temporizador');

let horas = 0;
let minutos = 0; 
let segundos = 0;

let acao;

 cronometro = {

    iniciar(){
        acao = setInterval(()=>{
            this._timer();
            this._atualizarTempoNaTela();
        }, 1000);
        
    },

    parar(){
       clearInterval(acao);
    },

zerar(){
  this.parar()
  segundos = 0;
  minutos = 0 ;
horas = 0 ;
this._atualizarTempoNaTela();
 
},

_timer(){
segundos++;
if(segundos == 60){
    minutos ++;
    segundos = 0;
}else if (minutos == 60){
    horas++;
    minutos = 0;
}
},

_atualizarTempoNaTela(){

let segundosNaTela = (segundos < 10 ) ? "0" +  segundos : segundos;
let minutosNaTela = (minutos < 10 ) ? "0" +  minutos : minutos;
let horasNaTela = (horas < 10 ) ? "0" +  horas : horas;

temporizador.textContent = `${horasNaTela}:${minutosNaTela}:${segundosNaTela}`;
}
}
 