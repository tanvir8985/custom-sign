// grab from input box and calculates cost; then display a statement

function grabInput() {

    let inputfield = document.querySelector('#cost').value;
    let numberOfChar = inputfield.length;
    let result = numberOfChar * 3;

    let statement = result + ' dollars only!!!';
    document.querySelector('#para').innerHTML = statement;


}

// resets everything to empty string to re-use
function reset() {
    document.querySelector('#para').innerHTML = '';
    document.querySelector('#cost').value = '';
    document.querySelector('span').innerHTML = '';

}

// preview the value with bigger text and text shadow
function preview() {
    let inputfield = document.querySelector('#cost').value;
    document.querySelector('span').innerHTML = inputfield;
}