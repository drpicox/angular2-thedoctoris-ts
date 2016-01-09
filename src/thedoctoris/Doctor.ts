export class Doctor {
	come(): Promise<string> {
		return new Promise<string>((resolve) => {
			setTimeout(()=>resolve('here'), 3000);
		});
	}
}