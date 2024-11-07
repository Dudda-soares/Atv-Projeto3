$(document).ready(function(){

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000' 
    })
    $('#form-contato').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            }
        },   
        submitHandler: function(form){

        let dadosForm = {};

        $('#form-contato').find('input').each(function(){
            let nome = $(this).attr('name');
            let valor = $(this).val(); 
            
            dadosForm[nome] = valor;
            
        });

        console.log (dadosForm);

        Swal.fire({
            title: 'Sucesso!',
            text: 'Dados enviados com sucesso!',
            icon: 'success',
            confirmButtonText: 'ok'
        });

        
        form.reset()
    },
        invalidHandler: function(event, validator) {
            Swal.fire({
                title: 'Erro!',
                text: 'Por favor, preencha os campos para prosseguir!',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
        }
   
    }) 
})
