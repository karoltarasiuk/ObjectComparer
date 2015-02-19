#ObjectComparer

The goal of this library was to create a Java Script plain object comparer. Method consists of few steps:

1. For each passed object sort it's properties alphabetically using [Array,prototype.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) method. The operation is performed recursively.
2. Convert the outcome to JSON string.
3. Compare strings and assess equality.

##Licence

You can find the licence in [LICENCE.md](https://github.com/karoltarasiuk/ObjectComparer/blob/master/LICENCE.md) file.

##How to use

###Example page

The example page contains simple use case of the library. Run `make open` to see it in action.

It will create a simple local HTTP server using python using port 8000, and then it will try to open your default browser. If for some reason the second step didn't work navigate to this link in a browser of your choice: http://localhost:8000/

###Preview example code

index.html
```
<!DOCTYPE html>
<html>
    <head>
        <title>ObjectComparer</title>
        <script type="text/javascript" data-main="script" src="lib/require.min.js"></script>
    </head>
    <body></body>
</html>

```

script.js
```
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

```

###Automated tests

The library is using Jasmine for automated testing purposes. Run `make tests` in your terminal.
