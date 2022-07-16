const firstEmoji = document.querySelector('closed');
const secondEmoji = document.querySelector('open');

firstEmoji.addEventListener('click', () => {
    if (firstEmoji.classList.contains.closed) {
        secondEmoji.classList.add('active');
        firstEmoji.classList.remove('active');
    }
 })