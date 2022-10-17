let contadores = [0, 0, 0]

let buttonFinishOn = document.querySelector("#buttonFinishOn")

let prato = ``

let bebida = ``

let sobremesa = ``

let descricaoPrato = ``

let descricaoBebida = ``

let descricaoSobremesa = ``

let valorPrato = 0

let valorBebida = 0

let valorSobremesa = 0

let valorTotal = 0

let mensagemWhatsapp = ``

function selectProduct(option) {
    if (option === 1) {
        prato1.style = "border: 4px solid green";
        prato1Selected.style = "display: block";
        prato2Selected.style = "display: none";
        prato2.style = "border:none";
        prato3.style = "border:none";
        prato3Selected.style = "display: none";
        contadores[0] = 1;
        prato = `Frango Yin Yang`
        descricaoPrato = `Um pouco de batata, um pouco de salada`
        valorPrato = 14.90

    } else if (option === 2) {
        prato2.style = "border: 4px solid green";
        prato2Selected.style = "display: block";
        prato1Selected.style = "display: none";
        prato1.style = "border:none";
        prato3.style = "border:none";
        prato3Selected.style = "display: none";
        contadores[0] = 1;
        prato = `Frango com Legume`
        descricaoPrato = `Um pouco de batata, um pouco de legumes`
        valorPrato = 214.90

    } else if (option === 3) {
        prato3.style = "border: 4px solid green";
        prato3Selected.style = "display: block";
        prato1Selected.style = "display: none";
        prato1.style = "border:none";
        prato2.style = "border:none";
        prato2Selected.style = "display: none";
        contadores[0] = 1;
        prato = `Frango com Batata`
        descricaoPrato = `Um pouco de batata, um pouco de frango`
        valorPrato = 314.90

    } else if (option === 4) {
        bebida1.style = "border: 4px solid green";
        bebida1Selected.style = "display: block";
        bebida2Selected.style = "display: none";
        bebida2.style = "border:none";
        bebida3.style = "border:none";
        bebida3Selected.style = "display: none";
        contadores[1] = 1;
        bebida = `Coquinha gelada`
        descricaoBebida = `Lata 350ml`
        valorBebida = 4.90

    } else if (option === 5) {
        bebida2.style = "border: 4px solid green";
        bebida2Selected.style = "display: block";
        bebida1Selected.style = "display: none";
        bebida1.style = "border:none";
        bebida3.style = "border:none";
        bebida3Selected.style = "display: none";
        contadores[1] = 1;
        bebida = `Coquinha zero`
        descricaoBebida = `Lata 350ml`
        valorBebida = 24.90

    } else if (option === 6) {
        bebida3.style = "border: 4px solid green";
        bebida3Selected.style = "display: block";
        bebida1Selected.style = "display: none";
        bebida1.style = "border:none";
        bebida2.style = "border:none";
        bebida2Selected.style = "display: none";
        contadores[1] = 1;
        bebida = `Coquinha com álcool`
        descricaoBebida = `Copo 500ml`
        valorBebida = 34.90

    } else if (option === 7) {
        sobremesa1.style = "border: 4px solid green";
        sobremesa1Selected.style = "display: block";
        sobremesa2Selected.style = "display: none";
        sobremesa2.style = "border:none";
        sobremesa3.style = "border:none";
        sobremesa3Selected.style = "display: none";
        contadores[2] = 1;
        sobremesa = `Pudim`
        descricaoSobremesa = `Apenas pudim`
        valorSobremesa = 7.90

    } else if (option === 8) {
        sobremesa2.style = "border: 4px solid green";
        sobremesa2Selected.style = "display: block";
        sobremesa1Selected.style = "display: none";
        sobremesa1.style = "border:none";
        sobremesa3.style = "border:none";
        sobremesa3Selected.style = "display: none";
        contadores[2] = 1;
        sobremesa = `Pudim com leite condensado`
        descricaoSobremesa = `Pudim com leite condensado`
        valorSobremesa = 27.90

    }
    else if (option === 9) {
        sobremesa3.style = "border: 4px solid green";
        sobremesa3Selected.style = "display: block";
        sobremesa1Selected.style = "display: none";
        sobremesa1.style = "border:none";
        sobremesa2.style = "border:none";
        sobremesa2Selected.style = "display: none";
        contadores[2] = 1;
        sobremesa = `Pudim com coco`
        descricaoSobremesa = `Pudim com coco`
        valorSobremesa = 37.90

    }

    if (contadores[0] === 1 && contadores[1] === 1 && contadores[2] === 1) {
        buttonFinishOff.classList.add("hidden");
        buttonFinishOn.classList.remove("hidden");
       
    }
}


   


function finishOrder() {
 
    let clientName = prompt(`Digite seu nome:`)
    let adress = prompt(`Digite seu endereço:`)
    valorTotal = (valorPrato + valorBebida + valorSobremesa).toFixed(2);

    mensagemWhatsapp = `Olá, gostaria de fazer o pedido: \n - Prato: ${prato} - R$${valorPrato.toFixed(2)} \n - Bebida: ${bebida} - R$${valorBebida.toFixed(2)} \n - Sobremesa: ${sobremesa} - R$${valorSobremesa.toFixed(2)} \n Total: R$ ${valorTotal}\n\n Nome: ${clientName}\n Endereço: ${adress}`;

    mensagemWhatsapp = encodeURIComponent(mensagemWhatsapp);
  

    window.open(`https://wa.me/5561998648575?text=${mensagemWhatsapp}`);
}