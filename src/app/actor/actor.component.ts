import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {

  @Output() dataActor = new EventEmitter();
  nameActor: string;
  countryActor: string;

  constructor() {
  }

  ngOnInit() {
  }


  sendDataToMovie() {

    const obj: Object = {
      name: this.nameActor,
      country: this.countryActor
    };

    this.dataActor.emit(obj);
  }

}
