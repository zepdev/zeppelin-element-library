/**
 * Entry Point for Bundle creation.
 *
 * import all relevant scripts here
 */
import './bundle_source_styles.scss';
import Button from './library/elements/button/button';

// eslint-disable-next-line
console.log('this will be the main js bundle entry point.');

const btn = new Button();
console.log('btn', btn);
