//  Dependancies
import { default as performArgumentValidation } from './validate';


/**
 * @description
 *  Number parameters for which assertion is performed
 *
 * @returns {Number[]}
 */
function getAssertionArguments() : number[] {

    return [
        -600,
        -5.6975,
        -.5000,
        -0.0001,
        0.0525,
        .99999,
        568
    ];
}

/**
 * @description
 *  Number parameter value/data type tests.
 *
 * @export
 */
export default function() : void {

    describe('Number value', () : void => {

        const dataTypeOfArgumentSupplied : string = 'number';

        for(const argumentSuppliedToMethod of getAssertionArguments()) {
            performArgumentValidation(
                dataTypeOfArgumentSupplied,
                'number',
                argumentSuppliedToMethod
            );
        }
    });
}
