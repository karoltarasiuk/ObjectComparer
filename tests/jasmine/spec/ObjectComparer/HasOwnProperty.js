define(["underscore", "ObjectComparer"], function(_, ObjectComparer) {

    describe("ObjectComparer", function() {

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

        describe("Has own property", function () {

            it("should always be successful", function () {

                comparer2 = new ObjectComparer(true); // do not use hasOwnProperty()
                expect(comparer2.areEqual(obj1, obj2)).toBe(true);
            });

            it("should always fail", function () {

                comparer1 = new ObjectComparer();
                expect(comparer1.areEqual(obj1, obj2)).toBe(false);
            });
        });
    });
});
