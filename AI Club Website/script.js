const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length){
    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting){
                entry.target.classList.add('visible');
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
    revealEls.forEach(el => io.observe(el));
}

const track = document.querySelector('.ticker .track');
if (track){
    track.innerHTML = track.innerHTML + track.innerHTML;
}