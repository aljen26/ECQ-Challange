
# DICE ROLLER

### ver 1.0
Created: March 17 2020

Finished: March 18 2020

### ver 2.0

Update: Include Dice Element Creator

Finished: March 18 2020

## Keypoints:

### Javascript
- used alot of Nodelist and iterations for settingup the dots
- used of functions and passing arrays of objects
		
### CSS
- positioning of CLASS number.
- used of Grid for DOT-positioning
- horizontal & Vertical Centering
    
## Notes:
Half heartedly created CLASS number, cause I
want to use PSEUDO-ELEMENT '::before', so no
more additional semantics needed in HTML.
But have a hard-time selecting it.

Tried:
```
window.getComputedStyle(currentElement,psuede-element).getPropertyValue(<props>).toEqual('newValue');
```
				
### Possible Improvement:

Element creator for class dices


### Update: ver 2.0
- created Nodelist for class DICE. This will
make sure that its easier to reuse the codes.
No more hardwork creating irrelevant semantics
for dots of dices;

### Additional Keypoints:
### JS
- creating Elemebts using,
```
document.createElement(<tag>)
```
for adding class:
```
document.classList.add(<className>)
```
 
### CSS
- used of ::before, ::after no more semantic & nodelist added.
