/**
 * Created by jfangchoo on 18/06/2015.
 */

module.exports = function (orm) {

    orm.loadCollection(require('../models/petModel'));
    orm.loadCollection(require('../models/VwCountPet'));
}


