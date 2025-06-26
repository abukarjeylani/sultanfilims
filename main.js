document.querySelectorAll('.filter').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const type = btn.getAttribute('data-type');
    document.querySelectorAll('.gallery-item').forEach(item => {
      item.style.display = (type === 'all' || item.dataset.type === type) ? 'block' : 'none';
    });
  });
});