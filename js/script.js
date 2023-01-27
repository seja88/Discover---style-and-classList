const alerts = [
    'Unable to access resource. User is not authorized.',
    'You are missing proper user permissions.',
    'Administrators have been notified of this action.',
    'Please remain where you are, police is on the way.'
];

const newDiv = document.createElement('div')
newDiv.className = 'alerts'
document.body.appendChild(newDiv)



for (let i = 0; i < alerts.length; i++) {
    const alert = alerts[i];
    const alertElement = document.createElement('div');
    const alertElementText = document.createElement('div');
    const alertElementClose = document.createElement('div');
    alertElement.classList.add('alert');
    alertElementText.classList.add('alert__text');
    alertElementClose.classList.add('alert__close');
    alertElementText.innerHTML = alert;
    alertElementClose.innerHTML = '&times;';
    newDiv.appendChild(alertElement);
    alertElement.appendChild(alertElementText);
    alertElement.appendChild(alertElementClose);
}
