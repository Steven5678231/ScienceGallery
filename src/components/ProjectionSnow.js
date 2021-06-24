
export const sketch = (p) => {
    let snowflakes = [];
    //let rotation = 0;
    
    p.setup = function () {
        p.createCanvas(1400,1400);
        p.fill(240);
        p.noStroke();
        p.setInterval = function () {

        }
    };

    p.draw = function () {
        p.background('blue');
        let t = p.frameCount / 60;

        for(let i=0; i < random(5); i++) {
            snowflakes.push(new artsy());
        }
        
        for (let flake of snowflakes) {
            flake.update(t);
            flake.display();
        }
    };

    let aflake;
    
    p.artsy = function (props) {
        props.aflake.posX = 0;
        props.aflake.posY = random(-50,0);
        props.aflake.initialangle = random(0, 2 * PI);
        props.aflake.size = random(2, 5);
        //this.size2 = random(2,50);
        
        // radius of snowflake spiral
        // chosen so the snowflakes are uniformly spread out in area
        props.aflake.radius = sqrt(random(pow(p.width / 2, 2)));
        
        props.aflake.update = function(time) {
            // x position follows a circle
            let w = 0.6; // angular speed
            let angle = w * time + props.aflake.initialangle;
            props.aflake.posX = p.width / 2 + props.aflake.radius * sin(angle);
                
            // different size snowflakes fall at slightly different y speeds
            props.aflake.posY += pow(props.aflake.size, 0.5);
            
            // delete snowflake if past end of screen
            if (props.aflake.posY > p.height) {
                let index = snowflakes.indexOf(aflake);
                snowflakes.splice(index, 1);
            }
        }

        // Display the line
        p.display = function() {
            //line(this.posX, this.posY, this.size1, this.size2);
            ellipse(props.aflake.posX, props.aflake.posY, props.aflake.size);
        } 
    }

};

//  export default sketch;
