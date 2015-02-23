define(["underscore", "ObjectComparer"], function(_, ObjectComparer) {

    describe("ObjectComparer", function() {

        var comparer = new ObjectComparer();

        describe("Creating new", function () {

            it("should always return an ObjectComparer instance", function () {

                expect(comparer instanceof ObjectComparer).toBe(true);
            });
        });
    });
});
