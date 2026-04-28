// DevOps Learning Tracker
let days = localStorage.getItem('devopsDays') || 0;
let technologies = localStorage.getItem('techCount') || 18; // Updated tech count

// Update displays
function updateCounters() {
    document.getElementById('daysCounter').innerText = days;
    document.getElementById('techCounter').innerText = technologies;
}

// Increment days
function incrementDays() {
    days++;
    localStorage.setItem('devopsDays', days);
    updateCounters();
    showNotification('+1 Day of DevOps Learning! 🎉');
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerText = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #4caf50;
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        animation: slideIn 0.3s ease-out;
        z-index: 1000;
    `;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
}

// Display last deploy time
function setDeployTime() {
    const now = new Date();
    const timeString = now.toLocaleString();
    const deployElement = document.getElementById('deployTime');
    if (deployElement) {
        deployElement.innerText = timeString;
    }
    const lastDeployed = document.getElementById('lastDeployed');
    if (lastDeployed) {
        lastDeployed.innerHTML = `Last deployed: ${timeString}`;
    }
}

// Animate counters on load
function animateCounters() {
    const daysCounter = document.getElementById('daysCounter');
    const techCounter = document.getElementById('techCounter');
    const finalDays = days;
    const finalTech = technologies;
    
    let currentDays = 0;
    let currentTech = 0;
    
    const daysInterval = setInterval(() => {
        if (currentDays < finalDays) {
            currentDays++;
            if (daysCounter) daysCounter.innerText = currentDays;
        } else {
            clearInterval(daysInterval);
        }
    }, 50);
    
    const techInterval = setInterval(() => {
        if (currentTech < finalTech) {
            currentTech++;
            if (techCounter) techCounter.innerText = currentTech;
        } else {
            clearInterval(techInterval);
        }
    }, 50);
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    updateCounters();
    setDeployTime();
    animateCounters();
    
    // Add CSS for notification animation if not exists
    if (!document.querySelector('#notification-style')) {
        const style = document.createElement('style');
        style.id = 'notification-style';
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(style);
    }
});

// Console message to show CI/CD is working
console.log('🚀 DevOps Portfolio Dashboard - Deployed via GitHub Actions CI/CD!');
console.log('📊 Featured Projects: Microservices CI/CD, Kubernetes Monitoring, AWS Terraform');
