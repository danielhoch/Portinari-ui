import { Component, OnInit } from '@angular/core';
import { PoBreadcrumb, PoBreadcrumbItem } from '@portinari/portinari-ui';

@Component({
  selector: 'configuracoes',
  templateUrl: './configuracoes.component.html',
  styleUrls: ['./configuracoes.component.css']
})
export class ConfiguracoesComponent implements OnInit {

  title = 'Configurações';
  breadcrumb: PoBreadcrumb;
  breadcrumbItem: PoBreadcrumbItem;
  breadcrumbItems: Array<PoBreadcrumbItem>;

  action: string;

  constructor() { }

  ngOnInit() {

    this.addBreadcrumbItem();

  }

  addBreadcrumbItem() {
    this.breadcrumbItem = { label: 'Configurações', link: 'home/configuracoes' };
    this.breadcrumb.items = [this.breadcrumbItem];
  }

  save() {
    this.action = 'Save';
  }

}
