import { NgModule } from '@angular/core';
import { CatsPipe } from './cats/cats';
@NgModule({
	declarations: [CatsPipe],
	imports: [],
	exports: [CatsPipe]
})
export class PipesModule {}
