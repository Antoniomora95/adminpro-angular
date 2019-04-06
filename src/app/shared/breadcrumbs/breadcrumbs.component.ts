import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {
  private title: string;
  constructor(private router: Router, private titlePage: Title, private meta: Meta ) {
    this.getDataRoute()
    .subscribe(data => {
      console.log(data);
      this.title = data.titulo;
      this.titlePage.setTitle(this.title);
      const metaTag: MetaDefinition = {
        name: 'Description',
        content: this.title
      };
      this.meta.updateTag(metaTag);
    });
   }

  ngOnInit() {
  }
  getDataRoute() {
   return  this.router.events.pipe(
      filter(event => event instanceof ActivationEnd && event.snapshot.data.hasOwnProperty('titulo')),
      map((activationEnd: ActivationEnd) => activationEnd.snapshot.data)
    );
  }

}
