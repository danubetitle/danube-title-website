document.addEventListener('DOMContentLoaded', () => {
    // Navigation Tab Switching Logic
    const navButtons = document.querySelectorAll('.nav-btn[data-target]');
    const tabContents = document.querySelectorAll('.tab-content');

    function switchTab(targetId) {
        // Remove active class from all tabs and buttons
        tabContents.forEach(tab => tab.classList.remove('active'));
        
        // Handle nav buttons specifically to toggle active state visually
        document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));

        // Add active class to target tab
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.classList.add('active');
        }

        // Highlight the corresponding root nav button
        // If it's a dropdown item, highlight its parent trigger or just itself
        const activeBtn = document.querySelector(`.nav-btn[data-target="${targetId}"]`);
        if (activeBtn) {
            activeBtn.classList.add('active');
            // If it's inside a dropdown, keep the 'Services' menu looking active too if desired
            if (activeBtn.classList.contains('dropdown-item')) {
                activeBtn.closest('.dropdown').querySelector('.dropdown-toggle').classList.add('active');
            }
        }
        
        // Scroll to top of the content area smoothly if not already there
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Attach click events to nav buttons
    navButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const target = btn.getAttribute('data-target');
            if (target) {
                switchTab(target);
            }
        });
    });

    // Handle Order Form Submission
    const orderForm = document.getElementById('order-form');
    const orderSuccess = document.getElementById('order-success');
    if (orderForm) {
        orderForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Simulate API call
            const submitBtn = orderForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Submitting...';
            submitBtn.disabled = true;

            setTimeout(() => {
                orderForm.style.display = 'none';
                orderSuccess.classList.remove('hidden');
                orderForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1000);
        });
    }

    // Handle Mock Authentication
    const loginForm = document.getElementById('login-form');
    const authPanel = document.getElementById('auth-panel');
    const trackingDashboard = document.getElementById('tracking-dashboard');
    const logoutBtn = document.getElementById('logout-btn');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Simulate Login
            const submitBtn = loginForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Authenticating...';
            submitBtn.disabled = true;

            setTimeout(() => {
                authPanel.classList.add('hidden');
                trackingDashboard.classList.remove('hidden');
                loginForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 800);
        });
    }

    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            trackingDashboard.classList.add('hidden');
            authPanel.classList.remove('hidden');
        });
    }
});
