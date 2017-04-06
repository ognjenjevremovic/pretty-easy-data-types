//  Dependancies
import { isArray as isArgumentOfArrayDataType } from '../..';
import { default as performArgumentValidation } from './validate';


/**
 * @description
 *  Array parameters for which assertion is performed
 *
 * @returns {any[]}
 */
function getAssertionArguments() : any[] {

    return [
        [ ],
        [ '' ],
        [ [ 'nested', [ 'like never before' ] ] ],
        [ 0, false, null, undefined ],
        [ { name : 'Ognjen' } ],
        [ new Error('custom'), new Error('error'), new Error('list') ],
        [ 555, true, 'string' ]
    ];
}

/**
 * @description
 *  Array parameter value/data type tests.
 *
 * @export
 */
export default function() : void {

    describe('Array data type value', () => {

        const dataTypeOfArgumentSupplied : string = 'Array';

        for(const argumentSuppliedToMethod of getAssertionArguments()) {
            performArgumentValidation(
                dataTypeOfArgumentSupplied,
                isArgumentOfArrayDataType,
                argumentSuppliedToMethod
            );
        }
    });
}
