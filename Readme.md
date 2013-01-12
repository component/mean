
# mean

  mean value utility

## Installation

    $ component install component/mean

## API

### mean(array)

  Return the mean value in `array`:

```js
mean([1,5,6,1,2,0])
```

### mean(array, fn)

  mean value in `array` with callback `fn(val, i)`:

```js
var age = mean(users, function(u){ return u.age })
```

### mean(array, string)

  mean value in `array` with the given property `string`:

```js
var age = mean(users, 'age')
```

# License

  MIT
