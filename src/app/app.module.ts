import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TileComponent } from './tile/tile.component';
import { TileListComponent } from './tile-list/tile-list.component';

import { RemovewhitespacesPipe } from './pipes/removewhitespaces.pipe';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, TileComponent, TileListComponent, RemovewhitespacesPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
