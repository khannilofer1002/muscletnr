class Form {
    constructor(){
        this.input = createInput("").attribute("placeholder","Enter your name");
        this.startButton1 = createButton("Start");
        this.greeting = createElement("h2");
    }

    setElementsPosition(){
        this.input.position(20,20);
        this.startButton1.position(50,50);
        this.greeting.position(40,40);
        
    }

    setElementsStyle() {
        this.input.class("customInput");
        this.startButton1.class("customButton");
        this.greeting.class("greeting");
      }
    
      hide() {
        this.greeting.hide();
        this.startButton1.hide();
        this.input.hide();
      }
    
      handleMousePressed() {
        this.startButton1.mousePressed(() => {
          this.input.hide();
          this.startButton1.hide();
        });
      }
    
      display() {
        this.setElementsPosition();
        this.setElementsStyle();
        this.handleMousePressed();
      }
    }

