$(document).ready(function(e){

    $('#cpf').mask('000.000.000.00');
    $('#telefone').mask('(00) 00000-0000')
    
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

            cpf: {
                required: true,
                cpf: true
            }
        },

        messages: {
            
            nome: {
                required: "Por favor, insira seu nome !"
            },

            email: {
                required: "Por favor, insira um email válido !"
            },

            cpf: {
                required: "Por favor, insira um CPF válido !"
            }
        },

        submitHandler: function(form){
            alert('Muito bem, seu cadastro foi concluído !')
        },

        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            alert(`Faltou preencher ${camposIncorretos} campos !`);
        }

    });
});
