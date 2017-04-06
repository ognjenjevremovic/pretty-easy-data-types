//  Dependancies
import { default as performArgumentValidation } from './validate';


/**
 * @description
 *  String parameters for which assertion is performed
 *
 * @returns {string[]}
 */
function getAssertionArguments() : string[] {

    return [
        '',
        '    ',
        'false',
        '0',
        'string data type',
        'lorem ipsum',
        new Date().toString(),
        '333555',
        'false',
        'should return true'
    ];
}

/**
 * @description
 *  String parameter value/data type tests.
 *
 * @export
 * @returns {*}
 */
export default function() : void {

    describe('String data type value', () : void => {

        const dataTypeOfArgumentSupplied : string = 'string';

        for(const argumentSuppliedToMethod of getAssertionArguments()) {
            performArgumentValidation(
                dataTypeOfArgumentSupplied,
                'string',
                argumentSuppliedToMethod
            );
        }
    });
}