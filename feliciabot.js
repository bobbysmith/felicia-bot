module.exports = function (req, res, next) {
  var username = req.body.user_name;
  // var message = req.body.text;
  var botPayload = { text: 'https://media.giphy.com/media/SZioIIBxB7QRy/giphy.gif'};

  if (username == 'slackbot') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
}