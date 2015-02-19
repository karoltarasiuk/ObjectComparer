define(["underscore"], function (_) {

    /**
     * Compares plain objects by sorting properties alphabetically
     * and creating a JSON string to compare.
     *
     * Pass any number of objects to compare at once.
     */
    var ObjectComparer = function () {};

    _.extend(ObjectComparer.prototype, {

        /**
         * Returns true if all objects are equal, false otherwise.
         * @return {[boolean]}
         */
        areEqual: function () {

            if (arguments.length < 2) {
                throw "min 2 arguments needed";
            }

            this.objects = arguments;

            var jsons = [];

            _.each(this.objects, function (obj) {
                jsons.push(JSON.stringify(
                    copyObjectAlphabetically(obj)
                ));
            });

            jsons = _.uniq(jsons);

            if (jsons.length === 1) {
                return true;
            }

            return false;
        }
    });

    var extractPropertiesAlphabetically = function (obj) {

        var properties = [];

        _.each(obj, function (val, key) {
            properties.push(key);
        });

        return properties.sort();
    };

    var copyObjectAlphabetically = function (obj) {

        var arr, ret;

        if (_.isArray(obj)) {
            ret = [];
            _.each(obj, function (val, index) {
                ret[index] = copyObjectAlphabetically(val);
            });
        } else if (_.isObject(obj)) {
            ret = {};
            arr = extractPropertiesAlphabetically(obj);
            _.each(arr, function (key) {
                ret[key] = copyObjectAlphabetically(obj[key]);
            });
        } else {
            ret = obj;
        }

        return ret;
    };

    return ObjectComparer;
});
