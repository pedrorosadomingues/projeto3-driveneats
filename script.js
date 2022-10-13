 let contadores= [0,0,0]

function selectProduct(option) {
    if (option === 1) {
    prato1.style = "border: 4px solid green";
    prato1Selected.style = "display: block";
    prato2Selected.style = "display: none" ; 
    prato2.style = "border:none";
    prato3.style = "border:none";
    prato3Selected.style = "display: none";
    contadores[0] = 1;

    } else if (option === 2) {
    prato2.style = "border: 4px solid green";
    prato2Selected.style = "display: block";
    prato1Selected.style = "display: none";
    prato1.style = "border:none";
    prato3.style = "border:none";
    prato3Selected.style = "display: none";
    contadores[0] = 1;

    } else if (option === 3) {
    prato3.style = "border: 4px solid green";
    prato3Selected.style = "display: block";
    prato1Selected.style = "display: none";
    prato1.style = "border:none";
    prato2.style = "border:none";
    prato2Selected.style = "display: none";
    contadores[0] = 1;
    
    } else if (option === 4) {
    bebida1.style = "border: 4px solid green";
    bebida1Selected.style = "display: block";
    bebida2Selected.style = "display: none";
    bebida2.style = "border:none";
    bebida3.style = "border:none";
    bebida3Selected.style = "display: none";
    contadores[1] = 1;

    } else if (option === 5) {
    bebida2.style = "border: 4px solid green";
    bebida2Selected.style = "display: block";
    bebida1Selected.style = "display: none";
    bebida1.style = "border:none";
    bebida3.style = "border:none";
    bebida3Selected.style = "display: none";
    contadores[1] = 1;

    } else if (option === 6) {
    bebida3.style = "border: 4px solid green";
    bebida3Selected.style = "display: block";
    bebida1Selected.style = "display: none";
    bebida1.style = "border:none";
    bebida2.style = "border:none";
    bebida2Selected.style = "display: none";
    contadores[1] = 1;
    
    }else if ( option === 7) {
    sobremesa1.style = "border: 4px solid green";
    sobremesa1Selected.style = "display: block";
    sobremesa2Selected.style = "display: none";
    sobremesa2.style = "border:none";
    sobremesa3.style = "border:none";
    sobremesa3Selected.style = "display: none";
    contadores[2] = 1;

    } else if (option === 8) {
    sobremesa2.style = "border: 4px solid green";
    sobremesa2Selected.style = "display: block";
    sobremesa1Selected.style = "display: none";
    sobremesa1.style = "border:none";
    sobremesa3.style = "border:none";
    sobremesa3Selected.style = "display: none";
    contadores[2] = 1;

    }
    else if (option === 9) {
    sobremesa3.style = "border: 4px solid green";
    sobremesa3Selected.style = "display: block";
    sobremesa1Selected.style = "display: none";
    sobremesa1.style = "border:none";
    sobremesa2.style = "border:none";
    sobremesa2Selected.style = "display: none";
    contadores[2] = 1;
    
    }

    if ( contadores[0] === 1 && contadores[1] === 1 && contadores[2] === 1) {
        buttonFinish.style = "background: green";
        buttonFinish.innerHTML = "Fechar pedido";
    }

}