export default function contactsComponent() {
    const contactsContainerEl = document.createElement('div');
    const workingHoursContainerEl = document.createElement('div')
    const workingHoursTitleEl = document.createElement('h3');
    const workingHoursContentEl = document.createElement('p'); 
    const addressContainerEl = document.createElement('div')
    const addressTitleEL = document.createElement('h3');
    const addressContentEL = document.createElement('p');
    const telContainerEl = document.createElement('div')
    const telTitleEL = document.createElement('h3');
    const telContentEl = document.createElement('p');
    
    contactsContainerEl.classList.add('contacts-container')

    workingHoursTitleEl.textContent = 'We are open: ';
    workingHoursContentEl.textContent = 'Mn-St 8-21';
    addressTitleEL.textContent = 'Our address: '
    addressContentEL.textContent = 'Somewhere, 12';
    telTitleEL.textContent = 'Contact us: ';
    telContentEl.textContent = '923423523';

    contactsContainerEl.append(workingHoursContainerEl);
    workingHoursContainerEl.append(workingHoursTitleEl);
    workingHoursContainerEl.append(workingHoursContentEl);

    contactsContainerEl.append(addressContainerEl);
    addressContainerEl.append(addressTitleEL);
    addressContainerEl.append(addressContentEL);

    contactsContainerEl.append(telContainerEl);
    telContainerEl.append(telTitleEL);
    telContainerEl.append(telContentEl);
    
    return contactsContainerEl
}