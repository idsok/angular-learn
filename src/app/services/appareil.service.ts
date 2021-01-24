export class AppareilService {
    public appareils: {name: string, status: string}[] = [
        {
            name: 'Machine à laver',
            status: 'éteint'
        },
        {
            name: 'Frigo',
            status: 'allumé'
        },
        {
            name: 'Ordinateur',
            status: 'éteint'
        }
    ];

    switchOnAll() {
        for (const appareil of this.appareils) {
            appareil.status = 'allumé';
        }
    }
    switchOffAll() {
        for (const appareil of this.appareils) {
            appareil.status = 'éteint';
        }
    }
    switchOnOne(index: number) {
        this.appareils[index].status = 'allumé';
    }
    switchOffOne(index: number) {
        this.appareils[index].status = 'éteint';
    }
}