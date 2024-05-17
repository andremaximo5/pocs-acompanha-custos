import { Component, OnInit, VERSION } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  menus: Array<PoMenuItem> = [];

  ngOnInit(): void {
    this.menus = [
      {
        label: 'Acompanha Custos',
        icon: 'po-icon-chart-columns',
        link: 'track-costs',
        shortLabel: 'Custos',
        
      },
      {
        label: 'Acompanha Custos',
        icon: 'po-icon-chart-columns',
        link: 'track-costs',
        shortLabel: 'Custos',
      },
      {
        label: 'Acompanha Custos',
        icon: 'po-icon-chart-columns',
        link: 'track-costs',
        shortLabel: 'Custos',
      },
    ];
  }
}
