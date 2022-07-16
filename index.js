const firstEmoji = document.querySelector('closed');
const secondEmoji = document.querySelector('open');

// Add Event Lister

firstEmoji.addEventListener('click', () => {
    if (firstEmoji.classList.contains.closed) {
        firstEmoji.classList.remove('active');
        secondEmoji.classList.add('active');
    }
})
    
secondEmoji.addEventListener('click', () => {
    if (secondEmoji.classList.contains.open) {
        secondEmoji.classList.remove('active');
        firstEmoji.classList.add('active');
    }
})