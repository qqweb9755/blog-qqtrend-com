const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "QQ Trend - Blogs", // <title>
  shortSiteTitle: "QQ Blog", // <title> ending for posts and pages
  siteDescription: "Articles and other information from QQ Trend Ltd.",
  siteUrl: "https://blog.qqtrend.com",
  pathPrefix: "",
  siteImage: "preview.jpg",  //TODO: where is this used?
  siteLanguage: "en",
  // author
  authorName: "QQ Trend",
  authorTwitterAccount: "qqtrend",
  // info
  infoTitle: "QQ Trend",
  infoTitleNote: "World-class Data Science",  //This goes at the top of the info bar on left
  // manifest.json
  manifestName: "QQTrendBlogs",
  manifestShortName: "QQB", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.bg,
  manifestThemeColor: colors.bg,
  manifestDisplay: "standalone",
  // social
  //TODO: need to confirm each of these... (and maybe don't want all three?)
  authorSocialLinks: [
    { name: "github", url: "https://github.com/qqtrend" },
    { name: "twitter", url: "https://twitter.com/qqtrend" },
    { name: "facebook", url: "http://facebook.com/qqtrend" }
  ]
};
