module.exports = function (req, res, next) {
  var username = req.body.user_name;
  var text = req.body.text;
  var botPayload = text + ' ' + 'http://giphy.com/gifs/friday-movie-craig-bye-felisha-l0O9xk5sLcmWmOkaQ';

  if (username !== 'slackbot') {
    return res.status(200).json('https://hooks.slack.com/services/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', botPayload);
  } else {
    return res.status(200).end();
  }
}