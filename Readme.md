1 >> <br>
**getELementById:**<br>
returns a single element with the given unique id.<br>
**getElementsByClassName:**<br>
returns an array like object containing all elements with the given class name.<br><br>

**querySelector:**<br>
returns the first element that matches the given CSS selector.<br>
**querySelectorAll:**<br>
returns all elements that matches the given CSS selector.<br><br>

2 >> <br>
**creating a new element:**<br>
const div = document.createElement('div');<br>

**inserting a new element:**<br>
const container = document.getElementById('container');<br>
container.appendChild(div);<br><br>

3 >><br>
**Event Bubbling:** <br>
event starting from the innermost element and moving towards the document object.<br>

**How it works:**<br>
If a button is clicked inside a div, the button will be triggered first, then the div, then the parent, until it reaches the document object.<br><br>

4 >><br>
Adding a single event listener to a parent element instead of multiple listeners on child elements.
<br>
Why it is useful:
> No need of multiple event listeners<br>
> Less Memory usage<br>
> Less repetitive code<br><br>

5 >><br>
**preventDefault:**<br>
prevents the default browser event (e.g. reloading after clicking a button inside a form.).<br>

**stopPropagation:**<br>
stops the event from bubbling.