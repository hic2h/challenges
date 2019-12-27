import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from "@angular/material";
import {Consent} from "../../data/consent";

@Component({
  selector: 'app-consents',
  templateUrl: './consents.component.html',
  styleUrls: ['./consents.component.scss']
})
export class ConsentsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email', 'givenConsents'];
  dataSource = new MatTableDataSource<Consent>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}
const ELEMENT_DATA: Consent[] = [
  {name: 'user 1', email: 'emai1l@didomi.io', givenConsents: ["Receive newsletter"]},
  {name: 'user 2', email: 'emai1l@didomi.io', givenConsents: ["Be shown targeted Ads"]},
  {name: 'user 3', email: 'emai1l@didomi.io', givenConsents: ["Receive newsletter", "Contribute to anonymous visit statistics"]},
  {name: 'user 4', email: 'emai1l@didomi.io', givenConsents: ["Receive newsletter"]},
  {name: 'user 5', email: 'emai1l@didomi.io', givenConsents: ["Receive newsletter", "Be shown targeted Ads"]},
  {name: 'user 6', email: 'emai1l@didomi.io', givenConsents: ["Receive newsletter", "Be shown targeted Ads", "Contribute to anonymous visit statistics"]},
  {name: 'user 7', email: 'emai1l@didomi.io', givenConsents: []},
];
