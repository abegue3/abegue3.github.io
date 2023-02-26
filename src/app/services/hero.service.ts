import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HeroicRank } from '../enums/heroic-rank.enum';
import heroes from 'src/assets/data-src/heroes.json';
import heroesOpts from 'src/assets/data-src/options/heroesOpts.json';
import opts from 'src/assets/data-src/options/opts.json';
import { Hero } from '../models/entities/unit/hero';
import { UnitOption } from '../models/entities/unit-option';

/** Service relatif aux héros. */
@Injectable({ providedIn: 'root' })
export class HeroService {

  /**
   * Récupération des options disponibles pour un héros.
   * @param heroId Identifiant du héros.
   */
  public fechtHeroOptions(heroId: number): Observable<UnitOption[]> {
    return of(
      heroesOpts
        .filter((ho: any) => ho.heroId == heroId)
        .map((ho: any) =>
          new UnitOption(
            opts.find((opt: any) => opt.id == ho.optionId)!.name,
            ho.cost
          )
        )
    )
  }

  /**
   * Récupération des héros d'une faction.
   * @param factionId Identifiant de la faction.
   */
  public fetchHeroesByFaction(factionId: number): Observable<Hero[]> {
    return of(
      heroes
        .filter((r: any) => r.factionId == factionId)
        .sort((x: any, y: any) => x.name.localeCompare(y.name, undefined, { sensitivity: 'base' }))
        .map((h: any) =>
          new Hero({
            id: h.id,
            factionId: h.factionId,
            name: h.name,
            cost: h.cost,
            rank: h.rank,
            movement: h.movement,
            fight: h.fight,
            shoot: h.shoot,
            strength: h.strength,
            defense: h.defense,
            attack: h.attack,
            health: h.health,
            bravery: h.bravery,
            power: h.power,
            will: h.will,
            fate: h.fate
          })
        )
    );
  }

  /**
   * Récupération du libellé associé à un rang héroïque.
   * @param heroicRank Rang héroïque.
   */
  public getRankLabel(heroicRank: HeroicRank): string {
    switch (heroicRank) {
      case HeroicRank.Legend:
        return 'Héros de légende';
      case HeroicRank.Major:
        return "Héros d'envergure";
      case HeroicRank.Common:
        return 'Héros commun';
      case HeroicRank.Minor:
        return 'Héros mineur';
      case HeroicRank.Independant:
        return 'Héros indépendant';
    }
  }

  /**
   * Récupération du nombre de suivants associé à un rang héroïque.
   * @param heroicRank Rang héroïque.
   */
  public getRankFollowers(heroicRank: HeroicRank): number {
    switch (heroicRank) {
      case HeroicRank.Legend:
        return 18;
      case HeroicRank.Major:
        return 15;
      case HeroicRank.Common:
        return 12;
      case HeroicRank.Minor:
        return 6;
      case HeroicRank.Independant:
        return 0;
    }
  }

}
