define(["underscore", "ObjectComparer"], function(_, ObjectComparer) {

    describe("ObjectComparer", function() {

        var comparer = new ObjectComparer();

        describe("creating new", function () {

            it("should always return an ObjectComparer instance", function () {
console.log(comparer);
                expect(comparer instanceof ObjectComparer).toBe(true);
            });
        });
    });
});
