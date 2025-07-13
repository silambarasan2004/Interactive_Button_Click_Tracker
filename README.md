# Interactive_Button_Click_Tracker
## Date: 12/7/2025
## Objective:
To implement a counter using JavaScript closures and demonstrate how variables maintain their state across function calls, emphasizing the concepts of function scope and lexical closures.

## Tasks:

#### 1. Structure the HTML Layout:
Create a simple interface with:

A heading like ```<h1>ClickCounter</h1>```

A ```<button>``` labeled “Click Me”

A ```<p> or <div>``` to display the number of clicks

#### 2. Style with CSS:
Center the layout and apply padding and background color

Use large fonts for the click display

Add hover effects on the button

#### 3. Write JavaScript with Closure:
Create a function createCounter() that returns another function

The inner function should increment and return a count variable stored in the outer function’s scope

Use this closure to track how many times the button has been clicked

Update the DOM each time the button is clicked using the closure function
## HTML Code:
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>ClickCounter</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="clickBox">
    <h1 class="Heading">Click Counter</h1>
    <button id="btnClick">Click Me</button>
    <div id="clickDisplay" class="clickValue">Clicked 0 times</div>
  </div>
  <script src="script.js"></script>
</body>
</html>
```
## CSS Code:
```
body {
  margin: 0;
  padding: 0;
  background-color: #dec1e7;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: 'Segoe UI', sans-serif;
}

.clickBox {
  text-align: center;
  width: 300px;
  height: 200px;
  background: #ddecc5;
  padding: 2rem;
  border-radius: 12px;
}

.Heading {
  color: #333;
  margin-bottom: 1rem;
}

#btnClick {
  padding: 10px 20px;
  font-size: 18px;
  background-color: #007acc;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s ease;
}

#btnClick:hover {
  background-color: #005fa3;
}

.clickValue {
  margin-top: 1rem;
  font-size: 24px;
  color: #222;
}
```
## JavaScript Code:
```
function createCounter() {
  let count = 0; 
  return function () {
    count++;
    return count;
  };
}

const countClicks = createCounter(); 
const button = document.getElementById('btnClick');
const display = document.getElementById('clickDisplay');

button.addEventListener('click', () => {
  const currentCount = countClicks();
  display.textContent = `Clicked ${currentCount} times`;
});
```
## Output:
<img width="1916" height="954" alt="Screenshot 2025-07-13 220502" src="https://github.com/user-attachments/assets/3365a5ba-3dc8-43f7-8597-ca5dccaccf83" />

## Result:
A mini module using JavaScript closure and scope is successfully implemented to build an interactive button click tracker that updates in real time without exposing internal variables.
