const balloon = document.querySelector('.balloon');
const heart = document.querySelector('.heart');

balloon.addEventListener('click', () => {
    if (balloon.classList.contains('balloon')) {
        heart.classList.add('active');
        balloon.classList.remove('active');
    }
 });

 heart.addEventListener('click', () => {
    if (heart.classList.contains('heart')) {
        balloon.classList.add('active');
        heart.classList.remove('active')
    }
 })