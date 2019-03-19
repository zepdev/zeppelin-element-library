import * as helpers from '../../helpers';

const buttonData = {
  primary: {
    name: 'primary',
    js: `<button type="button" class="${helpers.classPrefix}button ${
      helpers.classPrefix
    }button--primary" ${
      helpers.htmlDataVarType
    }="button">Primary Button</button>`,
    react: false,
    angular: false,
    vue: false
  },
  primary__disabled: {
    name: 'primary__disabled',
    js: `<button type="button" class="${helpers.classPrefix}button ${
      helpers.classPrefix
    }button--primary ${helpers.classPrefix}button--primary__disabled" ${
      helpers.htmlDataVarType
    }="button">Primary Button</button>`,
    react: false,
    angular: false,
    vue: false
  },
  secondary: {
    name: 'secondary',
    js: `<a type="button" class="${helpers.classPrefix}button ${
      helpers.classPrefix
    }button--secondary" ${
      helpers.htmlDataVarType
    }="button">Secondary Button</a>`,
    react: false,
    angular: false,
    vue: false
  },
  secondary__disabled: {
    name: 'secondary__disabled',
    js: `<a type="button" class="${helpers.classPrefix}button ${
      helpers.classPrefix
    }button--secondary ${helpers.classPrefix}button--secondary__disabled" ${
      helpers.htmlDataVarType
    }="button">Secondary Button</a>`,
    react: false,
    angular: false,
    vue: false
  }
};

export default buttonData;
