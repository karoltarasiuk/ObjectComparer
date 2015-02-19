require.config({
    paths: {
        underscore: 'lib/underscore.min',
        ObjectComparer: 'src/ObjectComparer'
    }
});

require([
    'ObjectComparer'
], function (
    ObjectComparer
) {
    var comparer,
        obj1 = {
            a: 1,
            b: true,
            c: 'string',
            d: [],
            e: {}
        },
        obj2 = obj1,
        obj3 = obj1;

    comparer = new ObjectComparer(obj1, obj2, obj3);
    console.log(comparer.areEqual());
});
