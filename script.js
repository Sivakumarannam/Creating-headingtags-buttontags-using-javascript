let h1element = document.createElement('h1');
h1element.textContent = 'Web Technologies';

let divcontainer = document.getElementById('mycontainer');
divcontainer.appendChild(h1element);

let btnelement = document.createElement('button');
btnelement.textContent = 'Change Heading';
divcontainer.appendChild(btnelement);

btnelement.onclick = function () {
    if (h1element.textContent === 'Web Technologies') {
        h1element.textContent = '4.0 Technologies';
        h1element.classList.add('heading');
    } else {
        h1element.textContent = 'Web Technologies';
        h1element.classList.remove('heading');
    }
};

let removestylebtnelement = document.createElement('button');
removestylebtnelement.textContent = 'Remove Styles';
divcontainer.appendChild(removestylebtnelement);

removestylebtnelement.onclick = function () {
    h1element.classList.remove('heading');
};
