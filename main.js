$(document).ready(function(){
    
    console.log('Carregou')

    $('#telefone').mask('(00)00000-0000');
    


    $('form').validate({
        rules: {

            nome: {
                required: true
            },

            email: {
                required: true,
                email: true
            },

            telefone: {
                required: false
            },

            mensagem: {
                required: true,
                minlength: 10,
                maxlength: 50
            }

        },

        messages: {

            nome: {
                required: "Por favor, insira seu nome !"
            },

            email: {
                required: "Por favor, insira seu email !"
                
            },

            mensagem : {
                required: "Por favor, insira uma mensagem !",
            }
        },

        submitHandler: function(form) {
            alert('Muito Bem! validação concluída !');
        },

        invalidHandler: function(e, validador){
            let camposIncorretos = validador.numberOfInvalids();

            if(camposIncorretos) {
                alert(`Faltou preencher ${camposIncorretos} campos ! Verifique e tente novamente !`);

            }
        }

        
        
        
    })

    
        
    
})