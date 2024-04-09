import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";
import { SuperHeroComponent } from "./super-hero/super-hero.component";

@NgModule({
  exports:[
    HeroComponent,
    ListComponent,
    SuperHeroComponent,
  ],
  declarations: [
    HeroComponent,
    ListComponent,
    SuperHeroComponent,
  ],
  imports: [
    CommonModule
  ]
})

export class HeroesModule {}
