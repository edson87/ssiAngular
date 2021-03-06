import {Component, Input, OnInit} from '@angular/core';
import {Item} from '../shared/item';
import {ItemService} from '../services/item.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';


@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {
  //@Input()
  item: Item;

  constructor(private itemService: ItemService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit() {
    //+ convierte en entero
    const id = +this.route.snapshot.params['id'];
    this.itemService.getItem(id).then(item => this.item = item);
  }

  goBack(): void {
    this.location.back();
  }

  onAction(id): void {
    console.log('CLICK EN EL LINK O SHARE', id);
  }
}
