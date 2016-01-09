import { Component } from 'angular2/core';

import { Booth } from './Booth';

@Component({
	selector: 'tdi-the-doctor-is',
	template: '<p>The doctor is [{{is}}]</p>',
	providers: [],
})
export class TheDoctorIsComponent {
	public is: string = 'out';

	constructor(booth: Booth) {
		booth.call().then((is) => this.is = is);
	}
}