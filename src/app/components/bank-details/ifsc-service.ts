import { IFSC } from './ifsc';
import { HttpClient } from '@angular/common/http'
import { Component, Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IfscFields } from './ifsc-mock';

@Injectable({
    providedIn: 'root'
})
export class IfscService implements OnInit {

    constructor(private http: HttpClient) { }
    ifsc: IFSC = new IFSC();
    ifscData: IfscFields = new IfscFields();

    ngOnInit(): void {

    }
    getIfsc(ifsc1: string): Observable<IfscFields> {

        return this.http.get<IfscFields>(' https://ifsc.razorpay.com/' + ifsc1);
    }

}
