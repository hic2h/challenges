import {Component, OnInit} from '@angular/core';
import {Consent} from '../../data/schema/consent';
import {ConsentsService} from '../../data/services/consents.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-consents',
  templateUrl: './consents.component.html',
  styleUrls: ['./consents.component.scss']
})
export class ConsentsComponent implements OnInit {
  consents$: Observable<Consent[]>;

  constructor(private consentsService: ConsentsService) {}

  ngOnInit(): void {
    this.consents$ = this.consentsService.getConsents();
  }

}
