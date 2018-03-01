import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'the jungle';
  count: number = 0;
  maxAge: number = 10;
  timeOver: boolean = false;
  addTimer: boolean = false;
  timeValue: number = 6;
  timers: number[] = [];
  /*swapTimer(){
    this.addTimer = !this.addTimer;
    if(!this.addTimer){
      this.timeOver = false;
    }
  }*/

    ajouterTimer(){
      this.timers.push(this.timeValue);
        this.timeValue = 30;
    }
  onTest(mouseEvent: MouseEvent){
    this.count++;
    //Empecher l'evenement de remouter dans les objects du dom.
      // si preventDefault est appelé, alors la fonction onDivTest ne sera pas appelée.
    mouseEvent.preventDefault();
    // similaire : mouseEvent.stopPropagation();
  }
  onDivTest(){
    console.info('Le click est déclenché aussi sur le div parent');
  }
  animateTimer(){
  this.timeOver = true;
  }
}
