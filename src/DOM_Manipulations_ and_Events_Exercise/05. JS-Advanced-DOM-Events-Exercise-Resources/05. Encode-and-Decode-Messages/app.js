function encodeAndDecodeMessages() {
    
    const encodeBtn = document.querySelectorAll('button')[0];
    const firstTextArea = document.querySelectorAll('textarea')[0];

    const decodeBth = document.querySelectorAll('button')[1];
    const secondTextArea = document.querySelectorAll('textarea')[1];

    function encodeMessage() {
        let message = firstTextArea.value.split('')
        .map(ch => ch.charCodeAt())
        .map(ch => String.fromCharCode(ch + 1))
        .join('');
         
        firstTextArea.value = '';
        secondTextArea.value = message;
    }

    function decodeMessage() {
        let message = secondTextArea.value.split('')
        .map(ch => ch.charCodeAt())
        .map(ch => String.fromCharCode(ch - 1))
        .join('');
         
        secondTextArea.value = message;
    }

    encodeBtn.addEventListener('click', encodeMessage);
    decodeBth.addEventListener('click', decodeMessage);

}