import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Faction } from 'src/app/models/faction';
import { DataContext } from 'src/app/data-context';
import { AllianceType } from 'src/app/enums/alliance-type.enum';

/** Service en charge des factions. */
@Injectable({ providedIn: 'root' })
export class FactionService {

  /**
   * Récupération du type d'une alliance.
   * @param factionsIds Identifiants des factions constituant l'alliance.
   */
  public fetchAllianceType(factionsIds: number[]): Observable<AllianceType | null> {
    if (factionsIds.length < 2) return of(null);

    var allianceType = AllianceType.Green;
    var i = 0;
    while (allianceType > AllianceType.Red && i < factionsIds.length - 1) {
      var j = i + 1;

      while (allianceType > AllianceType.Red && j < factionsIds.length) {
        var alliance = DataContext.alliances.find(a =>
          (a.leftFactionId == factionsIds[i] && a.rightFactionId == factionsIds[j]) ||
          (a.leftFactionId == factionsIds[j] && a.rightFactionId == factionsIds[i])
        )!;

        if (alliance.type < allianceType)
          allianceType = alliance.type;

        ++j;
      }

      ++i;
    }

    return of(allianceType);
  }

  /**
   * Récupération des factions.
   * @param isGood Filtre sur l'allégeance. Si vrai : bien, sinon : mal.
   */
  public fetchFactions(isGood: boolean): Observable<Faction[]> {
    return of(
      DataContext.factions
        .filter(f => f.isGood == isGood)
        .sort((f1, f2) => f1.name.localeCompare(f2.name, undefined, { sensitivity: 'base' }))
    );
  }

}
