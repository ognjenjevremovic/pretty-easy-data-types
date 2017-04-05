//  Dependancies
import { isString } from '../..';
import { default as validate } from './validate';


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

    describe('String value/data type', () : void => {

        const info : string = 'from string';

        for(const parameter of getAssertionArguments()) {
            validate(info, isString, parameter);
        }
    });
}