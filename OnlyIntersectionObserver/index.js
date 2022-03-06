

// Initialization of a variable for the ids of the <div> elements 
var nb = 0;

// Collecting main and template elements from the DOM
const main = document.querySelector("main");
const template = document
  .querySelector("template");



/* This function returns a clone of a certain div element from 
the template element.*/
function cloneDivInTemplate() {
    nb+=1;
    const partDiv = template.content.querySelector(`[id = 'partie${nb}']` ).cloneNode(true);
    return partDiv;
}

// Adds an element to the DOM and observes this element.
function appendAndObserve(observer, element) {
  main.appendChild(element);
  observer.observe(element);
}

/*Definition of the callback function that will be called when the last 
element will be fully observed by the user of the web page. It takes in 
parameters the list of all the already observed elements. */
const callback = function (entries) {
    const entry = entries[0];
    /*When an element becomes visible, we stop observing him and we add 
    a new element that we observe*/
    if (entry.isIntersecting) {
      this.unobserve(entry.target);
  
      const newPart = cloneDivInTemplate();
      appendAndObserve(this, newPart);
    }
  };

//Initialization of an intersection observer.
const intersectionObserver = new IntersectionObserver(callback);

// Adding the initial element to the DOM and observing it
const initial = cloneDivInTemplate();
appendAndObserve(intersectionObserver, initial);