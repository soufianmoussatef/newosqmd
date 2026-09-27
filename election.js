const prompt = require('prompt-sync')();

const conditats = [
    {
        cin: "AA111111",
        name: "Alaoui",
        firstName: "Ahmed",
        politicalParty: "Hizb Lkhir",
        age: 40,
        voters: []
    },

    {
        cin: "BB222222",
        name: "Amrani",
        firstName: "Yassine",
        politicalParty: "Hizb Ttaghyir",
        age: 35,
        voters: []
    },

    {
        cin: "CC333333",
        name: "Bennani",
        firstName: "Sara",
        politicalParty: "Hizb Lmosta9bal",
        age: 28,
        voters: []
    },

    {
        cin: "DD444444",
        name: "Idrissi",
        firstName: "Omar",
        politicalParty: "Hizb Lkhir",
        age: 45,
        voters: []
    },

    {
        cin: "EE555555",
        name: "El Fassi",
        firstName: "Imane",
        politicalParty: "Hizb Ttaghyir",
        age: 32,
        voters: []
    },

    {
        cin: "FF666666",
        name: "Tazi",
        firstName: "Mehdi",
        politicalParty: "Hizb Lmosta9bal",
        age: 41,
        voters: []
    },

    {
        cin: "GG777777",
        name: "Berrada",
        firstName: "Anas",
        politicalParty: "Hizb Lkhir",
        age: 38,
        voters: []
    },

    {
        cin: "HH888888",
        name: "Chraibi",
        firstName: "Salma",
        politicalParty: "Hizb Ttaghyir",
        age: 31,
        voters: []
    },

    {
        cin: "II999999",
        name: "Benkirane",
        firstName: "Hamza",
        politicalParty: "Hizb Lmosta9bal",
        age: 47,
        voters: []
    },

    {
        cin: "JJ101010",
        name: "El Idrissi",
        firstName: "Nour",
        politicalParty: "Hizb Lkhir",
        age: 29,
        voters: []
    },

    {
        cin: "KK121212",
        name: "Tahiri",
        firstName: "Rachid",
        politicalParty: "Hizb Ttaghyir",
        age: 52,
        voters: []
    },

    {
        cin: "LL131313",
        name: "Kabbaj",
        firstName: "Aya",
        politicalParty: "Hizb Lmosta9bal",
        age: 36,
        voters: []
    },

    {
        cin: "MM141414",
        name: "Zniber",
        firstName: "Karim",
        politicalParty: "Hizb Lkhir",
        age: 44,
        voters: []
    },

    {
        cin: "NN151515",
        name: "Belkadi",
        firstName: "Meryem",
        politicalParty: "Hizb Ttaghyir",
        age: 33,
        voters: []
    },

    {
        cin: "OO161616",
        name: "Saidi",
        firstName: "Ayoub",
        politicalParty: "Hizb Lmosta9bal",
        age: 39,
        voters: []
    }
];

while (true) {

    console.log(`=========================================================
== Gestion des Élections et Listes Électorales au Maroc==
=========================================================`)

    console.log(`       1. Ajouter un nouveau candidat
       2. Ajouter plusieurs candidats à la fois
       3. Afficher la liste des candidats
       4. Voter pour un candidat
       5. Modifier les informations d'un candidat
       6. Supprimer un candidat
       7. Rechercher des candidats
       8. Statistiques de l'élection
       0.exit`)

    let choice = Number(prompt("your choice : "))

    if (choice === 0) {

        console.log("by")
        break

    } else if (choice === 1) {

        Ajoute()

    } else if (choice === 3) {

        console.log("1. Show all candidates");
        console.log("2. Show candidates by party");

        let choix = Number(prompt("Your choice: "));

        if (choix === 1) {

            ShowAll();

        } else if (choix === 2) {

            AfficherByparti();

        }

    } else if (choice === 2) {

        let number = Number(prompt(" enter how many condiats you want to add "))

        for (let i = 0; i < number; i++) {

            let cin = prompt("enter cin : ")
            let name = prompt("enter name : ")
            let firstName = prompt("eneter first name:")
            let politicalParty = prompt("enter political Party: ")
            let age = Number(prompt(" enter age: "))

            let conditat = {

                cin: cin,
                name: name,
                firstName: firstName,
                politicalParty: politicalParty,
                age: age,
                voters: []

            }

            conditats.push(conditat)

            console.log("conditat added")
        }
    }else if (choice === 4){ 
        voter();
    
    }else if(choice === 5){

    modifier()

} else if(choice === 7){

    Rechercher()

} else if (choice == 8){ 

    statistiques()
} else if (choice ===6 ){ 

    supprimer()
 }


function Ajoute() {

    let cin = prompt(" enter cin :")
    let name = prompt("enter name:")
    let firstName = prompt(" eneter firstname :")
    let politicalParty = prompt(" enter politicalParty :")
    let age = Number(prompt(" enter age : "))
    let conditat = {

        cin: cin,
        name: name,
        firstName: firstName,
        politicalParty: politicalParty,
        age: age,
        voters: [],

    };

    conditats.push(conditat)

    console.log("conditat added")
}


function AfficherByparti() {

    let party = prompt(" enter party : ")

    for (let i = 0; i < conditats.length; i++) {

        if (conditats[i].politicalParty === party) {

            console.log("CIN: " + conditats[i].cin)
            console.log(" Name: " + conditats[i].name)
            console.log("firstName:  " + conditats[i].firstName)
            console.log(" politicalParty: " + conditats[i].politicalParty)
            console.log(" Age: " + conditats[i].age)
            console.log(" Number of votes : " + conditats[i].voters.length);

        }
    }
}


function ShowAll() {

    for (let i = 0; i < conditats.length; i++) {

        console.log("CIN: " + conditats[i].cin)
        console.log(" Name: " + conditats[i].name)
        console.log("firstName:  " + conditats[i].firstName)
        console.log(" politicalParty: " + conditats[i].politicalParty)
        console.log(" Age: " + conditats[i].age)
        console.log(" Number of votes : " + conditats[i].voters.length);

    }
}
function voter (){ 

    let cinvoter = prompt("enter your cin")

    let aleradyvoted = false 

    for (let i = 0; i < conditats.length; i++){ 

        if (conditats[i].voters.includes(cinvoter)){ 

            aleradyvoted = true

        }
    }

    if (aleradyvoted === true){ 

        console.log("you already voted you cant change or modifier it !")

    } else {

        let cinconditat = prompt("enter the cin of the conditat : ")

        for (let i = 0; i < conditats.length; i++){

            if (conditats[i].cin === cinconditat){ 
                conditats[i].voters.push(cinvoter)
                console.log("vote added")

            }
        }
    }
}function modifier(){

    let cin = prompt("enter the CIN of candidat : ")

    for(let i = 0; i < conditats.length; i++){
        if(conditats[i].cin === cin){

            console.log("1. Modifier political party")
            console.log("2. Modifier age")

            let choix = Number(prompt("your choice : "))
            if(choix === 1){
                let party = prompt("enter new political party : ")
                conditats[i].politicalParty = party
                console.log("political party modified")
            }else if(choix === 2){
                let age = Number(prompt("enter new age : "))
                conditats[i].age = age
                console.log("age modified")
            }
        }
    }
} 
} function Rechercher(){ 

    let cin = prompt( " enter the CIN of the conditat ")
     for ( let i = 0 ; i< conditats.length ; i++){
        if ( conditats[i].cin === cin){ 
            console.log("CIN: " + conditats[i].cin)
            console.log("Name: " + conditats[i].name)
            console.log("firstName: " + conditats[i].firstName)
            console.log("politicalParty: " + conditats[i].politicalParty)
            console.log("Age: " + conditats[i].age)
            console.log("Number of votes: " + conditats[i].voters.length)
        }
     }
}
function statistiques(){
    console.log("Total candidates : " + conditats.length)
    let totalVotes = 0

    for(let i = 0; i < conditats.length; i++){
        totalVotes = totalVotes + conditats[i].voters.length

    }
    console.log("Total votes : " + totalVotes)




    let first = 0
    let second = 0
    let third = 0

    for(let i = 0; i < conditats.length; i++){

        let votes = conditats[i].voters.length

        if(votes > first){

            third = second
            second = first
            first = votes

        }else if(votes > second){

            third = second
            second = votes

        }else if(votes > third){

            third = votes
        }
    }
    console.log("Top 3 votes : ")
    console.log("1. " + first + " votes")
    console.log("2. " + second + " votes")
    console.log("3. " + third + " votes")




    let lkhir = 0
    let ttaghyir = 0
    let mosta9bal = 0

    for(let i = 0; i < conditats.length; i++){

        if(conditats[i].politicalParty === "Hizb Lkhir"){

            lkhir = lkhir + 1

        }else if(conditats[i].politicalParty === "Hizb Ttaghyir"){

            ttaghyir = ttaghyir + 1

        }else if(conditats[i].politicalParty === "Hizb Lmosta9bal"){

            mosta9bal = mosta9bal + 1

        }
    }

    console.log("Hizb Lkhir : " + lkhir)
    console.log("Hizb Ttaghyir : " + ttaghyir)
    console.log("Hizb Lmosta9bal : " + mosta9bal)

}function supprimer(){

    let cin = prompt("Enter the CIN of candidat : ")

    for(let i = 0; i < conditats.length; i++){

        if(conditats[i].cin === cin){

            conditats.splice(i, 1)

            console.log("Candidat deleted")

            return
        }
    }

    console.log("Candidat not found")
}