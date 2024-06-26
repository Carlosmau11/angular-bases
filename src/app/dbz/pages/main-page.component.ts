import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  public characters: Character[] = [{
    name: 'Krilin',
    power: 9500
  },{
    name: 'Goku',
    power: 1000
  },
  {
    name: 'Vegeta',
    power: 7000
  }
];


  onNewCharacter(character: Character):void{
    this.characters.push(character);
  }

  onDeleteCharacter (index: number):void{
    this.characters.splice(index,1);
  }
}
