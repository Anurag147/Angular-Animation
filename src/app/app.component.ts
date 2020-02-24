import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

//Below code is used for creating Angular 2 animations
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //This property helps in animating the div
  animations:[
    trigger('divState',[
      state('normal',style({
        'background-color':'red',
        transform: 'translateX(0)'
      })),
      state('highlighted',style({
        'background-color':'blue',
        transform: 'translateX(100px)'
      })),
      transition('normal => highlighted',animate(700)),
      transition('highlighted => normal',animate(900))
    ]),
    trigger('wildState',[
      state('normal',style({
        'background-color':'red',
        transform: 'translateX(0) scale(1)'
      })),
      state('highlighted',style({
        'background-color':'blue',
        transform: 'translateX(100px) scale(1)'
      })),
      state('shrunken',style({
        'background-color':'yellow',
        transform: 'translateX(0px) scale(0.5)'
      })),
      transition('normal => highlighted',animate(700)),//Animate when status change from normal to highlighted
      transition('highlighted => normal',animate(900)),//Vice versa as above
      transition('shrunken <=> *',animate(500, style({//Add some styling while animating
        'border-radius':'10px'
      })))
    ]),
    trigger('list1',[
      state('in',style({
        'opacity':'1',
        transform: 'translateX(0)'
      })),
      transition('void => *',[
        style({
          'opacity':'0',
          transform: 'translateX(-100px)' //Initial State
        }),
        animate(700)
      ])
    ]),
  ]
})
export class AppComponent {
  list = ['Milk', 'Sugar', 'Bread'];
  state='normal';
  wildState='normal';
    onAdd(item) {
      this.list.push(item);
    }

    onAnimate(){
      if(this.state == 'normal'){
        this.state='highlighted';
      }
      else{
        this.state='normal';
      }
      if(this.wildState == 'normal'){
        this.wildState='highlighted';
      }
      else{
        this.wildState='normal';
      }
    }

    onShrink(){
      this.wildState='shrunken';
    }

    animationStarted(event){
      console.log(event);
    }

    animationDone(event){
      console.log(event);
    }

}
