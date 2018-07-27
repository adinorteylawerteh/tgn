import { NgModule } from '@angular/core';
import { CatsPipe } from './cats/cats';
import { YoutubePipe } from './youtube/youtube';
@NgModule({
	declarations: [CatsPipe,
    YoutubePipe],
	imports: [],
	exports: [CatsPipe,
    YoutubePipe]
})
export class PipesModule {}
