document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const posts = document.querySelectorAll('.post-card');

    // Kategori Filtreleme
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Aktif buton görselini güncelle
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            posts.forEach(post => {
                if (filterValue === 'all' || post.getAttribute('data-category') === filterValue) {
                    post.style.display = 'block';
                } else {
                    post.style.display = 'none';
                }
            });
        });
    });

    // Sayfa içi yumuşak kaydırma
    document.querySelector('.cta-btn').addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});