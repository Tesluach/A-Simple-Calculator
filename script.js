var btn = document.querySelector('button');
var result = document.querySelector('#result');
// Changing the border radius of all the inputs.
changingBorderRadius();
btn.addEventListener('click', function(e) {

    //The function that calculates the inputs that calculates the values
    calculation();

});

function calculation() {
    var num_1 = parseFloat(document.getElementById('num1').value);
    var num_2 = parseFloat(document.getElementById('num2').value);

    var select = document.querySelector('select');
    if (select.value === 'Add') {
        var res = num_1 + num_2;
        result.value = parseFloat(res);
    } else if (select.value === 'Subtract') {
        var res = num_1 - num_2;
        result.value = parseFloat(res);
    } else if (select.value === 'Multiply') {
        var res = num_1 * num_2;
        result.value = parseFloat(res);
    } else if (select.value === 'Divide') {
        var res = num_1 / num_2;
        result.value = parseFloat(res);
    } else {
        alert('Please enter a correct operator.');
    }
}

function changingBorderRadius() {
    var inputs = document.querySelectorAll('input');
    // an arrow function used here 
    Array.from(inputs).forEach(el => {
        el.style.borderRadius = '10px';
    });
}