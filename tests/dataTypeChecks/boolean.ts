//  Dependancies
import { isBoolean as isArgumentOfBooleanDataType } from '../..';
import { default as performArgumentValidation } from './validate';


/**
 * @description
 *  Boolean parameters for which assertion is performed
 *
 * @returns {boolean[]}
 */
function getAssertionArguments() : boolean[] {

    return [
        true,
        false
    ];
}

/**
 * @description
 *  Boolean parameter value/data type tests.
 *
 * @export
 */
export default function() : void {

    describe('Boolean data type value', () : void => {

        const dataTypeOfArgumentSupplied : string = 'boolean';

        for(const argumentSuppliedToMethod of getAssertionArguments()) {
            performArgumentValidation(
                dataTypeOfArgumentSupplied,
                isArgumentOfBooleanDataType,
                argumentSuppliedToMethod
            );
        }
    });
}
