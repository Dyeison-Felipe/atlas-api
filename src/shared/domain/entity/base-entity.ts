export type AuditableProps = {
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  createdBy: string | null;
  updatedBy: string | null;
  deletedBy: string | null;
}

export type EntityProps = {
  id: string;
  audit: AuditableProps;
}

type ConstructorEntityProps = {
  id?: string;
  audit?: Partial<AuditableProps>
};

export type BaseProps = Record<string, unknown>;

export class BaseEntity<Props extends BaseProps> {
  readonly props: Props & EntityProps;

  constructor(props: Props & ConstructorEntityProps) {
    this.props = {
      ...props,
      id: props.id ?? crypto.randomUUID().toString(),
      audit: {
        createdAt: props.audit?.createdAt ?? new Date(),
        updatedAt: props.audit?.updatedAt ?? new Date(),
        deletedAt: props.audit?.deletedAt ?? null,
        createdBy: props.audit?.createdBy ?? null,
        updatedBy: props.audit?.updatedBy ?? null,
        deletedBy: props.audit?.deletedBy ?? null,
      }
    };
  }

  get id() {
    return this.props.id;
  }

  get audit() {
    return this.props.audit;
  }

  protected markAsDeleted() {
    this.audit.deletedAt = new Date();
  }

  protected updateTimestamp() {
    if (this.props.audit) {
      this.props.audit.updatedAt = new Date();
    }
  }

  toJSON(): Props & EntityProps {
    return {
      ...this.props,
    };
  }

  static with<Props extends BaseProps, Ent extends BaseEntity<Props>>(
    this: new (
      props: Props & EntityProps,
    ) => Ent,
    props: Props & EntityProps,
  ): Ent {
    return new this(props);
  }
}