//  Dependancies
import {
    getType,
    isArray,
    isBoolean,
    isDate,
    isError,
    isNull,
    isNumber,
    isObject,
    isString,
    isUndefined
} from '..';
import * as assert from 'assert';


//  For test purposes only
declare function getType(val?: any): string;
declare function isUndefined(val?: any): string;

//  Should return true -> type
const shouldReturn: string = 'Should return true -> type';
const isOk : string = 'Type of value passed is matching ->';


//  Get the value types
describe('Check the type of value passed', () => {
    //  type string
    it(`${shouldReturn} string`, () => {
        assert.equal(getType('string'), 'string');
        assert.equal(getType(new String('string')), 'string');
    });
    //  type number
    it(`${shouldReturn} number`, () => {
        assert.equal(getType(2), 'number');
        assert.equal(getType(new Number(10)), 'number');
    })
    //  type boolean
    it(`${shouldReturn} boolean`, () => {
        assert.equal(getType(true), 'boolean');
        assert.equal(getType(new Boolean(25)), 'boolean');
    });
    //  type null
    it(`${shouldReturn} null`, () => {
        assert.equal(getType(null), 'null');
    });
    //  type undefined
    it(`${shouldReturn} undefined`, () => {
        assert.equal(getType(), 'undefined');
        assert.equal(getType(undefined), 'undefined');
    })
    //  type date
    it(`${shouldReturn} date`, () => {
        assert.equal(getType(new Date()), 'date');
    });
    //  type error
    it(`${shouldReturn} error`, () => {
        assert.equal(getType(new Error('New error')), 'error');
    });
    //  type object
    it(`${shouldReturn} object`, () => {
        assert.equal(getType({foo: 'bar'}), 'object');
        assert.equal(getType(new Object({bar: 'baz'})), 'object');
    });
    //  type array
    it(`${shouldReturn} array`, () => {
        assert.equal(getType(['foo', 2, true]), 'array');
        assert.equal(getType(new Array<string | number | boolean>('foo', 2, true)), 'array');
    });
});

//  Check for the types
describe('Check if the type of of value passed matches', () => {
    it(`${isOk} string`, () => {
        assert.ok(isString('string'), isOk);
        assert.ok(isString(new String('string')), isOk);
    });
    //  type number
    it(`${isOk} number`, () => {
        assert.ok(isNumber(2), isOk);
        assert.ok(isNumber(new Number(10)), isOk);
    })
    //  type boolean
    it(`${isOk} boolean`, () => {
        assert.ok(isBoolean(true), isOk);
        assert.ok(isBoolean(new Boolean(25)), isOk);
    });
    //  type null
    it(`${isOk} null`, () => {
        assert.ok(isNull(null), isOk);
    });
    //  type undefined
    it(`${isOk} undefined`, () => {
        assert.ok(isUndefined(), isOk);
        assert.ok(isUndefined(undefined), isOk);
    })
    //  type date
    it(`${isOk} date`, () => {
        assert.ok(isDate(new Date()), isOk);
    });
    //  type error
    it(`${isOk} error`, () => {
        assert.ok(isError(new Error('New error')), isOk);
    });
    //  type object
    it(`${isOk} object`, () => {
        assert.ok(isObject({foo: 'bar'}), isOk);
        assert.ok(isObject(new Object({bar: 'baz'})), isOk);
    });
    //  type array
    it(`${isOk} array`, () => {
        assert.ok(isArray(['foo', 2, true]), isOk);
        assert.ok(isArray(new Array<string | number | boolean>('foo', 2, true)), isOk);
    });
});
