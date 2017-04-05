//  Dependancies
import { default as validate } from './validate';


/**
 * @description
 *  Object parameters for which assertion is performed
 *
 * @returns {Object[]}
 */
function getAssertionArguments() : object[] {

    return [
        { },
        { name : 'Ognjen', age : 23 },
        { some : 'value', falsey : false },
        { num : 0 },
        { exists : 0, defined : undefined, val : null },
        { date : new Date(), year : new Date().getFullYear().toString() }
    ];
}

/**
 * @description
 *  Object parameter value/data type tests.
 *
 * @export
 * @returns {*}
 */
export default function() : void {

    describe('Object value', () : void => {

        const info : string = 'from Object';

        for(const parameter of getAssertionArguments()) {
            validate(info, 'object', parameter);
        }
    });
}
