import { Component } from '@angular/core';

import LiferayParams from '../types/LiferayParams'
import { SampleService } from './sample.service'

declare const Liferay: any;

@Component({
	templateUrl:
		Liferay.ThemeDisplay.getPathContext() +
		'/o/sample-angular-service/app/app.component.html'
})
export class AppComponent {
	params: LiferayParams;
	labels: any;

	constructor(public sampleService: SampleService) {
		this.labels = {

			configuration: 'Configuration',

			portletNamespace: 'Portlet Namespace',
        	contextPath: 'Context Path',
			portletElementId: 'Portlet Element Id',
		}
	}

	get configurationJSON() {
		return JSON.stringify(this.params.configuration, null, 2);
	}

	myMethod() {
		this.sampleService.myMethod();
	}
}
