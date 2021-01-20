import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth: boolean = false;

  appareilOne: string = 'Premier appareil';
  appareilTwo: string = 'Deuxième appareil';
  appareilThree: string = 'Troisième appareil';

  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      },
      4000
    );
  }

  onAllumer() {
    console.log('On allume tout !');
  }
}
