class Shape {
    constructor() {
        this.color = '';
        this.text = '';
    }
    setColor(color) {
        this.color = (color)
    }
    setText(text) {
        this.text = (text)
    }
    setTextColor(color) {
        this.textColor = (color) 
    }
}

class Circle extends Shape {
    constructor(color, text) {
        super();
        this.setColor(color);
        this.setText(text);
    }
    render(){
       return `<svg xmlns="http://www.w3.org/2000/svg" width="300px" height="200px">
       <circle cx="75" cy="75" r="70" fill="${this.color}" stroke-width="5"/>
       <text x="75" y="85" text-anchor="middle" fill="${this.textColor}" font-size="30">${this.text}</text>
       </svg>`;
    }
}

class Square extends Shape {
    constructor(color, text) {
        super();
        this.setColor(color);
        this.setText(text);
      }

    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300px" height="200px">
        <rect x="10" y="10" width="100" height="100" fill="${this.color}" stroke-width="5"/>
        <text x="30" y="70" fill="${this.textColor}" font-size="30">${this.text}</text>
        </svg>`;
    }
}

class Triangle extends Shape {
    constructor(color, text) {
        super();
        this.setColor(color);
        this.setText(text);
      }

    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300px" height="200px">
        <polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>
        <text x="150" y="120" text-anchor="middle" fill="${this.textColor}" font-size="30">${this.text}</text>
        </svg>`;
    }
};

module.exports = {
    Circle,
    Square,
    Triangle,
  };