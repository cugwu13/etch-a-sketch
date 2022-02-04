# Etch-A-Sketch
The goal of this project is to build an etch-a-sketch/sketch pad hybrid. This project will demonstrate my DOM manipulation abilities, knowledge of javascript, and my understanding of CSS (primarily CSS Grid Layout).

## How It Works
In order to change the colors of the "squares" in the *etch-a-sketch* container to the right of the screen, users must hover their mouse over the container. Each square in the container has an event listener that changes its color after a **mouseover** event. The color-change is defaulted to **black**. 

Users also have the ability to change the functionality of the *etch-a-sketch* container.

### Input Field
The input field in the left container allows users to enter the side length that they'd like the grid to resize to. The size must be an integer between 1 (inclusive) and 100 (inclusive). Afterwards, users can click the **Submit** button to resive the *etch-a-sketch* container. Any color that was previously in the *etch-a-sketch* container is cleared after clicking the **Submit** button.

### Clear
Below the **Submit** button is **Clear** button. Users can click this button in order to clear any color that is currently in the *etch-a-sketch* container.

### Random Color
Below the **Clear** button is a **Random Color** button. Users can click this button in order to randomize the coloring of the squares in the *etch-a-sketch* container after mouseover events.

### Color Wheel
Below the **Random Color** button is a color wheel. Users can click this button in order select a color of their choice. The mouseover coloring will change to reflect the user-selected color.