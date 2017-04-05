//  Dependancies
import { isUndefined } from '../..';
import { default as validate } from './validate';


/**
 * @description
 *  Undefined parameter value/data type tests.
 *
 * @export
 * @returns {*}
 */
export default function() : void {

    describe('Undefined value/data type', () : void => {

        const info : string = 'from undefined';

        validate(info, isUndefined);
        validate(info, isUndefined, undefined);
    });
}
