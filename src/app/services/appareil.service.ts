export class AppareilService {
    public appareils: {id: number, name: string, status: string}[] = [
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

    getAppareilById(id: number) {
        return this.appareils.find(appareil => appareil.id === id);
    }

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