// 1.
// let Var1 = prompt("Encodez un nombre !");
// let Var2 = prompt("Encodez un autre nombre !");
// let resultat = Math.abs(Var1 - Var2)

// if (Var1 == Var2) {
//     alert("L'égalite est là !")
// }
// else {
//     alert(`Le nombre ${Var1} est-il égale au nombre ${Var2} ? ${Var1 === Var2} : ${resultat} de différence`)
// }

// 2.
// let Var1 = prompt("Encodez un nombre !");
// let Var2 = prompt("Encodez un autre nombre !");
// let resultat = (Var1 != Var2);

// if (Var1 < Var2) {
//     alert(`Le nombre ${Var1} est-il plus petit que ${Var2} ? ${resultat} `)
// }
// else {
//     alert("Consignes non respectées !")
// }

// 3.
// let Var1 = prompt("Encodez un nombre !");
// let Var2 = prompt("Encodez un autre nombre !");
// let Var3 = prompt("Encodez un dernier nombre !");

// let Addition = (parseInt(Var1) + parseInt(Var2));
// console.log(Addition);

// if (Addition < Var3) {
//     alert("Conditions respectées !")
// }
// else {
//     alert(`La somme de ${Var1} et de ${Var2} est-elle plus grande que ${Var3} ? ${Addition > Var3}`)
// }

// 4.
// let question = prompt("Encodez une phrasez !");
// let questionChiffre = question.length;
// let estimation = prompt("Estimez la longueur de la phrase !");
// let estimationClient = parseInt(estimation)
// let difference = Math.abs(estimationClient - questionChiffre); 

// if (questionChiffre == estimationClient) {
//     alert("good guess !")
// }
// else {
//     alert(`Votre réponse est fausse : vous êtes à ${difference} unités de la bonne réponse`)
// }

// 5.
// let prenom = prompt("Veuillez encoder votre prénom !");
// let condition = prenom.length;

// if (condition == 0) {
//     prenom = prompt(`Vous devez rentrer votre prénom !`);
//     if (reponse != 0) {
//         alert(`Bonjour ${prenom}`)
//     }

// }
// else {
//     alert(`Bonjour ${prenom}`)
// }

// 6.
// let confirmation = confirm("Souhaitez-vous vous abonner ?");

// if (confirmation == true) {
//     let choix = prompt("Souhaitez-vous la formule luxe ou normale");
//     if (choix.length == 4) {
//         alert("Bravo pour votre choix de la version luxe !");
//     }
//     else {
//         alert("Merci pour votre abonnement !");
//     }
// }
// else {
//     let hesitation = confirm("êtes-vous sûr(e) ?");
//     if (hesitation == true) {
//         alert("Nous vous souhaitons une agréable journée");
//     }
//     else {
//         prompt("Souhaitez-vous la formule luxe ou normale");
//     }
// }

// 7.
// let question1 = "5 x 5 = ?";
// let question2 = "8 x 7 = ?";
// let reponse1 = prompt(question1);
// let reponse2 = prompt(question2);

// if (reponse1 == 25 && reponse2 == 56) {
//     alert("Félicitations !")
// }
// else if (reponse1 != 25 && reponse2 == 56) {
//     alert(`Votre réponse à la question ${question1} est fausse`)
// }
// else if(reponse1 == 25 && reponse2 != 56) {
//     alert(`Votre réponse à la question ${question2} est fausse`)
// }
// else {
//     alert("Aucune réponse correcte !")
// }

// 8.
// let age = parseInt(prompt("Veuillez encoder votre âge !"));

// if (age > 18 && age < 100) {
//     alert("Vous pouvez rentrer !")
// }
// else if (age < 18) {
//     alert("Vous êtes trop jeunes")
// }
// else if (age === 0) {
//     alert("Vous n'êtes pas née ...")
// }
// else if (age === 18) {
//     alert("Tout juste !")
// }
// else {
//     alert("êtes vous encore vivant ?")
// }

// 9.
// let question1 = prompt("êtes-vous riche ?");
// let question2 = prompt("Voulez-vous partir en vacances ?");
// let question3 = prompt("Est-ce que vous avez un chat ?");
// let vrai = "oui";
// let faux = "non";

// if (question2 != vrai) {
//     alert("Pas de soucis, ne partez pas en vacances")
// }
// else if (question1 != vrai || question3 == vrai) {
//     alert("Même si vous le vouliez, vous ne pourriez pas partir !")
// }
// else if (question1 == vrai && question3 != vrai) {
//     alert("Vous pourriez partir en vacances si vous le voulez !")
// }
// else if (question1 == vrai && question2 == vrai && question3 == vrai) {
//     alert("Vous pouvez partir en vacances")
// }
// else {
//     alert("bruxelles les bains oslm")
// }