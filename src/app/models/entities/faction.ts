/** Faction. */
export class Faction {

    /** Identifiant. */
    public readonly id: number;

    /** Nom. */
    public readonly name: string;

    public constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}
