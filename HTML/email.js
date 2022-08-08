const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_q233f94';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Envie uma mensagem';
      alert(' ENVIADO! AGRADEÇO PELO SEU CONTATO :) ');
    }, (err) => {
      btn.value = 'Envie uma mensagem';
      alert(JSON.stringify(err));
    });
});