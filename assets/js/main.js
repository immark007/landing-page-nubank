//Método para cpf

function formatCPF(cpf) {
    cpf = cpf.replace(/\D/g, ''); 
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    return cpf;
}

function onCPFInput(event) {
    let input = event.target;
    input.value = formatCPF(input.value);
}

document.addEventListener('DOMContentLoaded', function() {
    let cpfInput = document.getElementById('cpf');
    cpfInput.addEventListener('input', onCPFInput);
});
