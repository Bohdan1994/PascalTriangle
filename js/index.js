class PascalTriangle {
    constructor() {
        this.size = 0;
        this.setSize = () => this.size = prompt('12');
        this.getSize = () => this.size;
        this.getTriangle = () => {
            let res = setTriangle(this.size);
            console.log(res);
            return res;
        }

        function setTriangle(numTiers) {
            let triangle = [
                    [1]
                ],
                tier;
    
            for (let j = 0; j < numTiers - 1; j++) {
                tier = [1];
                for (let k = 1; k < triangle[j].length; k++) {
                    tier[k] = triangle[j][k] + triangle[j][k - 1];
                }
                tier.push(1);
                triangle.push(tier);
            }
            
            return triangle;
        }
    }
}

const content = document.getElementById('content');

let triangle = new PascalTriangle();
triangle.setSize();
triangle.getTriangle();

setContentWidth(triangle.getSize());
drawItems(triangle.getTriangle());

function drawItems(data) {

    for(let i = 0; i < triangle.getSize(); i++) {
        let offset = Math.floor((triangle.getSize() * 2 - 2)  / 2) - i;
    
        for(let j = 0; j < offset; j++) {
            content.appendChild(emptyItem());
        }

        for(let c = 0, y = data[i].length * 2; c < data[i].length; c++, y += 2) {
            if(y % 2 != 0 || c == 0) {
                let el = createItem(data[i][c]);
           
                content.appendChild(el);
            }
            
            else {
                let el = createItem(data[i][c]);
                let empty = emptyItem();

                content.appendChild(empty);
                content.appendChild(el);
            }
        }

        for(let j = 0; j < offset; j++) {
            content.appendChild(emptyItem());
        }
    }
}

function setContentWidth(triangleSize) {
    let triangleWidth = (50 * triangleSize) * 2 - 50;

    if(triangle.getSize() >= 16) {
        triangleWidth = (25 * triangleSize) * 2 - 25;
        content.style.fontSize = 0.5 + 'em';
    }
    content.style.width = `${triangleWidth}px`;
}

function createItem(data) {
    let element = document.createElement('div');
    element.className = 'block';
    element.innerHTML = data;

    if(triangle.getSize() >= 16) {
        element.style.width = 25 +'px';
        element.style.height = 25 + 'px';
    }
    return element;
}

function emptyItem() {
    let element = document.createElement('div');
    element.className = 'empty-block';

    if(triangle.getSize() >= 16) {
        element.style.width = 25 +'px';
        element.style.height = 25 + 'px';
    }

    return element;
}

