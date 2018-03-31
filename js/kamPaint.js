 //Created by Howard Kam. 2018.//


 var vw = window.innerWidth;
 var vh = window.innerHeight;
 var value = 'black';
 var brush = [
 1,
 3,
 5,
 10,20,25,30];

 var Mode = ["Draw Mode", "Clear all"];

 var picker = '#000000';
 var gui;


 function setup() {
     createCanvas(vw, vh);
     background('white');
     stroke(0, 50);
     gui = createGui('MENU', 0, 0);
     gui.addGlobals('picker', 'Mode','brush');

 }

 function saveThis() {
     save('myDrawing.jpg');
 }




 function touchMoved() {
     //var weight = dist(mouseX, mouseY, pmouseX, pmouseY);
     strokeWeight(brush);
     stroke(color(picker));
     line(mouseX, mouseY, pmouseX, pmouseY);

 }
 switch (Mode) {

     case 'Clear all':
         clear();
         break;

 }

 function draw() {
     if (mouseIsPressed) {
         //var weight = dist(mouseX, mouseY, pmouseX, pmouseY);
         strokeWeight(brush);
         stroke(color(picker));
         line(mouseX, mouseY, pmouseX, pmouseY);
     } else {
         noFill();
     }
     switch (Mode) {

         case 'Clear all':
             clear();
             break;
     }

 }