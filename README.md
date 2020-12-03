# React-Ramp-Single-Functional-Component

### App.js
I built a functional component using: 
- UseState Hook to manage my state, in App.js where I render the output after a user enters the input.
- UseEffect Hook and SetInterval to update the time every second.

With a conditional to check the following:
In the first case, if the input is an empty string, which is the default value, the output is the instructions.
In the second case, if the input is either undefined || falsy || even the string undefined "just for experiment", the output will show the time updated every second, rendering that in the Time component. 
In the third case, an If statement to check if the input is an array. "If the first char and the last char of the input, then I parse it, iterate using .map where every element is in a div inside an unordered list.

Time: I utilized most functions of new Date() to get all time outputs and manipulated them in the updateTime function.



