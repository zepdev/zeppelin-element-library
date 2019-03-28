import * as helpers from '../../helpers';

const buttonData = {
  primary: {
    name: 'primary',
    js: `<button type="button" class="${helpers.classPrefix}button ${
      helpers.classPrefix
    }button-primary" ${
      helpers.htmlDataVarType
    }="button">Primary Button</button>`,
    react: false,
    angular: false,
    vue: false
  },
  primary_disabled: {
    name: 'primary_disabled',
    js: `<button type="button" class="${helpers.classPrefix}button ${
      helpers.classPrefix
    }button-primary ${helpers.classPrefix}button-primary--disabled" ${
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
    }button-secondary" ${
      helpers.htmlDataVarType
    }="button">Secondary Button</a>`,
    react: false,
    angular: false,
    vue: false
  },
  secondary_disabled: {
    name: 'secondary_disabled',
    js: `<a type="button" class="${helpers.classPrefix}button ${
      helpers.classPrefix
    }button-secondary ${helpers.classPrefix}button-secondary--disabled" ${
      helpers.htmlDataVarType
    }="button">Secondary Button</a>`,
    react: false,
    angular: false,
    vue: false
  },
  full: {
    name: 'full',
    js: `<button type="button" class="${helpers.classPrefix}button ${
      helpers.classPrefix
    }button-primary ${helpers.classPrefix}button--full" ${
      helpers.htmlDataVarType
    }="button">Primary Button</button>`,
    react: false,
    angular: false,
    vue: false
  }
};

export default buttonData;
