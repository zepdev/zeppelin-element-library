import NumberInput from '../elements/numberinput/zel.numberinput';

// Proxy Class for dynamic element instantiation
const classes = {
  NumberInput
};
export default class DynamicClass {
  constructor(className, opts) {
    return new classes[className](opts);
  }
}
