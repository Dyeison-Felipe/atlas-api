export type EntityProps = {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}

export type BaseProps = Record<string, unknown>

export abstract class Entity<Props extends BaseProps> {
    public readonly id: string;
    public readonly createdAt: Date;
    public readonly updatedAt: Date;
    public readonly deletedAt: Date | null;

    constructor(props: EntityProps & Props) {
        this.id = props.id ?? crypto.randomUUID();
        this.createdAt = props.createdAt ?? new Date();
        this.updatedAt = props.updatedAt ?? new Date();
        this.deletedAt = props.deletedAt ?? null;
    
        Object.assign(this, props);
      }
}