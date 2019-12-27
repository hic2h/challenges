import { Component, OnInit } from '@angular/core';
import {ConsentsService} from "../../data/services/consents.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-give-consents',
  templateUrl: './give-consents.component.html',
  styleUrls: ['./give-consents.component.scss']
})
export class GiveConsentsComponent {

  constructor(private consentsService: ConsentsService, private router: Router) { }

  onAddConsent(consent) {
    this.consentsService.addConsent(consent).subscribe(
      () => this.router.navigate(['/consents']),
      () => {} //TODO: handle http errors
    )
  }

}
