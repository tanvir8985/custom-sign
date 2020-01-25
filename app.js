function grabInput() {

    let inputfield = document.querySelector('#cost').value;
    let numberOfChar = inputfield.length;
    let result = numberOfChar * 3;

    let statement = result + ' dollars only!!!';
    document.querySelector('#para').innerHTML = statement;


}

function reset() {
    document.querySelector('#para').innerHTML = '';
    document.querySelector('#cost').value = '';
    document.querySelector('span').innerHTML = '';

}

function preview() {
    let inputfield = document.querySelector('#cost').value;
    document.querySelector('span').innerHTML = inputfield;
}