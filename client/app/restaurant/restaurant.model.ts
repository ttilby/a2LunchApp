import {Injectable} from 'angular2/core';

export class Restaurant {
    
    title: string;
    created: Date;
    
    constructor(title: string) {
        this.title = title;
        this.created = new Date();
    }
    
}