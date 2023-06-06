import { Component, ElementRef, ViewChild } from '@angular/core';
import { from, fromEvent, interval, Observable, of } from 'rxjs';

@Component({
  selector: 'app-rxjs-learning',
  templateUrl: './rxjs-learning.component.html',
  styleUrls: ['./rxjs-learning.component.css']
})
export class RxjsLearningComponent {

  agents: Observable<string>;
  agentName: string;
  
  studentsList = ['Jan', 'Marek', 'Ania', ''];
  students: Observable<string[]> = of(this.studentsList);

  studentNames: Observable<string> = of('Marek');

  studentObj = {
    id: 10,
    name: 'Marekobj'
  };

  studentObject: Observable<{}> = of(this.studentObj);

  ordersArr = ['aaa', 'bbb', 'ccc', 'ddd'];
  orders: Observable<string> = from(this.ordersArr);

  orderName: string;

  @ViewChild('validate')
  validate: ElementRef;

  @ViewChild('getLink')
  getLinkData: ElementRef;


  ngOnInit(): void {
    // this.agents = new Observable(
    //   function(observer) {
    //     try {
    //       observer.next('Jan');
    //       observer.next('Marcin');
    //       observer.next('Ania');
    //     } catch(e) {
    //       observer.error(e);
    //     }
    //   }
    // );

    //   this.agents.subscribe(data => {
    //     // console.log(data);
    //     this.agentName = data;
    //   });

    //### opartors ###
    this.students.subscribe(data => {
      // console.log(data);
    });

    this.studentNames.subscribe(data => {
      // console.log(data);
    });

    this.studentObject.subscribe(data => {
      // console.log(data);
    });

    this.orders.subscribe(data => {
      // console.log(data);
      this.orderName = data;
      // console.log(data);
    });

    this.orders.subscribe(data => {

    const seqNum = interval(500);

    seqNum.subscribe(num => {
      if(num < 5) {
        // console.log(data + num);
      }
    });

      // console.log(data);
    });

  }

  rxjsObservableEvent() {
    const btnObservable = fromEvent(this.validate?.nativeElement, 'click');

    btnObservable.subscribe(data => {
      // console.log(data);
    });
  }

  getEventObservable(){
    const linkObservable = fromEvent(this.getLinkData?.nativeElement, 'mouseover');
    linkObservable.subscribe(data => {
      // console.log(data);
    });
  }
}
