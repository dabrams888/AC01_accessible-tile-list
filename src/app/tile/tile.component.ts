import { Component, Input } from '@angular/core';

@Component({
  selector: 'tile',
  templateUrl: './tile.component.html',
  styleUrls: [ './tile.component.scss' ]
})
export class TileComponent  {
  /*
    Inputs:
    PARAMETER | DATATYPE  | VALUES
    type      | String    | [checkbox, radio]
    label     | String    | *
  */

  @Input() type : String;   
  @Input() label : String;
  @Input() index : number;
  @Input() groupLabel : String;
}
