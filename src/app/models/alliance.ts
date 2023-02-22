import { AllianceType } from 'src/app/enums/alliance-type.enum';
import { Faction } from './faction';

/** Alliance entre deux faction. */
export class Alliance {

    /** Identifiant de la faction 'de gauche'. */
    public readonly leftFactionId: number;

    /** Identifiant de la faction 'de droite'.*/
    public readonly rightFactionId: number;

    /** Type. */
    public readonly type: AllianceType;

    public constructor(leftFaction: Faction, rightFaction: Faction, type: AllianceType) {
        this.leftFactionId = leftFaction.id;
        this.rightFactionId = rightFaction.id;
        this.type = type;
    }

}
