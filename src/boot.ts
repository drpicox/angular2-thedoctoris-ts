import { bootstrap } from 'angular2/platform/browser';

import { TheDoctorIsComponent, THEDOCTORIS_PROVIDERS } from './thedoctoris';

export function boot() {
	bootstrap(TheDoctorIsComponent, [THEDOCTORIS_PROVIDERS]);
}