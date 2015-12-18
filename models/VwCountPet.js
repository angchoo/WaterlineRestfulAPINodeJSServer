/**
 * Created by jfangchoo on 01/07/2015.
 */
/**
 * Badge Waterline Model.
 * @module models/vwcountpet
 *
 * @description
 * pet.vw_count_pet Model
 *
 */
var Waterline = require('waterline');

module.exports = Waterline.Collection.extend({
    identity: 'vwcountpet',
    tableName: 'vw_count_pet',
    schema: true,
    migrate: 'safe',
    connection: 'myLocalMySql',
    autoPK: false,
    autoCreatedAt: false,
    autoUpdatedAt: false,

    attributes: {
        table_name: 'string',
        table_rows: 'integer'
    }

});

