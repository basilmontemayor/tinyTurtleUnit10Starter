TinyTurtle.apply(window);

function square(x){
forward(x);
right(90);
forward(x);
right(90);
forward(x);
right(90);
forward(x);
right(90);
forward(x);
}
function triangle(y){
right (45);
forward (y);
right (90);
forward (y);
right (135);
forward (y);
}
function shape(size, angle) {
 forward (size);
 right (angle);
 forward (size);
 right (angle);
 forward (size);
 right (angle);
 
}

// Type your function call below
shape(25, 40);
shape(10, 50);

stamp();
triangle(45);
