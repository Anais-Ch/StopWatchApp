import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'StopWatchApp';
  //
  public isStarted = false;
  public isPaused = false;

  //

  public start(): void {
    this.isStarted =  true;
  }

  public stop(): void {
    this.isStarted =  false;
  }

  public pause(): void {
    this.isPaused =  true;
  }

  public continue(): void {
    this.isPaused =  false;
  }

}
