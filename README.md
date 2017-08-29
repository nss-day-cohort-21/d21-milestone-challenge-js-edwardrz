# [X] The Static Web: JavaScript Milestone Challenge

Create a `tree` function that should build a pine tree out of a character in the Chrome dev tools console. 


## Setup

When you are ready to start the challenge, request the Github Classroom link from your instructor. 

- [X] Your instructor will send you the Github Classroom link that will create a blank repository to hold your challenge.
- [X] Once your repository is created, you will see the *Quick Setup* page.
- [X] Make a branch and name it "challenge"
- [X] Create an index.html and main.js


>If you would like to have your work reviewed, push up the branch (git push origin challenge) and submit a pull request on Github. A member of the instruction team will take a look and give feedback. Your work does not need to be complete to receive feedback.

## Instructions

It is absolutely critical that you read each of these requirements because as a professional you will be expected to completely understand what you are expected to do. If you submit code that does not fulfill the requirements, you will be sent to your room with no dinner.

Create a `tree` function that should build a pine tree out of a character in the Chrome dev tools console. 

### It accepts a single object as an argument. The object should have two key/value pairs.

- [X] A key that specifies the height of the pine tree.
- [X] The value for the height of the tree should be from user input in a `<input type="text">` field in the DOM.
- [X] A key that specifies which character to use to build the pine tree.
- [X] The character to use should be from user input in a `<input type="text">` field in the DOM.

- [X] Once the user enters in a number, and a character, the user can either then just press the enter key _(as long as the cursor is in one of the input fields)_, or click a button that is labeled "Grow your tree" and the tree should be shown in the console. This requires you to add an event listener to the button, as well as an event listener for the enter/return key.

Events:
- [X] Press enter key to create tree
- [X] Press button to grow tree


- [X] If either of the input fields does not have a value in it when the user presses the enter key, or presses the button, then display an alert stating that both fields must have a value.

<div>
    <input type="text" style="width: 40%" placeholder="How tall should the tree be?">
</div>
<div>
    <input type="text" style="width: 40%" placeholder="Which character should be used?">
</div>

<button>Grow your tree</button>

##### Example

Here's what the pine tree should look like when you specify a height of 7, and use the asterisk character.

```js
      *
     ***
    *****
   *******
  *********
 ***********
*************
```
