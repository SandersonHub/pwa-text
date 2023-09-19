const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {

  //callback function
event.preventDefault();
// Stash the event so it can be triggered later.
butInstall.style.visibility = 'visible';
// Update the install UI, tells the user if the its actually installed or not.
butInstall.textContent = 'app should be installed'
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {

//sets the disabled attribute to true
//when the button is clicked it won't be able to be clicked again
butInstall.setAttribute('disabled', true);
butInstall.textContent = 'installing app...I think?';
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  console.log('installed', event);
});
