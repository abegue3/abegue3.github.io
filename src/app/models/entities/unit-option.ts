export class UnitOption {
    public readonly name: string;
    public readonly cost: number;

    public constructor(label: string, cost: number) {
        this.name = label;
        this.cost = cost;
    }
}
