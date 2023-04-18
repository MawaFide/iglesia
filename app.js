//escalas

var resultado = 0;
let pepe = 500 / 30;

console.log(pepe);
class Diesmo {
  constructor(dinero) {
    this.dinero = dinero;
  }

  Suma(dato1, dato2) {
    // document.querySelector('#text-fondo').value = parseInt(dato1)+parseInt(dato2);
    resultado = parseInt(dato1) + parseInt(dato2);
    //escala1
    if(dato1>=3000 && dato1<=4500){
      console.log('es la escala 1');
      document.querySelector('#text-obra').value=dato1*10/100 ;
      
      let pastor=document.querySelector('#text-pastor').value=2100;
      document.querySelector('#text-pastora').value=0;
      document.querySelector('#text-obrero').value=pastor*10/100;
      document.querySelector('.porciento').innerHTML='Escala 1 *10%';
    }
    //escala2
    if(dato1>=4501 && dato1<=6000){
      console.log('es la escala 2');
      document.querySelector('#text-obra').value=dato1*11/100;
      let pastor=document.querySelector('#text-pastor').value=3000;
      let pastora=document.querySelector('#text-pastora').value=0;
      document.querySelector('#text-obrero').value=(pastor*10/100)+(pastora*10/100);
      document.querySelector('.porciento').innerHTML='Escala 2 *11%';
    }
    //escala3
    if(dato1>=6001 && dato1<=8000){
      console.log('es la escala 3');
      document.querySelector('#text-obra').value=dato1*12/100;
      let pastor=document.querySelector('#text-pastor').value=2100;
      let pastora=document.querySelector('#text-pastora').value=2100;
      document.querySelector('#text-obrero').value=(pastor*10/100)+(pastora*10/100);
      document.querySelector('.porciento').innerHTML='Escala 3 *12%';
    }
    //escala4
    if(dato1>=8001 && dato1<=10000){
      console.log('es la escala 4');
      document.querySelector('#text-obra').value=dato1*13/100;
      let pastor=document.querySelector('#text-pastor').value=2500;
      let pastora=document.querySelector('#text-pastora').value=2500;
      document.querySelector('#text-obrero').value=(pastor*10/100)+(pastora*10/100);
      document.querySelector('.porciento').innerHTML='Escala 4 *13%';
    }
    //escala5
    if(dato1>=10001 && dato1<=15000){
      console.log('es la escala 5');
      document.querySelector('#text-obra').value=dato1*14/100;
      let pastor=document.querySelector('#text-pastor').value=3000;
      let pastora=document.querySelector('#text-pastora').value=3000;
      document.querySelector('#text-obrero').value=(pastor*10/100)+(pastora*10/100);
      document.querySelector('.porciento').innerHTML='Escala 5 *14%';
    }
    //escala6
    if(dato1>=15001 && dato1<=20000){
      console.log('es la escala 6');
      document.querySelector('#text-obra').value=dato1*15/100;
      let pastor=document.querySelector('#text-pastor').value=4500;
      let pastora=document.querySelector('#text-pastora').value=4500;
      document.querySelector('#text-obrero').value=(pastor*10/100)+(pastora*10/100);
      document.querySelector('.porciento').innerHTML='Escala 6 *15%';
    }
    //escala7
    if(dato1>=20000 && dato1<=30000){
      console.log('es la escala 7');
      document.querySelector('#text-obra').value=dato1*16/100;
      let pastor= document.querySelector('#text-pastor').value=5500;
      let pastora=document.querySelector('#text-pastora').value=5500;
      document.querySelector('#text-obrero').value=(pastor*10/100)+(pastora*10/100);
      document.querySelector('.porciento').innerHTML='Escala 7 *16%';
    }
    //escala8
    if(dato1>=30001 && dato1<=40000){
      console.log('es la escala 8');
      document.querySelector('#text-obra').value=dato1*17/100;
      let pastor=document.querySelector('#text-pastor').value=6500;
      let pastora=document.querySelector('#text-pastora').value=6500;
      document.querySelector('#text-obrero').value=(pastor*10/100)+(pastora*10/100);
      document.querySelector('.porciento').innerHTML='Escala 8 *17%';
    }
    //escala9
    if(dato1>=40001 && dato1<=60000){
      console.log('es la escala 9');
      document.querySelector('#text-obra').value=dato1*18/100;
      let pastor=document.querySelector('#text-pastor').value=8000;
      let pastora=document.querySelector('#text-pastora').value=8000;
      document.querySelector('#text-obrero').value=(pastor*10/100)+(pastora*10/100);
      document.querySelector('.porciento').innerHTML='Escala 9 *18%';
    }
    //escala10
    if(dato1>=60001 && dato1<=100000){
      console.log('es la escala 10');
      document.querySelector('#text-obra').value=dato1*19/100;
      let pastor=document.querySelector('#text-pastor').value=10000;
      let pastora=document.querySelector('#text-pastora').value=10000;
      document.querySelector('#text-obrero').value=(pastor*10/100)+(pastora*10/100);
      document.querySelector('.porciento').innerHTML='Escala 10 *19%';
    }
    //escala11
    if(dato1>=100001){
      console.log('es la escala 11');
      document.querySelector('#text-obra').value=dato1*20/100;
      let pastor=document.querySelector('#text-pastor').value=12000;
      let pastora=document.querySelector('#text-pastora').value=12000;
      document.querySelector('#text-obrero').value=(pastor*10/100)+(pastora*10/100);
      document.querySelector('.porciento').innerHTML='Escala 11 *20%';
    }
  }
  Resta(acumulado, restar) {
    resultado = parseInt(restar) - parseInt(acumulado);
  }
}

//eventos
document.querySelector("#text-fondo").focus();
document.querySelector('#text-fondo').addEventListener('click',(e)=>{
  e.preventDefault();
  document.querySelector('#text-fondo').select();
  
})
///click del btn Entrada
document.querySelector("#btn-entrada").addEventListener("click", (e) => {
  e.preventDefault();
  const entrada = document.querySelector("#text-entrada").value;
  const total = document.querySelector("#text-fondo").value;
  const clase = new Diesmo();
  clase.Suma(entrada, total);
  document.querySelector("#text-fondo").value = resultado;
  
  
});
///click del btn obra
document.querySelector("#btn-obra").addEventListener("click", (e) => {
  e.preventDefault();
  const entrada = document.querySelector("#text-obra").value;
  const total = document.querySelector("#text-fondo").value;
  const clase = new Diesmo();
  clase.Resta(entrada, total);
  document.querySelector("#text-fondo-obra").value = resultado;
});
///click del btn pastor
document.querySelector("#btn-pastors").addEventListener("click", (e) => {
  e.preventDefault();
  const entrada = document.querySelector("#text-pastor").value;
  const total = document.querySelector("#text-fondo-obra").value;
  const clase = new Diesmo();
  clase.Resta(entrada, total);
  document.querySelector("#text-fondo-pastor").value = resultado;
});
///click del btn pastora
document.querySelector("#btn-pastora").addEventListener("click", (e) => {
  e.preventDefault();
  const entrada = document.querySelector("#text-pastora").value;
  const total = document.querySelector("#text-fondo-pastor").value;
  const clase = new Diesmo();
  clase.Resta(entrada, total);
  document.querySelector("#text-fondo-pastora").value = resultado;
});
///click del btn obrero
document.querySelector("#btn-obrero").addEventListener("click", (e) => {
  e.preventDefault();
  const entrada = document.querySelector("#text-obrero").value;
  const total = document.querySelector("#text-fondo-pastora").value;
  const clase = new Diesmo();
  clase.Resta(entrada, total);
  document.querySelector("#text-fondo-obrero").value = resultado;
});
///click del btn ayuda
document.querySelector("#btn-ayuda").addEventListener("click", (e) => {
  e.preventDefault();
  const entrada = document.querySelector("#text-ayuda").value;
  const total = document.querySelector("#text-fondo-obrero").value;
  const clase = new Diesmo();
  clase.Resta(entrada, total);
  document.querySelector("#text-fondo-ayuda").value = resultado;
});
///click del btn otras
document.querySelector("#btn-otras").addEventListener("click", (e) => {
  e.preventDefault();
  const entrada = document.querySelector("#text-otras").value;
  const total = document.querySelector("#text-fondo-ayuda").value;
  const clase = new Diesmo();
  clase.Resta(entrada, total);
  document.querySelector("#text-fondo-otras").value = resultado;
});
