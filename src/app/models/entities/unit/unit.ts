export abstract class Unit {
    public readonly attack: number;
    public readonly bravery: number;
    public readonly cost: number;
    public readonly defense: number;
    public readonly factionId: number;
    public readonly fight: number;
    public readonly id: number;
    public readonly health: number;
    public readonly movement: number;
    public readonly name: string;
    public readonly shoot: number;
    public readonly strength: number;

    public constructor(init: Partial<Unit>) {
        this.attack = init.attack!;
        this.bravery = init.bravery!;
        this.cost = init.cost!;
        this.defense = init.defense!;
        this.factionId = init.factionId!;
        this.fight = init.fight!;
        this.id = init.id!;
        this.health = init.health!;
        this.movement = init.movement!;
        this.name = init.name!;
        this.shoot = init.shoot!;
        this.strength = init.strength!;
    }
}