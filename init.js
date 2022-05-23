
window.onload = addPerson();

const create = document.getElementById('create');
const clear = document.getElementById('clear');

function addPerson() {
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surNameOutput').innerText = initPerson.surName;
    document.getElementById('PatroNameOutput').innerText = initPerson.PatroName;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('occupationOutput').innerText = initPerson.occupation;
    document.getElementById('birthYearOutput').innerText = initPerson.DayOfBirth;
};

function delPerson() {
    document.getElementById('firstNameOutput').innerText = '';
    document.getElementById('surNameOutput').innerText = '';
    document.getElementById('PatroNameOutput').innerText = '';
    document.getElementById('genderOutput').innerText = '';
    document.getElementById('occupationOutput').innerText = '';
    document.getElementById('birthYearOutput').innerText = '';
}

create.addEventListener('click', addPerson);
clear.addEventListener('click', delPerson);