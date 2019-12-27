import { Component } from '@angular/core';
import {ConsentsService} from '../../data/services/consents.service';
import {Router} from '@angular/router';

/**
 * This is a container component responsible for displaying the AddConsent form
 * and handling the consent creation
 */
@Component({
  selector: 'app-give-consents',
  templateUrl: './give-consents.component.html',
  styleUrls: ['./give-consents.component.scss']
})
export class GiveConsentsComponent {

  constructor(private consentsService: ConsentsService, private router: Router) { }

  /**
   * Create the consent and navigate to the consents table on success
   */
  onAddConsent(consent) {
    this.consentsService.addConsent(consent).subscribe(
      () => this.router.navigate(['/consents']),
      () => {} // TODO: handle http errors
    );
  }

}
