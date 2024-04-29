/**
 * Calculate current age
 */
const select = (el) => {
    return document.querySelector(el);
};
const calculateAge = () => {
    // Get the current year
    const year = new Date().getFullYear();

    // Birth year
    const birthYear = 2001;

    // Calculate age
    const age = year - birthYear;

    // Insert the age into the HTML element
    const ageSpan = select('#age');
    if (ageSpan) {
        ageSpan.innerText = age;
    }
};

// Call the function to calculate age on page load
window.addEventListener('load', calculateAge);
