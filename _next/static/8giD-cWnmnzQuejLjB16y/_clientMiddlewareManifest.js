self.__MIDDLEWARE_MATCHERS = [
  {
    "regexp": "^\\/truthlab-kids(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/(\\/?index|\\/?index\\.json))?[\\/#\\?]?$",
    "originalSource": "/"
  },
  {
    "regexp": "^\\/truthlab-kids(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/(ar|en|de|ko))(?:\\/((?:[^\\/#\\?]+?)(?:\\/(?:[^\\/#\\?]+?))*))?(\\.json)?[\\/#\\?]?$",
    "originalSource": "/(ar|en|de|ko)/:path*"
  }
];self.__MIDDLEWARE_MATCHERS_CB && self.__MIDDLEWARE_MATCHERS_CB()