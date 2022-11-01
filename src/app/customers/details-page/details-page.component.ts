import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { tap,Observable } from 'rxjs';
import { SeoService } from 'src/app/services/seo.service';


@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {
  customerId: string = '';
  customer!: Observable<any>;


  constructor(
    private route: ActivatedRoute,
    private db: AngularFirestore,
    private seo: SeoService
  ) {}

  ngOnInit(): void {
    this.customerId = this.route.snapshot.paramMap.get('id');

    this.customer = this.db
    .collection('customers')
    .doc<any>(this.customerId)
    .valueChanges()
    .pipe(
      tap(cust =>
      this.seo.generateTags({
        title: cust.name,
        description:cust.description,
        image: cust.image
      })
      )
    );
  }

}
