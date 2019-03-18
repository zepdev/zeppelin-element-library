import * as helpers from '../../helpers';

const buttonData = {
  text: {
    name: 'text',
    js: `<button type="button" class="${helpers.classPrefix}button" ${
      helpers.htmlDataVarType
    }="button">Text Button</button>`,
    react: false,
    angular: false,
    vue: false
  },
  filled: {
    name: 'filled',
    js: `<button type="button" class="${helpers.classPrefix}button ${
      helpers.classPrefix
    }button__filled" ${
      helpers.htmlDataVarType
    }="button">Filled Button</button>`,
    react: false,
    angular: false,
    vue: false
  },
  contained: {
    name: 'contained',
    js: `<button type="button" class="${helpers.classPrefix}button ${
      helpers.classPrefix
    }button__contained" ${
      helpers.htmlDataVarType
    }="button">Contained Button</button>`,
    react: false,
    angular: false,
    vue: false
  }
};

export default buttonData;
