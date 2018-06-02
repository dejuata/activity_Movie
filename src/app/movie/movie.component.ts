import { Component, OnInit } from '@angular/core';
import { EventListener } from '@angular/core/src/debug/debug_node';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  idMovie: number;
  nameMovie: string;
  actors: Object[];

  show: boolean;

  constructor() {
    this.actors = [];
    this.show = true;
  }

  ngOnInit() {
  }

  listenActor(event) {
    this.actors.push(event);
  }

  sendData() {
    const obj: Object = {
      id: this.idMovie,
      name: this.nameMovie,
      cast: this.actors
    };

    this.show = false;

    console.log(obj);
  }

}
