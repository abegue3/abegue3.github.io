import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Faction } from 'src/app/models/entities/faction';
import { AllianceType } from 'src/app/enums/alliance-type.enum';
import alliances from 'src/assets/data-src/alliances.json';
import factions from 'src/assets/data-src/factions.json';

/** Service relatif aux factions. */
@Injectable({ providedIn: 'root' })
export class FactionService {

  /**
   * Récupération du type d'une alliance.
   * @param factionsIds Identifiants des factions constituant l'alliance.
   */
  public fetchAllianceType(factionsIds: number[]): Observable<AllianceType | null> {
    if (factionsIds.length < 2) return of(null);

    let allianceType: AllianceType | null = null;
    let i = 0;
    do {
      let j = i + 1;

      do {
        var factionAlliances = alliances[factionsIds[i]];

        if (factionAlliances[AllianceType.Green]) {
          if (!allianceType)
            allianceType = AllianceType.Green;
          continue;
        }

        if (factionAlliances[AllianceType.Orange]) {
          allianceType = AllianceType.Orange;
          continue;
        }

        if (factionAlliances[AllianceType.Red])
          allianceType = AllianceType.Red;

      } while ((!allianceType || allianceType < AllianceType.Red) && ++j < factionsIds.length);
    } while ((!allianceType || allianceType < AllianceType.Red) && ++i < factionsIds.length - 1)

    return of(allianceType);
  }

  /**
   * Récupération des factions.
   * @param isGood Filtre sur l'allégeance. Si vrai : bien, sinon : mal.
   */
  public fetchFactions(isGood: boolean): Observable<Faction[]> {
    return of(
      factions
        .filter((f: any) => f.isGood == isGood)
        .sort((x: any, y: any) => x.name.localeCompare(y.name, undefined, { sensitivity: 'base' }))
        .map((f: any) => new Faction(f.id, f.name))
    );
  }

  /**
   * Récupération du libellé lié à un type d'alliance.
   * @param allianceType Type d'alliance.
   */
  public getAllianceLabel(allianceType: AllianceType): string {
    switch (allianceType) {
      case AllianceType.Green:
        return 'Alliance historique';
      case AllianceType.Orange:
        return 'Alliance de circonstance';
      case AllianceType.Red:
        return 'Alliance impossible';
    }
  }

}
