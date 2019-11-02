module.exports = {
    publicPath: process.env.NODE_ENV === "production"
        ? "/pvp-calc/"
        : "/",

    outputDir: "docs"
};