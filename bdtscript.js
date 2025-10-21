document.addEventListener('DOMContentLoaded', function () {
    // ===== RADIO "OUTRO" =====
    const gruposRadio = document.querySelectorAll('.radio-group-bdt');
  
  
    gruposRadio.forEach(grupo => {
      const radios = grupo.querySelectorAll('input[type="radio"]');
      const outroInput = grupo.querySelector('.input-outro-bdt');
  
  
      radios.forEach(radio => {
        radio.addEventListener('change', () => {
          if (radio.value.toLowerCase() === 'outro' && radio.checked) {
            if (outroInput) {
              outroInput.disabled = false;
              outroInput.focus();
            }
          } else {
            if (outroInput) {
              outroInput.disabled = true;
              outroInput.value = '';
            }
          }
        });
      });
    });
  
  
    // ===== CHECKBOX "OUTRO" =====
    const gruposCheckbox = document.querySelectorAll('.checkbox-group-bdt');
  
  
    gruposCheckbox.forEach(grupo => {
      const checkboxOutro = grupo.querySelector('input[type="checkbox"][value="Outros"]');
      const outroInput = grupo.querySelector('.input-outro-bdt');
  
  
      if (checkboxOutro && outroInput) {
        checkboxOutro.addEventListener('change', () => {
          outroInput.disabled = !checkboxOutro.checked;
          if (!checkboxOutro.checked) {
            outroInput.value = '';
          } else {
            outroInput.focus();
          }
        });
      }
    });
  });
  
