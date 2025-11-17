// Função genérica para aplicar máscaras
function applyMask(input, mask, event) {
    if (event.inputType === 'deleteContentBackward') return; // Ignora o backspace
    
    let value = input.value.replace(/\D/g, ''); // Remove tudo que não é dígito
    let maskedValue = '';
    let k = 0;

    // Itera sobre a máscara
    for (let i = 0; i < mask.length; i++) {
        if (k >= value.length) break;
        
        if (mask[i] === '9') { // '9' representa um dígito
            maskedValue += value[k];
            k++;
        } else {
            maskedValue += mask[i]; // Caractere fixo
        }
    }
    input.value = maskedValue;
}


document.addEventListener('DOMContentLoaded', () => {
    const cpfInput = document.getElementById('cpf');
    const telInput = document.getElementById('telefone');
    const cepInput = document.getElementById('cep');

    if (cpfInput) {
        cpfInput.addEventListener('input', (e) => applyMask(e.target, '999.999.999-99', e));
    }
    
    if (telInput) {
       
        telInput.addEventListener('input', (e) => {
            let mask = '99999999999'; 
            if (e.target.value.replace(/\D/g, '').length <= 10) {
                mask = '9999999999'; 
            }
            
            let finalMask = mask.length === 11 ? '(99) 99999-9999' : '(99) 9999-9999';
            applyMask(e.target, finalMask, e);
        });
    }

    if (cepInput) {
        cepInput.addEventListener('input', (e) => applyMask(e.target, '99999-999', e));
    }
});
