/* JavaScript vainilla: cada interacción comprueba que su elemento existe.
   El contenido y la navegación funcionan también con JavaScript desactivado. */
'use strict';

// Ejemplo CSS: actualizamos una variable CSS al mover el control.
const paddingControl = document.querySelector('#padding-control');
const paddingValue = document.querySelector('#padding-value');
const demoBox = document.querySelector('#demo-box');
if (paddingControl && paddingValue && demoBox) {
  paddingControl.addEventListener('input', () => {
    const value = paddingControl.value;
    demoBox.style.setProperty('--padding', `${value}px`);
    paddingValue.textContent = `${value} px`;
  });
}

// Ejemplo DOM: el texto cambia al escuchar un clic.
const greetingButton = document.querySelector('#greeting-button');
const greetingMessage = document.querySelector('#greeting-message');
if (greetingButton && greetingMessage) {
  greetingButton.addEventListener('click', () => {
    greetingMessage.textContent = '¡Hola, DAM! Has actualizado el DOM con JavaScript.';
  });
}

// Lista del proyecto: solo cuenta los controles marcados en esta página.
// No se guardan datos; al recargar vuelve al estado inicial.
const checklist = document.querySelector('#project-checklist');
const checklistStatus = document.querySelector('#checklist-status');
if (checklist && checklistStatus) {
  const boxes = checklist.querySelectorAll('input[type="checkbox"]');
  const updateStatus = () => {
    const completed = Array.from(boxes).filter((box) => box.checked).length;
    checklistStatus.textContent = `${completed} de ${boxes.length} comprobaciones completadas.`;
  };
  checklist.addEventListener('change', updateStatus);
  updateStatus();
}
