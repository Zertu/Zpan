import CreateCircle from '../cricles/CreateCircle';
import isValid from '../cricles/isValid';
import { size } from './../cricles/CreateCircle';
export class backgroundCircle {
    constructor(canvas) {
        this.drawCricles = (c) => {
            if (c.r > size.max * 0.5)
                return;
            let context = this.workingContext;
            context.beginPath();
            context.fillStyle = '#' + (Math.random() * 0xffffff << 0).toString(16);
            context.arc(c.x, c.y, c.r, 0, Math.PI * 2);
            context.fill();
        };
        this.draw = () => {
            let c = CreateCircle(this.workingCanvas.height, this.workingCanvas.width);
            while (!isValid(c, this.cricles)) {
                c.x = Math.random() * this.workingCanvas.height;
                c.y = Math.random() * this.workingCanvas.width;
                this.counter++;
                if (this.counter > 10000000) {
                    return;
                }
            }
            while (isValid(c, this.cricles)) {
                c.r++;
            }
            this.cricles.push(c);
            this.drawCricles(c);
        };
        this.counter = 0;
        this.cricles = [];
        this.workingCanvas = canvas;
        canvas.height = document.body.scrollHeight * 0.99;
        canvas.width = document.body.scrollWidth * 0.99;
        this.workingContext = this.workingCanvas.getContext("2d");
        let context = this.workingContext;
        context.shadowColor = 'rgba(0,0,0,0.5)';
        context.shadowOffsetX = 5;
        context.shadowOffsetY = 5;
        context.shadowBlur = 10;
    }
}
