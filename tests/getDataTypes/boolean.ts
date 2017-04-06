//  Dependancies
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

    describe('Boolean value/data type', () : void => {

        const dataTypeOfArgumentSupplied : string = 'boolean';

        for(const argumentSuppliedToMethod of getAssertionArguments()) {
            performArgumentValidation(
                dataTypeOfArgumentSupplied,
                'boolean',
                argumentSuppliedToMethod
            );
        }
    });
}
