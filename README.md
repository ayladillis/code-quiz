# code-quiz
code quiz homework 04

## Acceptance Criteria

GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score


## PseudoCode 

1. in html set a class to time then in script.js assign a variable timeEl.

2. assign a variable secondsLeft and set it equal to 75 seconds.

3. use html to set a div and assign class equal to 'topcorner' then in style.css set .topcorner.

4. in html create button tags for the answers to the questions and assign them to be variables in the script.js. 

5. use the addEventListener 'click' function to record the socre when the user clicks on the rigth/wrong button. 

6. within the buttons function in script.js use the .split class so the buttons will loop through after being clicked. 

7. create an h1 tag in html and title it "All Done!" 

8. in script.js assign variables 'addBtn' 'peopleListEl' 'initialEl' and variable 'people' assigned with a string. 

9. create a function of addPersonToList with classes of people.push and peopleListEl.append

10. create a "High Scores" link in the top left hand corner of the page where all users high scores can be viewed and saved. 
