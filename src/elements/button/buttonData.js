import * as helpers from '../../helpers';

const buttonData = {
  zeppelinPrimary: {
    name: 'zeppelin primary',
    js: `<div class="theme-zeppelin" style="margin-bottom: 10px;"><button type="button" class="${
      helpers.classPrefix
    }button ${helpers.classPrefix}button-primary" ${
      helpers.htmlDataVarType
    }="button"><span class="${
      helpers.classPrefix
    }button__text">Zeppelin Primary</span></button></div>`,
    react: false,
    angular: false,
    vue: false
  },
  zeppelinSecondary: {
    name: 'secondary',
    js: `<div class="theme-zeppelin" style="margin-bottom: 10px;"><a type="button" class="${
      helpers.classPrefix
    }button ${helpers.classPrefix}button-secondary" ${
      helpers.htmlDataVarType
    }="button"><span class="${
      helpers.classPrefix
    }button__text">Zeppelin Secondary</span></a></div>`,
    react: false,
    angular: false,
    vue: false
  },
  catPrimary: {
    name: 'cat primary',
    js: `<div class="theme-cat" style="margin-bottom: 10px;"><button type="button" class="${
      helpers.classPrefix
    }button ${helpers.classPrefix}button-primary" ${
      helpers.htmlDataVarType
    }="button"><span class="${
      helpers.classPrefix
    }button__text">Cat Primary</span></button></div>`,
    react: false,
    angular: false,
    vue: false
  },
  catSecondary: {
    name: 'secondary',
    js: `<div class="theme-cat" style="margin-bottom: 10px;"><button class="${
      helpers.classPrefix
    }button ${helpers.classPrefix}button-secondary" ${
      helpers.htmlDataVarType
    }="button"><span class="${
      helpers.classPrefix
    }button__text">Cat Secondary</span></button></div>`,
    react: false,
    angular: false,
    vue: false
  },
  rentalPrimary: {
    name: 'zeppelin primary',
    js: `<div class="theme-rental" style="margin-bottom: 10px;"><button type="button" class="${
      helpers.classPrefix
    }button ${helpers.classPrefix}button-primary" ${
      helpers.htmlDataVarType
    }="button"><span class="${
      helpers.classPrefix
    }button__text">Rental Primary</span></button></div>`,
    react: false,
    angular: false,
    vue: false
  },
  rentalSecondary: {
    name: 'secondary',
    js: `<div class="theme-rental" style="margin-bottom: 10px;"><a type="button" class="${
      helpers.classPrefix
    }button ${helpers.classPrefix}button-secondary" ${
      helpers.htmlDataVarType
    }="button"><span class="${
      helpers.classPrefix
    }button__text">Rental Secondary</span></a></div>`,
    react: false,
    angular: false,
    vue: false
  },
  primary_disabled: {
    name: 'primary_disabled',
    js: `<div style="margin-bottom: 10px;"><button type="button" class="${
      helpers.classPrefix
    }button ${helpers.classPrefix}button-primary ${
      helpers.classPrefix
    }button-primary--disabled" ${
      helpers.htmlDataVarType
    }="button"><span class="${
      helpers.classPrefix
    }button__text">Primary Disabled</span></button></div>`,
    react: false,
    angular: false,
    vue: false
  },
  secondary_disabled: {
    name: 'secondary_disabled',
    js: `<div style="margin-bottom: 10px;"><a type="button" class="${
      helpers.classPrefix
    }button ${helpers.classPrefix}button-secondary ${
      helpers.classPrefix
    }button-secondary--disabled" ${
      helpers.htmlDataVarType
    }="button"><span class="${
      helpers.classPrefix
    }button__text">Secondary Disabled</span></a></div>`,
    react: false,
    angular: false,
    vue: false
  },
  full: {
    name: 'full',
    js: `<div class="theme-zeppelin"><button type="button" class="${
      helpers.classPrefix
    }button ${helpers.classPrefix}button-primary ${
      helpers.classPrefix
    }button--full" ${helpers.htmlDataVarType}="button"><span class="${
      helpers.classPrefix
    }button__text">Full Width Button</span></button></div>`,
    react: false,
    angular: false,
    vue: false
  }
};

export default buttonData;
