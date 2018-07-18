const customapp = document.querySelector('custom-app');
    customapp.addEventListener('action', (event) => {
      console.log(`"action" emitted: ${event.detail}`);
    })
    customapp.addEventListener('menuitem', (event) => {
      console.log(`"menuitem" emitted: ${event.detail}`);
    })
    setTimeout(() => customapp.label = 'Second Value', 3000);

    function loadWebComponentsModule() {
      console.log('vv');
    }
