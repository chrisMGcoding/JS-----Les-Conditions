// 1.
console.log(1 == "1");

// 2.
console.log(1 === "1");

// 3.
let Surname = prompt("quel est ton prénom ?");
if (Surname.length < 5) {
    alert("ton nom est trop court");
}
else {
    alert("nom assez long");
}

// 4.
let Addition = prompt("10 + 10 ?");
if (Addition == 20) {
    alert("félicitations !")
}
else {
    alert("you fail !")
}

// 5.
let Multiplication = prompt("5 x 5 ?");

if (Multiplication == 25) {
    alert("la réponse est bien 25 !")
} 
else {
    alert(`tu n'es qu'à ${25 - Multiplication} de la réponse`);
}

// 6.
let Programme = [];

let ajout1 = prompt("ajout1");
let ajout2 = prompt("ajout2");
let ajout3 = prompt("ajout3");

Programme.unshift(ajout1, ajout2, ajout3);
console.log(Programme);

if (Programme.length == "3") {
    alert(Programme);
}

// 7.
let GrandNombre = [];
let PetitNombre = [];
let AjoutClient = prompt("encodez votre nombre !");

if (AjoutClient >= 12) {
    GrandNombre.unshift(AjoutClient);
} 
else {
    PetitNombre.unshift(AjoutClient);
}

let tab = [GrandNombre.concat(" ", PetitNombre)];
alert(tab);