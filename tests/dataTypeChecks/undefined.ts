//  Dependancies
import { isUndefined as isArgumentOfUndefinedDataType } from '../..';
import { default as performArgumentValidation } from './validate';


/**
 * @description
 *  Undefined parameter value/data type tests.
 *
 * @export
 */
export default function() : void {

    describe('Undefined value/data type', () : void => {

        const dataTypeOfArgumentSupplied : string = 'undefined';

        performArgumentValidation(
            dataTypeOfArgumentSupplied,
            isArgumentOfUndefinedDataType
        );
        performArgumentValidation(
            dataTypeOfArgumentSupplied,
            isArgumentOfUndefinedDataType,
            undefined
        );
    });
}
