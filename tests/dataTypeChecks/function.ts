//  Dependancies
import { isFunction as isArgumentOfFunctionDataType } from '../..';
import { default as performArgumentValidation } from './validate';


/**
 * @description
 *  Function parameters for which assertion is performed
 *
 * @returns {Function[]}
 */
function getAssertionArguments() : Function[] {

    return [
        () : void => { },
        () : Error => new Error('It should not be thrown, thus not stopping the Node process'),
        () : number => 5000,
        (param : any) : void => console.log(param)
    ];
}

/**
 * @description
 *  Function parameter value/data type tests.
 *
 * @export
 */
export default function() : void {

    describe('Function data type value', () : void => {

        const dataTypeOfArgumentSupplied : string = 'function';

        for(const argumentSuppliedToMethod of getAssertionArguments()) {
            performArgumentValidation(
                dataTypeOfArgumentSupplied,
                isArgumentOfFunctionDataType,
                argumentSuppliedToMethod
            );
        }
    });
}
