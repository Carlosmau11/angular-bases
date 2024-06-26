import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponents {

  public heroeNames: string[] = ['Spiderman','Iroman', 'Hulk', 'Thor'];
  public deleteHero?: string;

  removeLastHero():void{
    this.deleteHero = this.heroeNames.pop();
  }
}
