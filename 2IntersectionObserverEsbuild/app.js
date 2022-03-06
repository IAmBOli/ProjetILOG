import createPart from "./part";

var nb = 0;
// Collecting main element from the DOM
const main = document.querySelector("main");

/* This function returns a clone of a certain div element from 
the template element.*/
function clonePart() {
  nb+=1;
  var clone = createPart(nb);
  return clone;
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
  
    const newPart = clonePart();
    appendAndObserve(this, newPart);
    }
};

//Initialization of an intersection observer.
const intersectionObserver = new IntersectionObserver(callback);

// Adding the initial element to the DOM and observing it
const initial = clonePart();
appendAndObserve(intersectionObserver, initial);