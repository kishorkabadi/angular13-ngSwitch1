import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  flag: boolean = true;

  isValid: boolean = false;
  changevalue(valid: boolean) {
    this.isValid = valid;
  }
  getCssClass() {
    let cssClass;
    cssClass = { redClass: true,fontBold:true };
    return cssClass;
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
