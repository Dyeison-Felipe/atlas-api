import 'reflect-metadata';

export function Data() {
  return function (target: any) {
    const properties = Object.getOwnPropertyNames(target.prototype)
      .filter(prop => prop !== 'constructor');

    properties.forEach(property => {
      const descriptor = Object.getOwnPropertyDescriptor(target.prototype, property);
      
      if (descriptor && !descriptor.get && !descriptor.set) {
        const privateField = `_${property}`;
        
        // Create getter
        Object.defineProperty(target.prototype, property, {
          get: function() {
            return this[privateField];
          },
          set: function(value: any) {
            this[privateField] = value;
          },
          enumerable: true,
          configurable: true
        });
      }
    });

    return target;
  };
}