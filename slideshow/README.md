# SLIDESHOW

Created: March 17 2020

Finished: March 17 2020

## Overview

Reusable slideshow created for practicing HTML,CSS, JS.

class slideshow-container = container of the
slideshow

class slides = contains the slides of the
container

class captions = contains the captions of the
slides

### Keypoints:

### CSS
-using "position: absolute" for positioning
many text, also with the help of 'transform: 
translate()'.

### JS
```
document.getElementsByClassName(class)
document.querySelectorAll(selector)
```
- iterating through node lists of elements
   
- creating new elements using:
```
document.createElement(element)
(element).createElement(selector)
```
- appending it inside the end of an element using:
```
document.appendChild(<element>|| <var>)
```  

## NOTES:
- cant use created elements many times

Example:
```
let para = document.createElement('p');
let div = document.getElementById("div");
div.appendChild(para);
div.appendChild(para)
```

not appending maybe overidding.