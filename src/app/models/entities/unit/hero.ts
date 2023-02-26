
import { HeroicRank } from "src/app/enums/heroic-rank.enum";
import { Unit } from "./unit";

export class Hero extends Unit {
    public readonly fate: number;
    public readonly power!: HeroicRank;
    public readonly rank: number;
    public readonly will: number;

    public constructor(hero: Partial<Hero>) {
        super(hero);
        this.fate = hero.fate!;
        this.power = hero.power!;
        this.rank = hero.rank!;
        this.will = hero.will!;
    }

}
