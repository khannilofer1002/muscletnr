var form1
var startbutton
var background1
var user_name
var startbutton1
var a
var settings_icon
var menu_icon
var menu_icon1
var big_leftblock
var white_background
var menu_button



function preload(){
  background1 = loadImage("background1.jpg")
  settings_icon = loadImage("settings_icon.png")
  menu_icon = loadImage("menu_icon.png")
  white_background = loadImage("White_background.jpg")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background("white");
  
  background1.scale = 4
  title = createElement("h1");
  title.html("Hello, welcome")
  title.position(windowWidth/2-150,windowHeight/2-400)

  //startbutton = createButton("Start")
  //tartbutton.position(windowWidth/2,windowHeight/2)

  // this.blank is only for working in a class

  startbutton1 = createButton("Enter")
  startbutton1.position(windowWidth/2+50,windowHeight/2-100)
  input = createInput("").attribute("placeholder","Enter your name");
  input.position(windowWidth/2-200, windowHeight/2-100)

  menu_button = createButton("Menu")
  menu_button.position(50,50)
  

  

  title1 = createElement("h1")
  title1.html("")
  title1.position(windowWidth/2-150,windowHeight/2-400)

  

  

}

function draw() {
  background("grey");

  startbutton1.mousePressed(() => {
      //form1 = new Form();
      title.hide();
      startbutton1.hide();
      input.hide();
      background(background1);
      a = input.value();
      console.log(a);
      title1.html("Hello "+ a + " are you a...")
      nextpage1();
    }); 

    

    /*menu_icon1.mousePressed(() => {
      settings_icon.visible = true
      big_leftblock.visible = true
    }); */
  

  



  drawSprites();
}

function nextpage1(){
  //menu_icon1 = createSprite(50,50);
  //menu_icon1.scale = 0.3;
  //menu_icon1.addImage(menu_icon);



  big_leftblock = createSprite(100,100,50,50);
  big_leftblock.addImage(white_background);
  big_leftblock.visible = false;
  

  settings_icon1 = createSprite(50,200);
  settings_icon1.scale = 0.03;
  settings_icon1.addImage(settings_icon);
  settings_icon1.visible = false;

  big_leftblock.depth = settings_icon1.depth;
  settings_icon1.depth = settings_icon.depth+1

  /*if(mousePressedOver(menu_icon)){
      settings_icon1.visible = true
      big_leftblock.visble = true
    } */

  menu_button.mousePressed(() => {
    big_leftblock.visible = true
    settings_icon.visible = true
  });

}
