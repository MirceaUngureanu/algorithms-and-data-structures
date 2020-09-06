Algorithm - a process or set of steps to accomplish a certain task

How to improve:
1. Devise a plan for solving problems - non technical, strategy
2. Master common problem solving patterns

// Based on How to Solve it - George Polya
Problem solving strategies:
- understand the problem
- explore concrete examples
- break it down
- solve/simplify
- look back and refactor

1. Understand the problem
- breathe, take a step back and make sure you undestand the task
Can I restate the problem in my own words?
What are the inputs that go into the problem?
What are the outputs that should come from the solution to the problem?
Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem? (You may not be able to answer this question until you set about solving the problem. That's okay; it's still worth considering the question at this early stage.)
How should I label the important pieces of data that are a part of the problem?

// e.g. Write a function that add two nr and returns their sum
1. Can I restate/reiterate the problem in my own words?
e.g. "implement addition"
2. What are the inputs that og into the problem?
ints?
flots?
strings/large numbers
3. What are the outputs that should come from the solution to the problem?
int? float? string?
4. Can the outputs be determined from the inputs? Do we have enough information to solve the problem?
5. How should I label the important pieces of data that are part of the problem
name of the function, name of the arguments, name of the result, basically proper naming

2. Explore concrete examples. Helps understand the problem and act as a sanity check for the solution.
 - user stories
 - unit tests
 
explore examples: Helps us build a more robust solution
Start with Simple Examples
Progress to More Complex Examples
Explore Examples with Empty Inputs
Explore Examples with Invalid Inputs

e.g. // Write a function that takes in a string and returns counts of each character in the string
 Start with Simple Examples
 charCount("aaa") // {a: 4}
 charCount("hello") // {h: 1, e:1, l: 2, o:1}
 
 Progress to More Complex Examples
 "the serial number is #12345" //do we account for empty spaces, nr, special characters?
 "Hey there" // do we account for upper and lower case
 
 Explore Examples with Empty Inputs
 charCount("")
 
 Explore Examples with Invalid Inputs
 charCount(1)
 
 3. break it down
 Comment steps you need to take, broad strokes. If we are in an interview and we run out of time, we have the general idea
 Same problem as before
 // make object to return at end
 // loop over string, for each char...
    // if char is a nr/letter and is a key in object, add one to count
    // if a nr/letter and is not in object, add it and set value to 1
    // if char is something else (space, period et.c), do nothing
 // return object at end
 
 4. Solve/simplify
 Solve the problem or if you can't solve a simpler problem. Don't get stuck, start with the step you know.
 If stuck, simplify:
 - find the core difficulty 
 - ignore that difficulty
 - write a simplified solution
 - incorporate the core difficulty back in
 e.g. Same as above
 - maybe not sure how to check if alphanumeric, skip that and focus on what you do know then circle back to it
 
 5. Loop back and refactor
  Can you check the result? - does it work?
  Can you derive the result differently? - other approaches
  Can you understand it at a glance? - how intuitive is the solution?
  Can you use the result or method for some other problem? 
  Can you improve the performance of your solution? - big O
  Can you think of other ways to refactor? - formatting, other convention/guidelines, style guide
  How have other people solved this problem? - how other people solve this, sometimes you might find the solution in a different language