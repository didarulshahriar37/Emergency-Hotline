1 >>
getELementById:
returns a single element with the given unique id.
And,

getElementsByClassName:
returns an array like object containing all elements with the given class name.

querySelector:
returns the first element that matches the given CSS selector.
And,

querySelectorAll:
returns all elements that matches the given CSS selector.

2 >>
creating a new element:
const div = document.createElement('div');

inserting a new element:
const container = document.getElementById('container');
container.appendChild(div);

3 >>
Event Bubbling: 
event starting from the innermost element and moving towards the document object.

How it works:
If a button is clicked inside a div, the button will be triggered first, then the div, then the parent, until it reaches the document object.

4 >>
Adding a single event listener to a parent element instead of multiple listeners on child elements.

Why it is useful:
> No need of multiple event listeners
> Less Memory usage
> Less repetitive code

5 >>
preventDefault:
prevents the default browser event (e.g. reloading after clicking a button inside a form.).

stopPropagation:
stops the event from bubbling.