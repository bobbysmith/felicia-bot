module.exports = function (req, res, next) {
  var username = req.body.user_name;
  var botPayload = {
    text : username + ' ' + 'http://giphy.com/gifs/friday-movie-craig-bye-felisha-l0O9xk5sLcmWmOkaQ'
    // text: '@' + username + ' Bye, Felicia!'
  };

  // avoid infinite loop
  if (userName !== 'slackbot') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
}