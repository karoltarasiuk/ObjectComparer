define(["underscore", "ObjectComparer"], function(_, ObjectComparer) {

    describe("ObjectComparer", function() {

        var i, args,
            comparer = new ObjectComparer(),
            runnerHelper = function (args, outcome) {
                _.each(args, function (arg) {
                    expect(comparer.areEqual.apply(comparer, arg)).toBe(outcome);
                });
            };

        describe("Comparing", function () {

            it("should always be successful", function () {

                args = [
                    [{}, {}],
                    [{}, {}, {}],
                    [{}, {}, {}, {}],
                    // we could go forever
                    [
                        {
                            a: 1,
                            b: true,
                            c: "string",
                            d: [1, 2, 3, 4, "string", 6],
                            e: {
                                f: 2
                            }
                        },
                        {
                            a: 1,
                            b: true,
                            c: "string",
                            d: [1, 2, 3, 4, "string", 6],
                            e: {
                                f: 2
                            }
                        }
                    ]
                ];

                runnerHelper(args, true);
            });

            it("should always fail", function () {

                args = [
                    [{}, 1],
                    [{}, true],
                    [{}, "string"],
                    [{}, []],
                    [{}, {a:1}],
                    [
                        {
                            a: 1,
                            b: true,
                            c: "string",
                            d: [1, 2, 3, 4, "string", 6],
                            e: {
                                f: 2
                            }
                        },
                        {
                            a: 1,
                            b: true,
                            c: "string",
                            d: [1, 2, 3, 4, "string", 7],
                            e: {
                                f: 2
                            }
                        }
                    ]
                ];

                runnerHelper(args, false);
            });

            it("should throw an exception", function () {

                args = [
                    [],
                    [{}]
                ];

                _.each(args, function (arg) {
                    expect(function () {
                        comparer.areEqual.apply(comparer, arg);
                    }).toThrow("min 2 arguments needed");
                });
            });
        });
    });
});
