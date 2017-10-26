import numeral from 'numeral';
import style from './index.css'; // eslint-disable-line no-unused-vars

const courseValue = numeral(1000).format('$0,0.00');

console.log('monet:' + courseValue);