/**
 * Intima.ai - API
 * Bem vindo a documentação da API do [Intima.ai](https://app.intima.ai). Está documentação cobre todas as ações disponíveis dentro do Intima.ai e as disponibilizam como `ENDPOINTS` que podem ser integrados e utilizados por outros serviços ou aplicações, bastando somente possuir o `Token de acesso da API`.
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.8
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.IntimaaiApi);
  }
}(this, function(expect, IntimaaiApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new IntimaaiApi.ActionsProcessosCopyResponse();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ActionsProcessosCopyResponse', function() {
    it('should create an instance of ActionsProcessosCopyResponse', function() {
      // uncomment below and update the code to test ActionsProcessosCopyResponse
      //var instance = new IntimaaiApi.ActionsProcessosCopyResponse();
      //expect(instance).to.be.a(IntimaaiApi.ActionsProcessosCopyResponse);
    });

    it('should have the property data (base name: "data")', function() {
      // uncomment below and update the code to test the property data
      //var instance = new IntimaaiApi.ActionsProcessosCopyResponse();
      //expect(instance).to.be();
    });

  });

}));
