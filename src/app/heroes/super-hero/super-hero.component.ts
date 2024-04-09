import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-super-hero',
  templateUrl: './super-hero.component.html',
  styleUrl: './super-hero.component.css'
})
export class SuperHeroComponent {

  public name: string = 'Hulk';
  public age: number = 45;

  getCapitalized():string{
    return 'Metodo para capitalizar'
  }

  changenName():string{
    return this.name = 'Spiderman';
  }

  changenAge():number{
    return this.age = 25;
  }

  resetChangen():void{
    this.name = 'Hulk';
    this.age = 45;
  }
}
