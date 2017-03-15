"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var __1 = require("..");
var assert = require("assert");
//  Should return true -> type
var shouldReturn = 'Should return true -> type';
var isOk = 'Type of value passed is matching ->';
//  Get the value types
describe('Check the type of value passed', function () {
    //  type string
    it(shouldReturn + " string", function () {
        assert.equal(__1.getType('string'), 'string');
        assert.equal(__1.getType(new String('string')), 'string');
    });
    //  type number
    it(shouldReturn + " number", function () {
        assert.equal(__1.getType(2), 'number');
        assert.equal(__1.getType(new Number(10)), 'number');
    });
    //  type boolean
    it(shouldReturn + " boolean", function () {
        assert.equal(__1.getType(true), 'boolean');
        assert.equal(__1.getType(new Boolean(25)), 'boolean');
    });
    //  type null
    it(shouldReturn + " null", function () {
        assert.equal(__1.getType(null), 'null');
    });
    //  type undefined
    it(shouldReturn + " undefined", function () {
        assert.equal(__1.getType(), 'undefined');
        assert.equal(__1.getType(undefined), 'undefined');
    });
    //  type date
    it(shouldReturn + " date", function () {
        assert.equal(__1.getType(new Date()), 'date');
    });
    //  type error
    it(shouldReturn + " error", function () {
        assert.equal(__1.getType(new Error('New error')), 'error');
    });
    //  type object
    it(shouldReturn + " object", function () {
        assert.equal(__1.getType({ foo: 'bar' }), 'object');
        assert.equal(__1.getType(new Object({ bar: 'baz' })), 'object');
    });
    //  type array
    it(shouldReturn + " array", function () {
        assert.equal(__1.getType(['foo', 2, true]), 'array');
        assert.equal(__1.getType(new Array('foo', 2, true)), 'array');
    });
});
//  Check for the types
describe('Check if the type of of value passed matches', function () {
    it(isOk + " string", function () {
        assert.ok(__1.isString('string'), isOk);
        assert.ok(__1.isString(new String('string')), isOk);
    });
    //  type number
    it(isOk + " number", function () {
        assert.ok(__1.isNumber(2), isOk);
        assert.ok(__1.isNumber(new Number(10)), isOk);
    });
    //  type boolean
    it(isOk + " boolean", function () {
        assert.ok(__1.isBoolean(true), isOk);
        assert.ok(__1.isBoolean(new Boolean(25)), isOk);
    });
    //  type null
    it(isOk + " null", function () {
        assert.ok(__1.isNull(null), isOk);
    });
    //  type undefined
    it(isOk + " undefined", function () {
        assert.ok(__1.isUndefined(), isOk);
        assert.ok(__1.isUndefined(undefined), isOk);
    });
    //  type date
    it(isOk + " date", function () {
        assert.ok(__1.isDate(new Date()), isOk);
    });
    //  type error
    it(isOk + " error", function () {
        assert.ok(__1.isError(new Error('New error')), isOk);
    });
    //  type object
    it(isOk + " object", function () {
        assert.ok(__1.isObject({ foo: 'bar' }), isOk);
        assert.ok(__1.isObject(new Object({ bar: 'baz' })), isOk);
    });
    //  type array
    it(isOk + " array", function () {
        assert.ok(__1.isArray(['foo', 2, true]), isOk);
        assert.ok(__1.isArray(new Array('foo', 2, true)), isOk);
    });
});
//# sourceMappingURL=spec.js.map