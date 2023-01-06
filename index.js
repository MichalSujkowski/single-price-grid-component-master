const btn = document.querySelector('button');
const modal = document.querySelector('.modal');

btn.addEventListener('click', () => {
    modal.classList.add('active');
    console.log('click work');
});
modal.addEventListener('click', () => {
    modal.classList.remove('active')
})