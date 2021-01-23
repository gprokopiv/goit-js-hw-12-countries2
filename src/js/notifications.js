// import { error, defaultModules, Stack } from '@pnotify/core/dist/PNotify.js';
// import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
// import { defaults } from '@pnotify/core';
// import '@pnotify/core/dist/PNotify.css';
// import '@pnotify/mobile/dist/PNotifyMobile.css';
// import '@pnotify/core/dist/BrightTheme.css';

// defaultModules.set(PNotifyMobile, {});

// defaults.delay = 3500;
// defaults.width = '380px';

// const myStack = new Stack({
//   modal: false,
//   dir1: 'down',
//   firstpos1: 0,
//   spacing1: 0,
//   push: 'top',
//   maxOpen: Infinity,
// });

// const showMessage = () => {
//   error({
//     title: 'Too many matches found. Please enter a more specific query!',
//     sticker: false,
//     stack: myStack,
//   });
// };

// const showError = () => {
//   error({
//     title: 'Error 404',
//     text: 'Country with this name was not found. Please try again.',
//     sticker: false,
//     stack: myStack,
//   });
// };

// export { showMessage, showError };
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css'; 
import { error } from '@pnotify/core/dist/PNotify.js';



export { error};