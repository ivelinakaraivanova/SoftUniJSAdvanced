function calculator() {
    let firstEl;
    let secEl;
    let resultEl;

    return {
        init: (selector1, selector2, resultSelector) => {
            firstEl = document.querySelector(selector1);
            secEl = document.querySelector(selector2);
            resultEl =  document.querySelector(resultSelector);
        },
        add: () => {
            resultEl.value = Number(firstEl.value) + Number(secEl.value);
        },
        subtract: () => {
            resultEl.value = Number(firstEl.value) - Number(secEl.value);
        }
    }   
}

const calculate = calculator(); 
calculate.init('#num1', '#num2', '#result'); 
