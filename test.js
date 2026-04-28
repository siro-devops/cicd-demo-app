// Simple test suite for the portfolio dashboard

// Test that the incrementDays function exists
console.log('Testing incrementDays function...');
if (typeof incrementDays !== 'undefined') {
    console.log('✅ incrementDays function exists');
} else {
    console.error('❌ incrementDays function missing');
}

// Test that DOM elements exist after loading
function testDOMElements() {
    const elements = ['daysCounter', 'projectsCounter', 'techCounter'];
    let allExist = true;
    
    elements.forEach(id => {
        if (document.getElementById(id)) {
            console.log(`✅ Element ${id} exists`);
        } else {
            console.error(`❌ Element ${id} missing`);
            allExist = false;
        }
    });
    
    return allExist;
}

// Export for Node.js testing (if using Jest)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { testDOMElements };
}
