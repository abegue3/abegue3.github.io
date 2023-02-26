import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Unit } from '../models/entities/unit/unit';
import warriors from 'src/assets/data-src/warriors.json';
import warriorsOpts from 'src/assets/data-src/options/warriorsOpts.json';
import opts from 'src/assets/data-src/options/opts.json';
import { Warrior } from '../models/entities/unit/warrior';
import { UnitOption } from '../models/entities/unit-option';

/** Service relatif aux guerriers. */
@Injectable({ providedIn: 'root' })
export class WarriorService {

  /**
   * Récupération des options disponibles pour un guerrier.
   * @param warriorId Identifiant du guerrier.
   */
  public fechtWarriorOptions(warriorId: number): Observable<UnitOption[]> {
    return of(
      warriorsOpts
        .filter((wo: any) => wo.warriorId == warriorId)
        .map((wo: any) =>
          new UnitOption(
            opts.find((opt: any) => opt.id == wo.optionId)!.name,
            wo.cost
          )
        )
    )
  }

  /**
   * Récupération des guerriers d'une faction.
   * @param factionId Identifiant de la faction.
   */
  public fetchWarriorsByFaction(factionId: number): Observable<Unit[]> {
    return of(
      warriors
        .filter((w: any) => w.factionId == factionId)
        .sort((x: any, y: any) => x.name.localeCompare(y.name, undefined, { sensitivity: 'base' }))
        .map((w: any) =>
          new Warrior({
            id: w.id,
            factionId: w.factionId,
            name: w.name,
            cost: w.cost,
            movement: w.movement,
            fight: w.fight,
            shoot: w.shoot,
            strength: w.strength,
            defense: w.defense,
            attack: w.attack,
            health: w.health,
            bravery: w.bravery
          })
        )
    );
  }
}
