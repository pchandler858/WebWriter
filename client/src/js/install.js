const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  console.log("success!", "beforeinstallprompt", event);
  window.deferredPrompt = event;
  butInstall.classList.toggle("hidden", false);
});

butInstall.addEventListener("click", async () => {
  console.log("success!", "butInstall-clicked");
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    // The deferred prompt isn't available.
    return;
  }
  // Show the install prompt.
  promptEvent.prompt();

  // reset the deferred prompt variable
  window.deferredPrompt = null;
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
  console.log("success!", "butInstall-clicked");
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    // The deferred prompt isn't available.
    return;
  }
  // Show the install prompt.
  promptEvent.prompt();

  // reset the deferred prompt variable
  window.deferredPrompt = null;

  // Hide the install button.
  butInstall.classList.toggle("hidden", true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  console.log("success!", "appinstalled", event);
  window.deferredPrompt = null;
});
