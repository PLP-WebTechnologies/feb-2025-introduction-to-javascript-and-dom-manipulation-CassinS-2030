// DOM Elements
const heading = document.getElementById('main-heading');
const dynamicText = document.getElementById('dynamic-text');
const changeTextBtn = document.getElementById('change-text-btn');
const styleDemo = document.getElementById('style-demo');
const changeStyleBtn = document.getElementById('change-style-btn');
const elementContainer = document.getElementById('element-container');
const addElementBtn = document.getElementById('add-element-btn');
const removeElementBtn = document.getElementById('remove-element-btn');

// 1. Change Text Content Dynamically
changeTextBtn.addEventListener('click', () => {
    const texts = [
        "Text changed by JavaScript!",
        "DOM manipulation is powerful!",
        "You clicked the button!",
        "This text is dynamic!",
        "Back to original"
    ];
    
    // Get current text to cycle through options
    const currentText = dynamicText.textContent;
    const currentIndex = texts.indexOf(currentText);
    const nextIndex = (currentIndex + 1) % texts.length;
    
    dynamicText.textContent = texts[nextIndex];
    
    // Bonus: Change heading color temporarily when text changes
    heading.style.color = '#e91e63';
    setTimeout(() => {
        heading.style.color = '';
    }, 500);
});

// 2. Modify CSS Styles via JavaScript
changeStyleBtn.addEventListener('click', () => {
    // Toggle the 'highlight' class
    styleDemo.classList.toggle('highlight');
    
    // Additional inline style changes
    if (styleDemo.classList.contains('highlight')) {
        styleDemo.style.color = '#d32f2f';
        styleDemo.style.fontSize = '1.2em';
    } else {
        styleDemo.style.color = '';
        styleDemo.style.fontSize = '';
    }
});

// 3. Add or Remove Elements
let elementCounter = 1;

addElementBtn.addEventListener('click', () => {
    const newElement = document.createElement('div');
    newElement.className = 'new-element';
    newElement.textContent = `New Element #${elementCounter++}`;
    elementContainer.appendChild(newElement);
});

removeElementBtn.addEventListener('click', () => {
    const lastElement = elementContainer.lastElementChild;
    // Don't remove the initial paragraph
    if (lastElement && lastElement.tagName !== 'P') {
        elementContainer.removeChild(lastElement);
        elementCounter--;
    } else if (!lastElement || lastElement.tagName === 'P') {
        alert('No more elements to remove!');
    }
});

// Bonus: Change document title when tab loses focus
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        document.title = "Come back! 😢";
    } else {
        document.title = "DOM Manipulation Demo";
    }
});
