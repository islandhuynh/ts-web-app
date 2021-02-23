import axios, { AxiosPromise } from 'axios';

interface HasId {
    id?: number; 
}

export class ApiSync<T extends HasId> {
    constructor(public rootUrl: string) {}

    fetch(id: number): AxiosPromise {
        return axios.get(`${this.rootUrl}/${id}`);
    }

    save(data: T): AxiosPromise {
        const { id } = data;

        // number 0 is falsy value in JS, so we use if(id !== undefined) instead of if(id)
        if (id !== undefined ) {
            return axios.put(`${this.rootUrl}/${id}`, data);
        } else {
            return axios.post(this.rootUrl, data)
        }
    }
}

