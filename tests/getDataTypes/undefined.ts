//  Dependancies
import { default as performArgumentValidation } from './validate';


/**
 * @description
 *  Undefined parameter value/data type tests.
 *
 * @export
 * @returns {*}
 */
export default function() : void {

    describe('Undefined value/data type', () : void => {

        const dataTypeOfArgumentSupplied : string = 'undefined';

        performArgumentValidation(
            dataTypeOfArgumentSupplied,
            'undefined'
        );
        performArgumentValidation(
            dataTypeOfArgumentSupplied,
            'undefined',
            undefined
        );
    });
}
