import { NgModule } from '@angular/core';
import { CatsPipe } from './cats/cats';
import { Youtube } from './youtube/youtube';
@NgModule({
	declarations: [CatsPipe,
    Youtube],
	imports: [],
	exports: [CatsPipe,
    Youtube]
})
export class PipesModule {}
