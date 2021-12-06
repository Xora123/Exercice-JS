a = 4;

b = 4;
function maFunction(a, b) {
    if (a > b){
        return("Le premier nombre est plus grand que le deuxième")
    }
    else if (a < b){
        console.log("Le deuxième nombre est plus grand que le premier")
    }
    else{
        console.log("Les deux nombres sont égaux");
        
    }
}
maFunction()