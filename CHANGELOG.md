#ObjectComparer changelog

##v1.0.0

###Compatibility

Based on Underscorejs and JSON.stringify: IE8+, Firefox 4+, Safari 5+, Opera 10.5+, Chrome 1+

###Changes list

- needs underscore as a dependency
- performs always deep check, even in prototypes
- object properties are sorted alphabetically
- comparison is based on checking equality between representations object as a string
