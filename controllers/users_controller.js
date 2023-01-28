module.exports.profile = function (req, res, next) {
  return res.render("user_profile", {
    title: "App",
  });
};
