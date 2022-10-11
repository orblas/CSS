let nombre = [
    {
        nombre:"Gullermo",
        edad: 37,
        sexo: "M"
    },

    {
        nombre:"Josue",
        edad: 22,
        sexo: "M"
    },

    {
        nombre:"Chino",
        edad: 20,
        sexo: "M"
    },


    {
        nombre:"Areli",
        edad: 21,
        sexo: "F"
    },


    {
        nombre:"Omar",
        edad: 26,
        sexo: "M"
    }

];



let hombresJovenes = nombre.filter(persona=>{
    if (persona.sexo == "M" && persona.edad<=25 ) {
        
        return persona.edad;
    }
})


let sueldose=nombre.map(persona=>{
    let sueldo=0;
    if (persona.edad>30) {
        sueldo=10000
    }
    return {nombre:persona.nombre,sueldo:sueldo};
})


let mujer = nombre.find(persona=>{
    if (persona.sexo=="F") {
        return persona.sexo;
    }
})




/*let contenedor = document.getElementById("contenedor");
let input = document.querySelector("#input");
let botoncito=document.querySelector("#botoncito");

botoncito.addEventListener("click", ()=>{
    contenedor.innerText=input.value;
    contenedor.className="sombreado";
})


input.addEventListener("keyup",()=>{
    if (input.value.length>3) 
    {
        contenedor.innerText= input.value;
        contenedor.className="exito";        
    }
    else
    {
        contenedor.innerText= "Texto invalido";
        contenedor.className="fallo";
    }

})*/