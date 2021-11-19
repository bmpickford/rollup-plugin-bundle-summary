# rollup-plugin-bundle-summary
> Plugin to print the output of your bundle, including gzip and brotli sizes.

## Output Format
![sample_output](https://user-images.githubusercontent.com/12684286/142648223-d15bc1d4-8dcb-4766-88a4-f1b57462328d.PNG)


## Install
`npm install --save-dev rollup-plugin-bundle-summary`

## Usage
```javascript
import summary from 'rollup-plugin-bundle-summary';

export default {
    entry: 'index.js',
    plugins: [
        summary()
    ]
}
```

## Show your support

Give a ⭐️ if this project helped you!


## 📝 License

Copyright © 2021 Benjamin Pickford.
This project is MIT licensed.
