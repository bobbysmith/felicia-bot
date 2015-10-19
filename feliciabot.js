var request = require('request');

module.exports = function (req, res, next) {

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  var username = req.body.user_name;
  var name;
  // var message = req.body.text;
  var x = getRandomInt(1, 8);
  var urls = ['http://static.vibe.com/files/2015/04/ice-cube-bye-felicia.jpg',
  'http://c.fastcompany.net/multisite_files/fastcompany/imagecache/inline-large/post/inline-image/tumblr_mxx24a7wMc1qa3pfso1_400.gif',
  'http://media.giphy.com/media/BxmvRTro9SYc8/giphy.gif', 
  'http://res.cloudinary.com/urbandictionary/image/upload/a_exif,c_fit,h_200,w_200/v1410458075/fbstvcz7lhpxsqg7jvg6.jpg',
  'http://memecrunch.com/meme/2CVF3/bye-felicia/image.png?w=400&c=1',
  'https://s-media-cache-ak0.pinimg.com/736x/0a/57/ce/0a57ce10f5f4c5e081f8a55cb3c2eba8.jpg',
  'https://s-media-cache-ak0.pinimg.com/236x/9f/95/97/9f9597742927174d17bf8d63dd03a385.jpg', 
  'https://media.giphy.com/media/26BkNGPioLwhrImcg/giphy.gif'
  ];
  var botPayload = { text: urls[x]};

  if (username !== 'slackbot') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
}