document.addEventListener("DOMContentLoaded", () => {
    // Video Player Controls
    const video = document.getElementById("video-player");
    const backwardButton = document.getElementById("backward");
    const forwardButton = document.getElementById("forward");
    if (video && backwardButton && forwardButton) {
        backwardButton.addEventListener("click", () => {
            video.currentTime -= 10; // Seek backward by 10 seconds
        });

        forwardButton.addEventListener("click", () => {
            video.currentTime += 10; // Seek forward by 10 seconds
        });
    }


    // Testimonial Slider Controls
    const slides = document.querySelectorAll(".testimonial-slide");
    let currentIndex = 0;
    let slideInterval;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
            if (i === index) {
                slide.classList.add("active");
            }
        });
    }

    function startSlideInterval() {
        slideInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        }, 3000);  // Adjust time as needed
    }

    document.querySelector(".prev").addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    });

    document.querySelector(".next").addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });

    // Auto-slide every 3 seconds
    startSlideInterval();

    // Pause the slide show when the cursor is over the testimonial slider
    const testimonialSlider = document.querySelector(".testimonial-slider");

    testimonialSlider.addEventListener("mouseover", () => {
        clearInterval(slideInterval);  // Stop the slideshow
    });

    testimonialSlider.addEventListener("mouseout", () => {
        startSlideInterval();  // Restart the slideshow
    });

    // Initial load for both video and testimonial
    showSlide(currentIndex);
});

// Book now button controls
document.addEventListener("DOMContentLoaded", function () {
    // Target the 'Book Now' button
    const bookNowButton = document.querySelector('.cta-button');
    
    // Create floating window container
    const floatingWindow = document.createElement('div');
    floatingWindow.classList.add('floating-window');
    
    // Create the header and close button for the form
    const windowHeader = document.createElement('div');
    windowHeader.classList.add('floating-header');
    windowHeader.innerHTML = 'Book Your Spot';
    
    const closeButton = document.createElement('button');
    closeButton.classList.add('close-btn');
    closeButton.textContent = '✖';
    
    windowHeader.appendChild(closeButton);
    floatingWindow.appendChild(windowHeader);
    
    // Clone the booking form (already present in the footer) and append it to the floating window
    const bookingForm = document.querySelector('#booking-form').cloneNode(true);
    floatingWindow.appendChild(bookingForm);
    
    // Create an overlay background to dim the content
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);
    
    // Append the floating window to the body
    document.body.appendChild(floatingWindow);
    
    // Show the floating window when the Book Now button is clicked
    bookNowButton.addEventListener('click', function () {
        floatingWindow.style.display = 'block';
        overlay.style.display = 'block';
    });
    
    // Close the floating window when the close button is clicked
    closeButton.addEventListener('click', function () {
        floatingWindow.style.display = 'none';
        overlay.style.display = 'none';
    });
    
    // Close the floating window when the overlay is clicked
    overlay.addEventListener('click', function () {
        floatingWindow.style.display = 'none';
        overlay.style.display = 'none';
    });
});
