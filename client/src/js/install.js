const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA

window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    // toggle hidden class from the button
    butInstall.classList.toggle('hidden', false);
});


butInstall.addEventListener('click', async () => {

    const promptEvent = window.deferredPrompt;
    if(!promptEvent){
        return;
    }
    // give prompt
    promptEvent.prompt();
    // reset
    window.deferredPrompt = null;

    butInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    
    // clear prompt
    window.deferredPrompt = null;
});
