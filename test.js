// Comprehensive test suite for the portfolio dashboard

console.log('🧪 Running DevOps Portfolio Dashboard Tests...');
console.log('=========================================');

let passedTests = 0;
let failedTests = 0;
let warnings = 0;

// Test 1: Check HTML file exists
try {
    const fs = require('fs');
    const path = require('path');
    
    const htmlExists = fs.existsSync('index.html');
    if (htmlExists) {
        console.log('✅ TEST 1 PASSED: index.html file exists');
        passedTests++;
    } else {
        console.error('❌ TEST 1 FAILED: index.html file not found');
        failedTests++;
    }
} catch (e) {
    console.log('⚠️ TEST 1 SKIPPED: File system test (running in browser?)');
    warnings++;
}

// Test 2: Check CSS file exists
try {
    const fs = require('fs');
    const cssExists = fs.existsSync('style.css');
    if (cssExists) {
        console.log('✅ TEST 2 PASSED: style.css file exists');
        passedTests++;
    } else {
        console.error('❌ TEST 2 FAILED: style.css file not found');
        failedTests++;
    }
} catch (e) {
    console.log('⚠️ TEST 2 SKIPPED');
    warnings++;
}

// Test 3: Check JavaScript file exists
try {
    const fs = require('fs');
    const jsExists = fs.existsSync('script.js');
    if (jsExists) {
        console.log('✅ TEST 3 PASSED: script.js file exists');
        passedTests++;
    } else {
        console.error('❌ TEST 3 FAILED: script.js file not found');
        failedTests++;
    }
} catch (e) {
    console.log('⚠️ TEST 3 SKIPPED');
    warnings++;
}

// Test 4: Validate HTML content
try {
    const fs = require('fs');
    const htmlContent = fs.readFileSync('index.html', 'utf8');
    
    const requiredElements = [
        'DevOps Portfolio Dashboard',
        'project-card',
        'counter-section',
        'pipeline-status',
        'skills-section'
    ];
    
    let allFound = true;
    requiredElements.forEach(element => {
        if (htmlContent.includes(element)) {
            console.log(`  ✅ Found: ${element}`);
        } else {
            console.log(`  ❌ Missing: ${element}`);
            allFound = false;
        }
    });
    
    if (allFound) {
        console.log('✅ TEST 4 PASSED: All required HTML elements present');
        passedTests++;
    } else {
        console.error('❌ TEST 4 FAILED: Missing some HTML elements');
        failedTests++;
    }
} catch (e) {
    console.error('❌ TEST 4 FAILED: Cannot read HTML file');
    failedTests++;
}

// Test 5: Validate CSS structure
try {
    const fs = require('fs');
    const cssContent = fs.readFileSync('style.css', 'utf8');
    
    const cssSelectors = ['.container', '.project-card', '.counter-section', '.pipeline-stages'];
    
    let allSelectorsFound = true;
    cssSelectors.forEach(selector => {
        if (cssContent.includes(selector)) {
            console.log(`  ✅ Found selector: ${selector}`);
        } else {
            console.log(`  ❌ Missing selector: ${selector}`);
            allSelectorsFound = false;
        }
    });
    
    if (allSelectorsFound) {
        console.log('✅ TEST 5 PASSED: CSS selectors present');
        passedTests++;
    } else {
        console.error('❌ TEST 5 FAILED: Missing CSS selectors');
        failedTests++;
    }
} catch (e) {
    console.error('❌ TEST 5 FAILED: Cannot read CSS file');
    failedTests++;
}

// Test 6: Check for GitHub Actions workflow
try {
    const fs = require('fs');
    const workflowExists = fs.existsSync('.github/workflows/deploy.yml');
    if (workflowExists) {
        console.log('✅ TEST 6 PASSED: GitHub Actions workflow exists');
        passedTests++;
    } else {
        console.warn('⚠️ TEST 6 WARNING: GitHub Actions workflow not found');
        warnings++;
    }
} catch (e) {
    console.log('⚠️ TEST 6 SKIPPED');
    warnings++;
}

// Summary
console.log('=========================================');
console.log('📊 TEST RESULTS SUMMARY');
console.log('=========================================');
console.log(`✅ Passed: ${passedTests}`);
console.log(`❌ Failed: ${failedTests}`);
console.log(`⚠️ Warnings: ${warnings}`);
console.log('=========================================');

if (failedTests === 0) {
    console.log('🎉 All tests passed! Ready for deployment.');
    process.exit(0);
} else {
    console.error('❌ Some tests failed. Please fix before deploying.');
    process.exit(1);
}
