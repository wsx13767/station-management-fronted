import api from './api.js'

export default class station {
    static getAllStation() {
        return api({url: '/station'});
    }

    static getStation(id) {
        return api({url: `/station/${id}`});
    }

    static updateStation(id, name) {
        return api({url: `/station/${id}`, method: 'PUT', data: {name}});
    }

    static insertStation(name) {
        return api({url: '/station', method: 'POST', data: {name}});
    }

    static findNurseInfoByStationId(stationId) {
        return api({url: `/station/${stationId}/nurses`});
    }
}