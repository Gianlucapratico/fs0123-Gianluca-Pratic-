var anni=prompt('inserisci la tua età:');
if(!(isNaN(anni))){
    if(anni>=18 && anni<100){
        document.write('Sei maggiorenne.')
    }else if(anni>100){
        document.write('Non mentire!! inserisci l eta corretta')
    }else{
        document.write('sei ancora minorenne.')
    }
   
    

}else{
    document.write("Non hai inserito numeri. Devi inserire solo cifre in questo prompt.");
}

