/*
var bootstrap = require('angular2/platform/browser').bootstrap;

var TheDoctorIsComponent = require('./thedoctoris').TheDoctorIsComponent;
var THEDOCTORIS_PROVIDERS = require('./thedoctoris').THEDOCTORIS_PROVIDERS;

module.exports = boot;
*/
import { bootstrap } from 'angular2/platform/browser';

import { TheDoctorIsComponent, THEDOCTORIS_PROVIDERS } from './thedoctoris';

export function boot() {
	bootstrap(TheDoctorIsComponent, [THEDOCTORIS_PROVIDERS]);
}