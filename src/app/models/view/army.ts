import { Faction } from "../entities/faction";
import { Troup } from "./troup";

export class Army {
    public faction = new Array<Faction>();
    public isGood: boolean;
    public name: string;
    public troups = new Array<Troup>();

    public constructor(name: string, isGood: boolean) {
        this.name = name;
        this.isGood = isGood;
    }
}
