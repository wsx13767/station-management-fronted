import api from './api.js'

export default class station {
    static getAllStation() {
        return api({url: '/station'});
    }

    static getStation(id) {
        return api({url: `/station/${id}`});
    }

    static insertStation(name) {
        // const obj = {'name': name};
        
        // console.log(JSON.stringify(obj));
        // return obj;
        return api({url: '/station', method: 'POST', data: {name}});
    }

    static findNurseInfoByStationId(stationId) {
        return api({url: `/station/${stationId}/nurses`});
    }
}