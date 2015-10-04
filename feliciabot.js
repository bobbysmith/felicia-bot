module.exports = function (req, res, next) {
  var userName = req.body.user_name;
  var botPayload = {
    text : userName + ' ' + 'http://giphy.com/gifs/friday-movie-craig-bye-felisha-l0O9xk5sLcmWmOkaQ'
  };

  // avoid infinite loop
  if (userName !== 'slackbot') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
}