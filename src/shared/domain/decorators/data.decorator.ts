export function Data() {
  return <T extends { new(...args: any[]): { props: unknown } }>(
    target: T,
  ) => {
    return class extends target {
      constructor(...args: any[]) {
        super(...args);
        this.createAccessors();
      }
      createAccessors() {
        const props = this.props as Record<string, unknown>;

        Object.keys(props).forEach((key) => {
          Object.defineProperty(this, key, {
            get: function () {
              return this.props[key];
            },
            set: function (value: unknown) {
              this.props[key] = value;
            },
            enumerable: true,
            configurable: true,
          });
        });
      }
    };
  };
}