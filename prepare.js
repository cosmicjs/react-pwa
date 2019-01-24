var fs = require('fs');

var prod_str = `
    export const config = {
        production: true,
        read_key: '${process.env.COSMIC_READ_KEY ? process.env.COSMIC_READ_KEY : ''}',
        write_key: '${process.env.COSMIC_WRITE_KEY ? process.env.COSMIC_WRITE_KEY : ''}',
        bucket_slug: '${process.env.COSMIC_BUCKET}',
        URL: 'https://api.cosmicjs.com/v1/',
    };
`;
fs.writeFile("./src/config/cosmic.prod.ts", prod_str, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The production config was saved!");
});
var dev_str = `
    export const config = {
        production: false,
        read_key: '${process.env.COSMIC_READ_KEY ? process.env.COSMIC_READ_KEY : ''}',
        write_key: '${process.env.COSMIC_WRITE_KEY ? process.env.COSMIC_WRITE_KEY : ''}',
        bucket_slug: '${process.env.COSMIC_BUCKET}',
        URL: 'https://api.cosmicjs.com/v1/',
    };
`;
fs.writeFile("./src/config/cosmic.config.ts", dev_str, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The dev config was saved!");
});