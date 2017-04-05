//  Dependancies
import { default as validate } from './validate';


/**
 * @description
 *  Array parameters for which assertion is performed
 *
 * @returns {Array<any>}
 */
function getAssertionArguments() : Array<any> {

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
 * @returns {*}
 */
export default function() : void {

    describe('Array data type', () => {

        const info : string = 'from Array';

        for(const parameter of getAssertionArguments()) {
            validate(info, 'array', parameter);
        }
    });
}
