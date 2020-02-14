import { Injectable } from '@angular/core';

import { CHECKBOXLIST, RADIOLIST } from '../mocks/mock-lists';

@Injectable({
  providedIn: 'root',
})
export class TileLabelsService {
  labelList: Array<String>;

  getCheckboxes(): String[] {
    return CHECKBOXLIST;
  }
  getRadios(): String[] {
    return RADIOLIST;
  }
}