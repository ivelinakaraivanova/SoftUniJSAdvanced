function solve() {
  let text = document.getElementById('text').value.toLowerCase().split(' ');
  let caseConv = document.getElementById('naming-convention').value;

  function caseTransformation(word) {
    return word[0].toUpperCase() + word.slice(1);
  }

  let initialIndex;
  let isError = false;

  if (caseConv == 'Pascal Case') {
    initialIndex = 0;
  } else if (caseConv == 'Camel Case') {
    initialIndex = 1;
  } else {
    initialIndex = text.length;
    isError = true;
  }

  for (let i = initialIndex; i < text.length; i++) {
    text[i] = caseTransformation(text[i]);
  }

  let result = '';

  if (isError) {
    result = 'Error!';
  } else {
    result = text.join('');
  }

  document.getElementById('result').textContent = result;
  // console.log(text);
}