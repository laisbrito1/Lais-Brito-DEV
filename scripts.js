
//botão de copiar texto
document.addEventListener('DOMContentLoaded', function() {
    var emailElement = document.querySelector('.copy-email');
    var copyButton = document.getElementById('copy-button');

    emailElement.addEventListener('click', copyEmail);
    copyButton.addEventListener('click', copyEmail);

    function copyEmail() {
        var emailAddress = 'lais_thauanne@outlook.com';

        // Cria um elemento de input temporário
        var tempInput = document.createElement('input');
        tempInput.setAttribute('value', emailAddress);
        document.body.appendChild(tempInput);

        // Copia o valor do input para a área de transferência
        tempInput.select();
        document.execCommand('copy');

        // Remove o elemento de input temporário
        document.body.removeChild(tempInput);

        // Altera o texto do botão após a cópia
    var copyButton = document.getElementById('copy-button');
    copyButton.innerHTML = 'Email copied!';}
});

//mudar cor do ccs


const html = document.querySelector("#html");
const checkbox= document.querySelector ("#switch");

checkbox.addEventListener('change', function(){
    html.classList.toggle("light-mode");
})



var originalText = ''; // Variable to store the original text
var originalText2 = ''; // Variable to store the original text

function mudarTexto() {
    var elementoTexto = document.getElementById('texto');
    var elementoTexto2 = document.getElementById('texto2');

    var botao = document.getElementById('en');

    if (botao.innerHTML === 'EN') {
        // Save the original text and change the button and element text to Portuguese
        originalText = elementoTexto.innerHTML;
        originalText2 = elementoTexto2.innerHTML;

      
        botao.innerHTML = 'PT';
        elementoTexto.innerHTML = ' I am Brazilian and passionate about technology. Currently studying Computer Science at university.  I have experience working in the field of marketing and social media, editing images and videos,  hosting live streams and broadcasts, and creating visual identities.  Knowledge in Networks and technical support, monitoring, testing and opening tickets. I am highly communicative and have a strong focus and proactivity in problem-solving. Developing websites with Javascript, Wordpress, python and PHP.';
        elementoTexto2.innerHTML = 'fullStack developer and Designer';
     
    } else {
        // If the current text is 'Português', revert to English
        botao.innerHTML = 'EN';
        elementoTexto.innerHTML = originalText;
        elementoTexto2.innerHTML = originalText2;
        elementoTexto3.innerHTML = originalText3;
    }


  
}
