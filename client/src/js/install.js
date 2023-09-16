const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA

// listen for the 'beforeinstallprompt' event
window.addEventListener('beforeinstallprompt', (event) => {

    // Prevent the default behavior of the event
	//shows browser install prompt
    event.preventDefault();

    // makes the 'butInstall' button visible.
    butInstall.style.visibility = 'visible';

    // sets the text content of the butInstall button to Install App
    butInstall.textContent = 'Install App';
});

// Logic for when the app is installed

window.addEventListener('appinstalled', (event) => {
    // Log the app installation event to analytics
    console.log('App was installed', event);
});