// Bio Overlay Toggle Functionality
// This will be called from the main DOMContentLoaded event in index.html
function initBioOverlay() {
    const bioOverlay = document.getElementById('bio-overlay');
    const roleElement = document.querySelector('.role');
    const closeBtn = document.getElementById('close-bio');

    // Function to show bio overlay
    function showBio() {
        bioOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    // Function to hide bio overlay
    function hideBio() {
        bioOverlay.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }

    // Click on role element to show bio
    if (roleElement) {
        roleElement.addEventListener('click', (e) => {
            e.preventDefault();
            showBio();
        });
    }

    // Click on close button to hide bio
    if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent triggering overlay click
            hideBio();
        });
    }

    // Click anywhere on overlay to hide bio (as requested)
    if (bioOverlay) {
        bioOverlay.addEventListener('click', hideBio);
    }

    // Press Escape key to hide bio
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && bioOverlay.classList.contains('active')) {
            hideBio();
        }
    });

    // Prevent clicks inside bio content from closing the overlay
    const bioContent = document.querySelector('.bio-content');
    if (bioContent) {
        bioContent.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }
}

// Note: This function will be called from the main DOMContentLoaded event in index.html
// No need for a separate event listener here to avoid conflicts
