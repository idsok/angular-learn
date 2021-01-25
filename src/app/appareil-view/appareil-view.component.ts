import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { AppareilService, IAppareil } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit, OnDestroy {

  isAuth: boolean = false;
  appareils: any[] = [];
  appareilsSubscription: Subscription;

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  constructor(private appareilService: AppareilService) {

  }

  ngOnInit() {
    this.appareilsSubscription = this.appareilService.appareilsSubject.subscribe(
      (appareils: IAppareil[]) => {
      this.appareils = appareils;
    })
    this.appareilService.emitAppareilSubject();
  }

  ngOnDestroy() {
    this.appareilsSubscription.unsubscribe();
  }

  onAllumer() {
    this.appareilService.switchOnAll();
  }
  onEteindre() {
    if (confirm('Etes-vous sûr de vouloir étaindre tous vos appareils ?')) {
      this.appareilService.switchOffAll();
    }
  }

}
