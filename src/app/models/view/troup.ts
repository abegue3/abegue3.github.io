import { Hero } from "../entities/unit/hero";
import { Warrior } from "../entities/unit/warrior";
import { TroupUnit } from "./troup-unit";

export class Troup {
    public captain: TroupUnit<Hero>;
    public warriors = new Array<TroupUnit<Warrior>>();

    public constructor(hero: Hero) {
        this.captain = new TroupUnit(hero);
    }

    public get cost(): number {
        return this.captain.cost;
    }
}
