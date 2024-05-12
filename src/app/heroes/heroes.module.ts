import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroComponent } from "./hero/hero.component";
import { SuperHeroComponent } from "./super-hero/super-hero.component";
import { ListComponents } from "./list/list.component";

@NgModule({
  exports:[
    HeroComponent,
    ListComponents,
    SuperHeroComponent,
  ],
  declarations: [
    HeroComponent,
    ListComponents,
    SuperHeroComponent,
  ],
  imports: [
    CommonModule
  ]
})

export class HeroesModule {}
