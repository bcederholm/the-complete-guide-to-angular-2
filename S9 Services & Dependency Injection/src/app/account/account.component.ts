import { Component, Input } from '@angular/core';
import { AccountService } from '../account.service';

import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService, AccountService]
  // providers: [LoggingService]  // REMOVE AccountService to use the same instance as in app.component.ts
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private loggingService: LoggingService, private accountService: AccountService) {}

  onSetTo(status: string) {
    // this.statusChanged.emit({id: this.id, newStatus: status});

    // console.log('A server status changed, new status: ' + status);
    this.accountService.updateStatus(this.id, status);
    // this.loggingService.logStatusChange(status);

    this.accountService.statusUpdated.emit(status); // Example on event emit in this component and subscribe in another.
  }
}
