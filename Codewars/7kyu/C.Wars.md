Normally we have firstname, middle and the last name but there may be more than one word in a name like a South Indian one.

Similar to those kinda names we need to initialize the names.

See the pattern below:

initials('code wars') => returns C.Wars 
initials('Barack Hussain obama') => returns B.H.Obama 
Complete the function initials.


```
const initials = n=> (n=n.split(' ')).map(x=> x[0].toUpperCase()).join('.')+n.pop().slice(1)
```

```
const initials = n=> n.split(' ').map((x,i, a)=> x[0].toUpperCase() + (i== a.length-1 ? x.slice(1) : '.')).join('')
```
Normally we have firstname, middle and the last name but there may be more than one word in a name like a South Indian one.

Similar to those kinda names we need to initialize the names.

See the pattern below:

initials('code wars') => returns C.Wars 
initials('Barack Hussain obama') => returns B.H.Obama 
Complete the function initials.
