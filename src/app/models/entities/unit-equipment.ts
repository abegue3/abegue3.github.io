import { Equipment } from "./equipment";
import { Unit } from "./unit/unit";

export class UnitEquipment {
    public readonly equipmentId: number;
    public readonly unitId: number;

    public constructor(unit: Unit, equipment: Equipment) {
        this.unitId = unit.id;
        this.equipmentId = equipment.id;
    }
}
