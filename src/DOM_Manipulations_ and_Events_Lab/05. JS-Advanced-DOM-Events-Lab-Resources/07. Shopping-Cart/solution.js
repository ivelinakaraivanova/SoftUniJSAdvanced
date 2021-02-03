function solve() {
   const output = document.querySelector('textarea');

   const cart = [];

   document.querySelector('.shopping-cart').addEventListener('click', (ev) => {
      if (ev.target.tagName == 'BUTTON' && ev.target.className == 'add-product') {
         const product = ev.target.parentNode.parentNode;
         // console.log(product);
         const name = product.querySelector('.product-title').textContent;
         const price = Number(product.querySelector('.product-line-price').textContent);
         cart.push({ name, price });
         output.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;

      }
   })

   document.querySelector('.checkout').addEventListener('click', () => {
      const result = cart.reduce((acc, c) => {
         acc.items.add(c.name);
         acc.total += c.price;
         return acc;
      }, { items: new Set(), total: 0 });

      output.value += `You bought ${Array.from(result.items).join(', ')} for ${result.total.toFixed(2)}.`;
      Array.from(document.querySelectorAll('button')).forEach(x => x.disabled = true);
   })

}