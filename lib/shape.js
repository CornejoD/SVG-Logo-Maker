class Shape{
    constructor(color, text, textColor){
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }
}

class Circle extends Shape {
    render() {
        return `<svg height="100" width="100">
        <circle cx="50" cy="cy" r="40" fill="${this.color}" />
        <text x="0" y="15" fill="${this.textColor}">${this.text}</text>
        </svg>`
    }
}

class Triangle extends Shape {
    render(){
        return `<svg height="100" width="100">
        <polygon points="150,10 300,200 20,200" fill="${this.color}" />
        <text x="0" y="15" fill="${this.textColor}">${this.text}</text>
        </svg>`
    }
}

class Square extends Shape {
    render(){
        return `<svg height="100" width="100">
        <rect x ="50" y="20" width="150" height="150" fill="${this.color}"/>
        <text x="0" y="15" fill="${this.textColor}">${this.text}</text>
        </svg>`
    }
}

module.exports = { Circle, Triangle, Square };