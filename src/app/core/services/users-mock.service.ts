import { Inject, Injectable } from "@angular/core";

@Injectable()
export class UsersMockService {
    constructor(){
        console.log('Se instancio el servicio MOCK.');
    }
}