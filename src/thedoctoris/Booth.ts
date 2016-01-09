'use strict';

import { Injectable } from 'angular2/core';

import { Doctor } from './Doctor';

@Injectable()
export class Booth {
	constructor(private doctor: Doctor) {}

	call(): Promise<string> {
		return this.doctor.come().then(() => 'in');
	} 
}
