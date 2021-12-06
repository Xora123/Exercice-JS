
function maFunction(age, genre){
    if(age >= 18){
        console.log("Tu es majeur")
    }
    if(age < 18){
        console.log("Tu es mineur")
    }
    if(genre == "Homme"){
        console.log("Homme")
    }
    if (genre == "Femme"){
        console.log("Femme")
    }
}

maFunction(19,"Homme");