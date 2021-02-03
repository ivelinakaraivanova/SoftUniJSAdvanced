function solve() {
  const input = document.getElementById('input').value.split('.').filter(s => s.length > 0);

let text = '';

  for (let i = 0; i < input.length; i += 3) {
    let sent = [];

    for (let j = 0; j < 3; j++) {
      if (input[i + j]) {
        sent.push(input[i + j]);
      }
    }

    let para = `<p>${sent.join('. ') + '.'}</p>\n`;
    text += para;
    // console.log(text);
  }
    document.getElementById('output').innerHTML = text;
}
