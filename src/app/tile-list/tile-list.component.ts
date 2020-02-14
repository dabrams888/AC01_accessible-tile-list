import { Component, Input } from '@angular/core';

@Component({
  selector: 'tile-list',
  templateUrl: './tile-list.component.html',
  styleUrls: [ './tile-list.component.scss' ]
})
export class TileListComponent  {
  /*
    Inputs:
    PARAMETER | DATATYPE  | VALUES
    type      | String    | [checkbox, radio]
    legend    | String    | *
  */

  @Input() type : String; 
  @Input() legend : String;
  @Input() labels : Array<String>;
  
}
