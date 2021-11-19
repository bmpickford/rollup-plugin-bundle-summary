const summary = require('./index');

export default {
    input: 'index.js',
    plugins: [
        summary(),
    ]
}