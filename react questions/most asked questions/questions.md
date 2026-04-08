ques1: what is react an dwhy is it used ?
ans: react is popular js library used for building user interfaces for web applications.
it known for its efficiency, flexibility, and reusability in creating interactive ui components
react allows devs to build complex ui by breaking them down into samaaler, reusable pices called components
these components can manage their own state, making it easir=er to build and maintain large scale applications

ques 2: ehat is jsx, and why is it used ?
ans: jsx stands for javascript xml
allows you to write html like code within javascript.
jsx is used in react to define the styructure of components

ques 3: what is react component ?
ans : basically it is a resybale building block for the ui
it can be a class or a function that returns JSX

QUES 4: what is the difference between state and props?
ans: state are mutable but props are immutable
components ke pass apne state hote hai lekin props sirf parent component se aate hai
state ko componet ke andar change kar sakte hai lekin props ko sief parent component se hi change kar sakte hai

quies 5: what is prop drilling?
ans: agar hume kisi parent compont ke data ko child component me bhejna ho to hum props ko sabhi component me bhejte hue uske trageted component tak bhejte hai

ques 6: what is react fragment ?
ans: isme hum jsx ke multiple elem ko bind karte hai

ques6: how do you define and use state in a react functional component How are they different from normal variables?
ans: react me usestate ko hum noraml call karte aa rhe hai waise hi define karenge
hum normal variable se state ko update or compoent ko refresh nhi kar payenge isliye hum normal variable ko use nhi karte.

ques 7: what are propTypes ?
ans: isme hum props ke data types ko define karte hai jisse error ke chance kam ho oe debudgging easy ho jaye.
ex:
import PropTypes from "prop-types";

function User({ name, age }) {
return (

<div>
<h2>{name}</h2>
<p>{age}</p>
</div>
);
}

User.propTypes = {
name: PropTypes.string,
age: PropTypes.number,
};

ques: what is virtual dom ?
ans: Virtual DOM is a lightweight JavaScript copy of the real DOM. React uses it to optimize UI updates by updating only the changed elements instead of re-rendering the entire DOM.

ques: what is reconcilliation ?
ans: Reconciliation is React’s process of comparing the old Virtual DOM with the new Virtual DOM to identify differences and update only the necessary parts of the real DOM.

ques: what is diffing algorithm?
ans: The diffing algorithm is the method React uses during reconciliation to compare two Virtual DOM trees and find the minimal number of updates needed for the real DOM.
