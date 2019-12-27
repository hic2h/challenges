import {Component, Input, OnChanges, SimpleChanges, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {Consent} from '../../data/schema/consent';

@Component({
  selector: 'app-consents-list',
  templateUrl: './consents-list.component.html',
  styleUrls: ['./consents-list.component.scss']
})
export class ConsentsListComponent implements OnChanges {
  @Input() consents: Consent[];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['name', 'email', 'givenConsents'];
  dataSource: MatTableDataSource<Consent> = new MatTableDataSource<Consent>([]);

  ngOnChanges(changes: SimpleChanges) {
    if (changes.consents.currentValue && changes.consents.currentValue.length) {
      this.dataSource = new MatTableDataSource<Consent>(this.consents);
      this.dataSource.paginator = this.paginator;
    }
  }
}
