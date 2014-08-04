# joi-browserify

Shim to use [Joi](https://github.com/hapijs/joi) in the browser with Browserify.

The latest version of Joi is used for the build right after installation.
If you want to trigger the build yourself again later, call `npm run build`,
for Joi's unit tests, run `npm run test`.

**Note:** Validation for binary types doesn't work in the browser, so it's
removed from the package.


### ToDos

- Allow custom builds for smaller file size
- Allow translation of error messages


### License

[MIT](LICENSE.txt)
