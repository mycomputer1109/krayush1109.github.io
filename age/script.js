// Challenge 1 : Your Age in Days


function ageInDays() {

    var birthYear = prompt('Enter Your Date of birth');
    var dayss = (2020 - birthYear)*365;
    var h1= document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' +dayss + 'days old');
    h1.setAttribute('id', 'ageInDays'  );
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);

    console.log(dayss);

}


function reset() {
    document.getElementById('ageInDays').remove();
}