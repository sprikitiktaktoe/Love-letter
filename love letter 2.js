const envelope = document.getElementById('envelope');
const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');

openBtn.addEventListener('click', () => {
    envelope.classList.add('open');
});

closeBtn.addEventListener('click', () => {
    envelope.classList.remove('open');
});