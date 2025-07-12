document.addEventListener('DOMContentLoaded', function() {
    // Get current page path
    const currentPath = window.location.pathname;
    
    // Get all nav links
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Remove any existing active classes
    navLinks.forEach(link => {
        link.classList.remove('active');
        
        // Get the href attribute
        const href = link.getAttribute('href');
        
        // Check if the current path matches the link's href
        if (href) {
            // Remove leading slash for comparison
            const cleanHref = href.replace(/^\//, '');
            const cleanPath = currentPath.replace(/^\//, '');
            
            if (cleanPath === cleanHref || 
                (cleanPath === '' && cleanHref === 'Home_page.html') ||
                (cleanPath.includes(cleanHref) && cleanHref !== 'Home_page.html')) {
                link.classList.add('active');
            }
        }
    });
    
    // Get the dark mode toggle checkbox
    const darkModeToggle = document.querySelector('.darkmode-input');
    
    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        darkModeToggle.checked = true;
    }
    
    // Add event listener for dark mode toggle
    darkModeToggle.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'disabled');
        }
    });

    // Sidebar toggle functionality
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const toggleButton = document.querySelector('.menu-toggle img');

    menuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('collapsed');
        menuToggle.classList.toggle('active');
        
        // Save the sidebar state to localStorage
        const isCollapsed = sidebar.classList.contains('collapsed');
        localStorage.setItem('sidebarCollapsed', isCollapsed);
        
        // Hide the sidebar when collapsed
        if (isCollapsed) {
            sidebar.style.display = 'none'; // Hide the sidebar
        } else {
            sidebar.style.display = 'block'; // Show the sidebar
        }
    });

    // Check for saved sidebar state on page load
    const savedSidebarState = localStorage.getItem('sidebarCollapsed');
    if (savedSidebarState === 'true') {
        sidebar.classList.add('collapsed');
        menuToggle.classList.add('active');
    }

    // Close sidebar on mobile when clicking outside
    document.addEventListener('click', function(event) {
        const isMobile = window.innerWidth <= 768;
        const clickedOutsideSidebar = !sidebar.contains(event.target);
        const clickedOutsideToggle = !menuToggle.contains(event.target);

        if (isMobile && clickedOutsideSidebar && clickedOutsideToggle && !sidebar.classList.contains('collapsed')) {
            sidebar.classList.add('collapsed');
            menuToggle.classList.remove('active');
        }
    });
});

function validateLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    if (email && password) {
        // Show loading overlay
        const loadingOverlay = document.getElementById('loadingOverlay');
        loadingOverlay.classList.add('active');
        
        // Simulate loading time (you can remove setTimeout in production)
        setTimeout(() => {
            window.location.href = 'Home_page.html';
        }, 2000); // 2 seconds delay
        
        return false;
    } else {
        alert('Please enter both email and password');
        return false;
    }
}

function validateSignup(event) {
    event.preventDefault();
    
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    
    if (name && email && password) {
        // Show loading overlay
        const loadingOverlay = document.getElementById('loadingOverlay');
        loadingOverlay.classList.add('active');
        
        // Simulate loading time (you can remove setTimeout in production)
        setTimeout(() => {
            alert('Account created successfully!');
            window.location.href = 'Home_page.html';
        }, 2000); // 2 seconds delay
        
        return false;
    } else {
        alert('Please fill in all fields');
        return false;
    }
}