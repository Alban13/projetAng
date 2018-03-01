import {Component, OnInit, Input, Output, EventEmitter, SimpleChanges} from '@angular/core';

@Component({
    selector: 'app-timer',
    templateUrl: './timer.component.html',
    styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
    @Input() time: any;
    @Output() done: EventEmitter<void>;
    private intervalId: any;

    constructor() {
        this.time = 10;
        this.done = new EventEmitter();
    }
    private start(){
            this.intervalId = setInterval(() => {
                --this.time;
                if (this.time <= 0) {
                    this.stop();
                }
            }, 1000);
    }
    private stop(){
        clearInterval(this.intervalId);
        this.done.emit();
    }

    ngOnInit() {
        console.info('initialisation du Timer');
this.start();

    }
    ngOnChanges(changes: SimpleChanges){
        console.info('Changement de propriétés détectée', changes);
        if(changes.time && !changes.time.firstChange
        && changes.time.previousValue !== changes.time.currentValue){
            this.stop();
            this.start();
        }
    }
    ngDoCheck(){
        console.info('Docheck');
    }
    ngOnDestroy(){
        console.info('Destruction du timer');
    }
}