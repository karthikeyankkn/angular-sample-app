import { Component } from '@angular/core';

@Component({
  selector : 'app-warning',
  templateUrl : './warning.component.html',
  styles : [`
  .warning-component{
    background: red;
    color: #fff;
    padding: 10px;
  }
  `]
})
export class WarningComponent{
  warning_message = "This is a warning message...!!!";
}
