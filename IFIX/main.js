document.addEventListener('DOMContentLoaded', function () {
    // Get all service items and dots
    const serviceItems = document.querySelectorAll('.service-item a.h3');
    const dots = document.querySelectorAll('.dot');

    // Create a mapping between service items and their corresponding dots
    const serviceDotMap = {
        'serviceImg01': 'dot-top',
        'serviceImg02': 'dot-bottom',
        'serviceImg03': 'dot-right',
        'serviceImg04': 'dot-left'
    };

    // Add hover event listeners to service items
    serviceItems.forEach(item => {
        const targetId = item.getAttribute('data-bs-target').substring(1);
        const correspondingDot = document.querySelector(`.${serviceDotMap[targetId]}`);
        const tabTrigger = new bootstrap.Tab(item);

        item.addEventListener('mouseenter', () => {
            item.classList.add('active');
            correspondingDot.classList.add('active');
            tabTrigger.show();
        });

        item.addEventListener('mouseleave', () => {
            item.classList.remove('active');
            correspondingDot.classList.remove('active');
        });
    });

    // Add hover event listeners to dots
    dots.forEach(dot => {
        const targetId = dot.getAttribute('data-bs-target').substring(1);
        const correspondingText = document.querySelector(`a[data-bs-target="#${targetId}"]`);

        dot.addEventListener('mouseenter', () => {
            dot.classList.add('active');
            correspondingText.classList.add('active');
        });

        dot.addEventListener('mouseleave', () => {
            dot.classList.remove('active');
            correspondingText.classList.remove('active');
        });
    });
}); 