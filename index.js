import gzipSize from 'gzip-size';
import * as brotliSize from 'brotli-size';
import chalk from 'chalk';
import prettyBytes from 'pretty-bytes';

module.exports = function() {
    return {
        name: 'rollup-plugin-bundle-summary',
        generateBundle(options, bundle) {
            console.log('');
            const assets = Object.keys(bundle);
            let totalSize = 0;
            let totalGzip = 0;
            let totalBrotli = 0;
            let breakdownOutput = '';
            for (const asset of assets) {
                const output = bundle[asset].type === 'chunk' ? bundle[asset].code : bundle[asset].source;
                const size = (new TextEncoder().encode(output)).length;
                const gzip = gzipSize.sync(output);
                const brotli = brotliSize.sync(output);
            
                breakdownOutput += `  ${asset}: ${chalk.cyan(prettyBytes(size))}\n`
            
                totalSize += size;
                totalGzip += gzip;
                totalBrotli += brotli;
            }
            const output = `${prettyBytes(totalSize)} → ${prettyBytes(totalGzip)} ${chalk.green('(gzip)')} → ${prettyBytes(totalBrotli)} ${chalk.green('(brotli)')}`;
        
            console.log(chalk.yellow(output));
            console.log(breakdownOutput);
        }
    };
};
