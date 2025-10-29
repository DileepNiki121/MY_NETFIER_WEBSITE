const container = document.getElementById('container');
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');

signUpButton.addEventListener('click', () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
  container.classList.remove("right-panel-active");
});

//=========================================

//  const count = "0"; // replace this with a dynamic number later
//   const visitorcontainer = document.getElementById("visitor-counter");

//   [...count].forEach(digit => {
//     const img = document.createElement("img");
//     img.src = `digits/${digit}.png`; // points to digit image
//     img.style.height = "40px";       // adjust size
//     container.appendChild(img);
//   });

 
    // This function will run every time the "More Info" button is clicked
    function toggleMobileMenu() {
        // 1. Get the element that holds the hidden links (Home, About, Search, etc.)
        const menuItems = document.getElementById('mobile-menu-items');
        
        // 2. The magic step: toggle the 'active' class on and off.
        // If the menu has the 'active' class, it removes it (hides the menu).
        // If it does NOT have the 'active' class, it adds it (shows the menu).
        menuItems.classList.toggle('active');
    }
 

    document.addEventListener('DOMContentLoaded', () => {
    // Select all navigation links that should trigger the scroll/highlight
    document.querySelectorAll('.nav-link-item').forEach(link => {
        link.addEventListener('click', function(e) {
            // 1. Stop the browser's default jump behavior
            e.preventDefault(); 

            // Get the target section ID (e.g., '#jobs-section' from the link's href)
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            // Check if the target element exists on the page
            if (targetElement) {
                
                // 2. Smoothly scroll to the target section
                targetElement.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' // Scrolls so the section starts at the top of the viewport
                });

                // 3. Add the highlight class immediately
                targetElement.classList.add('highlight-flash');

                // 4. Remove the highlight class after 2000 milliseconds (2 seconds)
                // This duration MUST match the '2s' in your CSS animation.
                setTimeout(() => {
                    targetElement.classList.remove('highlight-flash');
                }, 5000); 
            }
        });
    });
});
