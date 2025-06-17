document.addEventListener('keydown', (event) => {
    if (event.key === 'F12' || (event.ctrlKey && event.shiftKey && event.key ==='I')){
       event.preventDefault;
    }
    
});
document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
})