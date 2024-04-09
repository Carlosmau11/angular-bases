import { Component } from '@angular/core';

@Component({
  selector: 'app-herores-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'Ironman';
  public age: number = 45;

  get capitalizedName():string{
    return 'Hola Mundo';
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`
  }

  changenHero():string{
    return this.name = 'Spiderman';
  }

  changenAge():number{
    return this.age = 25;
  }
}
