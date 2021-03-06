/**
 * Created by jfangchoo on 18/06/2015.
 */
/**
 * User Waterline Model
 * @module models/pet
 *
 * @description
 * foobar.pet
 *
 */
var Waterline = require('waterline');

module.exports = Waterline.Collection.extend({

    identity: 'pet',
    tableName:'pet',
    schema:true,
    migrate: 'safe',
    connection: 'myLocalMySql',
    autoPK: false,
    autoCreatedAt: false,
    autoUpdatedAt: false,

    attributes: {
        id:'integer',
        name: 'string',
        breed: 'string'
    }
});
