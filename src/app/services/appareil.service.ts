import { Subject } from "rxjs/Subject";

export interface IAppareil { id: number;  name: string; status: string }

export class AppareilService {

    appareilsSubject = new Subject<IAppareil[]>();

    private appareils: IAppareil[] = [
        {
            id: 1,
            name: 'Machine à laver',
            status: 'éteint'
        },
        {
            id: 2,
            name: 'Frigo',
            status: 'allumé'
        },
        {
            id: 3,
            name: 'Ordinateur',
            status: 'éteint'
        }
    ];

    emitAppareilSubject() {
        this.appareilsSubject.next(this.appareils.slice());
    }

    getAppareilById(id: number) {
        return this.appareils.find(appareil => appareil.id === id);
    }

    switchOnAll() {
        for (const appareil of this.appareils) {
            appareil.status = 'allumé';
        }
        this.emitAppareilSubject();
    }
    switchOffAll() {
        for (const appareil of this.appareils) {
            appareil.status = 'éteint';
        }
        this.emitAppareilSubject();
    }
    switchOnOne(index: number) {
        this.appareils[index].status = 'allumé';
        this.emitAppareilSubject();
    }
    switchOffOne(index: number) {
        this.appareils[index].status = 'éteint';
        this.emitAppareilSubject();
    }
}