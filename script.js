// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.querySelector('.theme-toggle');
    const themeIcon = document.querySelector('.theme-icon');
    const body = document.body;
    let darkMode = false;
    
    // Check if user has a preference stored
    if (localStorage.getItem('darkMode') === 'true') {
        enableDarkMode();
    }
    
    themeToggle.addEventListener('click', function() {
        if (darkMode) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });
    
    function enableDarkMode() {
        darkMode = true;
        body.classList.add('dark-mode');
        themeIcon.textContent = '☀️';
        localStorage.setItem('darkMode', 'true');
    }
    
    function disableDarkMode() {
        darkMode = false;
        body.classList.remove('dark-mode');
        themeIcon.textContent = '🌙';
        localStorage.setItem('darkMode', 'false');
    }
    
    // Add cute cursor effect
    const cursorEffect = document.createElement('div');
    cursorEffect.className = 'cursor-effect';
    document.body.appendChild(cursorEffect);
    
    document.addEventListener('mousemove', function(e) {
        cursorEffect.style.left = e.pageX + 'px';
        cursorEffect.style.top = e.pageY + 'px';
    });
    
    // Random sparkle effect
    setInterval(createSparkle, 2000);
    
    function createSparkle() {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        
        // Random position
        const posX = Math.random() * window.innerWidth;
        const posY = Math.random() * window.innerHeight;
        
        sparkle.style.left = posX + 'px';
        sparkle.style.top = posY + 'px';
        
        // Random size
        const size = Math.random() * 15 + 5;
        sparkle.style.width = size + 'px';
        sparkle.style.height = size + 'px';
        
        // Random sparkle emoji
        const sparkleEmojis = ['✨', '⭐', '🌟', '💫', '🎀'];
        sparkle.textContent = sparkleEmojis[Math.floor(Math.random() * sparkleEmojis.length)];
        
        document.body.appendChild(sparkle);
        
        // Remove after animation
        setTimeout(() => {
            sparkle.remove();
        }, 3000);
    }
});