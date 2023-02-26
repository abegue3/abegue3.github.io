import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Equipment } from '../models/entities/equipment';

/** Service relatif à l'equipment. */
@Injectable({ providedIn: 'root' })
export class EquipmentService {

  constructor() { }

  public fetchUnitEquipments(unitId: number): Observable<Equipment[]> {
    return of([]);
  }

}
