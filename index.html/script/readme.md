### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
<!-- answer of 1 __ -->

**getElementById** selects a single element by its unique ID. Example: `document.getElementById('myId')` returns one element.

**getElementsByClassName** selects all elements with a specific class name. Example: `document.getElementsByClassName('myClass')` returns a collection (HTMLCollection) of elements.

**querySelector** selects the first element that matches a CSS selector. Example: `document.querySelector('.myClass')` returns the first element with class `myClass`.

**querySelectorAll** selects all elements that match a CSS selector. Example: `document.querySelectorAll('.myClass')` returns a NodeList of all elements with class `myClass`.

In short:

- getElementById: one element by ID
- getElementsByClassName: all elements by class name
- querySelector: first match by CSS selector
- querySelectorAll: all matches by CSS selector

2. How do you **create and insert a new element into the DOM**?
   <!-- answer of 2 __ -->
   You can create a new element using `document.createElement()`, set its properties, and add it to the page using methods like `appendChild()` or `append()`. Example:

```js
var newDiv = document.createElement("div");
newDiv.textContent = "Hello!";
document.body.appendChild(newDiv);
```

3. What is **Event Bubbling** and how does it work?
   <!-- answer of 3 __ -->

   Event bubbling is how events move up from the element that was clicked (or triggered) to its parent elements. For example, if you click a button inside a div, the click event first runs on the button, then on the div, then on higher parents. This lets multiple elements react to the same event.

4. What is **Event Delegation** in JavaScript? Why is it useful?
   <!-- answer of 4 __ -->
   Event delegation means adding one event listener to a parent element instead of many listeners to each child. The parent checks which child was clicked and handles it. This is useful for better performance and for handling elements added later.

Example:

```js
document.querySelector("ul").addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    alert("List item clicked: " + e.target.textContent);
  }
});
```

5. What is the difference between **preventDefault() and stopPropagation()** methods?
   <!-- answer of 5 __ -->
   `preventDefault()` stops the browser's default action (like following a link or submitting a form).
   `stopPropagation()` stops the event from bubbling up to parent elements.

Example:

```js
element.addEventListener("click", function (e) {
  e.preventDefault(); // Stop default action
  e.stopPropagation(); // Stop bubbling
});
```
