//  Dependancies
import { default as performArgumentValidation } from './validate';


/**
 * @description
 *  Instances of Error class parameters for which assertion is performed
 *
 * @returns {Error[]}
 */
function getAssertionArguments() : Error[] {

    return [
        new Error(),
        new Error('Custom error'),
        new Error('Invalid parameter supplied'),
        new Error('It should not be thrown, thus not stopping the Node process')
    ];
}

/**
 * @description
 *  Instance of Error class parameter value/data type tests.
 *
 * @export
 */
export default function() : void {

    describe('Error value/data type', () : void => {

        const dataTypeOfArgumentSupplied : string = 'instance of Error class';

        for(const argumentSuppliedToMethod of getAssertionArguments()) {
            performArgumentValidation(
                dataTypeOfArgumentSupplied,
                'error',
                argumentSuppliedToMethod
            );
        }
    });
}
