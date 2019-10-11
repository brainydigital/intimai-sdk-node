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
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.IntimaaiApi) {
      root.IntimaaiApi = {};
    }
    root.IntimaaiApi.IntimacoesResponse = factory(root.IntimaaiApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The IntimacoesResponse model module.
   * @module model/IntimacoesResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>IntimacoesResponse</code>.
   * @alias module:model/IntimacoesResponse
   * @class
   * @param currentPage {Number} 
   * @param data {Array.<Object>} 
   * @param firstPageUrl {String} 
   * @param from {Number} 
   * @param lastPage {Number} 
   * @param lastPageUrl {String} 
   * @param path {String} 
   * @param perPage {Number} 
   * @param to {Number} 
   * @param total {Number} 
   */
  var exports = function(currentPage, data, firstPageUrl, from, lastPage, lastPageUrl, path, perPage, to, total) {
    var _this = this;

    _this['current_page'] = currentPage;
    _this['data'] = data;
    _this['first_page_url'] = firstPageUrl;
    _this['from'] = from;
    _this['last_page'] = lastPage;
    _this['last_page_url'] = lastPageUrl;
    _this['path'] = path;
    _this['per_page'] = perPage;
    _this['to'] = to;
    _this['total'] = total;
  };

  /**
   * Constructs a <code>IntimacoesResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IntimacoesResponse} obj Optional instance to populate.
   * @return {module:model/IntimacoesResponse} The populated <code>IntimacoesResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('current_page')) {
        obj['current_page'] = ApiClient.convertToType(data['current_page'], 'Number');
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [Object]);
      }
      if (data.hasOwnProperty('first_page_url')) {
        obj['first_page_url'] = ApiClient.convertToType(data['first_page_url'], 'String');
      }
      if (data.hasOwnProperty('from')) {
        obj['from'] = ApiClient.convertToType(data['from'], 'Number');
      }
      if (data.hasOwnProperty('last_page')) {
        obj['last_page'] = ApiClient.convertToType(data['last_page'], 'Number');
      }
      if (data.hasOwnProperty('last_page_url')) {
        obj['last_page_url'] = ApiClient.convertToType(data['last_page_url'], 'String');
      }
      if (data.hasOwnProperty('path')) {
        obj['path'] = ApiClient.convertToType(data['path'], 'String');
      }
      if (data.hasOwnProperty('per_page')) {
        obj['per_page'] = ApiClient.convertToType(data['per_page'], 'Number');
      }
      if (data.hasOwnProperty('to')) {
        obj['to'] = ApiClient.convertToType(data['to'], 'Number');
      }
      if (data.hasOwnProperty('total')) {
        obj['total'] = ApiClient.convertToType(data['total'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} current_page
   */
  exports.prototype['current_page'] = undefined;
  /**
   * @member {Array.<Object>} data
   */
  exports.prototype['data'] = undefined;
  /**
   * @member {String} first_page_url
   */
  exports.prototype['first_page_url'] = undefined;
  /**
   * @member {Number} from
   */
  exports.prototype['from'] = undefined;
  /**
   * @member {Number} last_page
   */
  exports.prototype['last_page'] = undefined;
  /**
   * @member {String} last_page_url
   */
  exports.prototype['last_page_url'] = undefined;
  /**
   * @member {String} path
   */
  exports.prototype['path'] = undefined;
  /**
   * @member {Number} per_page
   */
  exports.prototype['per_page'] = undefined;
  /**
   * @member {Number} to
   */
  exports.prototype['to'] = undefined;
  /**
   * @member {Number} total
   */
  exports.prototype['total'] = undefined;



  return exports;
}));


