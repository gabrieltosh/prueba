var names = 'Gabriel'
var lastname = 'Pinto'
var name_platzi = 'Gabrieltosh'
var age = 26
var email = 'gpinto@levcorp.bo'
var adult = true
var saved_money = 6200
var debts = 5000

console.log(names +' '+ lastname)
console.log(saved_money - debts)


function nick(name, lastaname, nickname){
    console.log('Mi nombre es ' + name + ' ' + lastaname + ', pero prefiero que me digas ' + nickname + '.');
}

nick('Gabriel','Pinto','Gabrieltosh')

const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

const tipoDeSuscripcion = "Free";

if(tipoDeSuscripcion==='Free'){
    console.log("Solo puedes tomar los cursos gratis");
}else if(tipoDeSuscripcion==='Basic' || tipoDeSuscripcion==='Expert'){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}else if(tipoDeSuscripcion==='ExpertPlus'){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}


const tipoDeSuscripcion = "ExpertPlus";

var suscripcion=[
    {
        tipo:'Free',
        mensaje:'Solo puedes tomar los cursos gratis',
    },
    {
        tipo:'Basic',
        mensaje:'Puedes tomar casi todos los cursos de Platzi durante un mes',
    },
    {
        tipo:'Expert',
        mensaje:'Puedes tomar casi todos los cursos de Platzi durante un mes',
    },
    {
        tipo:'ExpertPlus',
        mensaje:'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año',
    },
];
var resultado = suscripcion.find(element => {
    return element.tipo==tipoDeSuscripcion
});
console.log(resultado.mensaje)

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

let i=0

while (i<5) {
    console.log("El valor de i es: " + i);
    i++
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

let i=10

while (i >= 2) {
    console.log("El valor de i es: " + i);
    i--
}

let state=0
while(state==0){
    let sign = prompt("How much is 2 + 2?")
    if(sign == '4'){
        alert('Right')
        state = 1
    }else{
        alert('Incorrect')
    }
}
let state=0
while(state==0){
    let sign = prompt("How much is 2 + 2?")
    if(sign == '4'){
        alert('Right')
        state = 1
    }else{
        alert('Incorrect')
    }
}
