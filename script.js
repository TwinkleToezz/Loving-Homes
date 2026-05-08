document.addEventListener('DOMContentLoaded', function() {

    function setupButtonGroup(containerId, hiddenInputId, dataAttr) {
        const container = document.getElementById(containerId);
        const hiddenInput = document.getElementById(hiddenInputId);
        
        // Only run if the elements exist on the current page
        if (container && hiddenInput) {
            const buttons = container.querySelectorAll('.package-btn');

            buttons.forEach(button => {
                button.addEventListener('click', function() {
                    buttons.forEach(btn => btn.classList.remove('active'));

                    this.classList.add('active');
                    hiddenInput.value = this.getAttribute(dataAttr) || this.innerText;
                    
                    console.log(`Selection updated for ${containerId}:`, hiddenInput.value);
                });
            });
        }
    }

    setupButtonGroup('packageSelector', 'selectedPackageInput', 'data-package');

    setupButtonGroup('contactReasonSelector', 'selectedReasonInput', 'data-value');


    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); 
        
            alert("Thank you! Your message has been sent to Loving Homes.");
            
            contactForm.reset();
            const buttons = contactForm.querySelectorAll('.package-btn');
            buttons.forEach(btn => btn.classList.remove('active'));
        });
    }
});