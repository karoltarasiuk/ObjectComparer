require.config({
    paths: {
        ObjectComparer: 'src/ObjectComparer'
    }
});

require([
    'ObjectComparer'
], function (
    ObjectComparer
) {
    var comparer1, comparer2, Obj1, Obj2,
        func = function () {},
        properties = {
            a: 1,
            b: true,
            c: 'string',
            d: [],
            e: {}
        };

    Obj1 = function (properties) {
        this.func = func;
        this.properties = properties;
    };

    Obj2 = function (properties) {
        this.properties = properties;
    };

    Obj2.prototype.func = func;

    obj1 = new Obj1(properties);
    obj2 = new Obj2(properties);

    comparer1 = new ObjectComparer();
    comparer2 = new ObjectComparer(true); // do not use hasOwnProperty()

    console.log(comparer1.areEqual(obj1, obj2));
    console.log(comparer2.areEqual(obj1, obj2));
});
