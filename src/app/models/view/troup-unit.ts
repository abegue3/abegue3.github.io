import { Equipment } from "../entities/equipment";
import { Unit } from "../entities/unit/unit";

export class TroupUnit<TUnit extends Unit> {
    public equipments = new Array<Equipment>();

    public profile: TUnit;

    public constructor(profile: TUnit) {
        this.profile = profile;
    }

    public get cost(): number {
        return this.profile.cost;
    }

    public get id(): number {
        return this.profile.id;
    }

    public get name(): string {
        return this.profile.name;
    }
}
