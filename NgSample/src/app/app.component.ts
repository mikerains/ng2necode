import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {

  }
  states: string[];
  title = 'Spock';
  public alert() :void {
    this.title='The Comfy Chair';
    this.states = ["Vulcan", "Klingon"];
  }
}
