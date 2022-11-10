// TODO: 컨트롤러 코드
const User = require('../model/User');

exports.main = (req, res) => {
  res.render('index');
};

exports.getSignup = (req, res) => {
  res.render('signup');
};

exports.getSignin = (req, res) => {
  res.render('signin');
};

exports.postSignup = (req, res) => {
  console.log('postSignup: ', req.body);
  // postSignup:  { userid: 'aa', pw: 'aa', name: 'aa' }

  User.postSignup(req.body, (result) => {
    console.log('postSignup', result);

    res.send({
      // 폼에 입력한 데이터 
      id: result,
      userid: req.body.userid,
      pw: req.body.pw,
      name: req.body.name, 
    })
  });
};

exports.postSignin = (req, res) => {
 
  User.postSignin(req.body, (result) => {
    // 로그인 성공시 -> [ {} ] 
    // 로그인 실패시 -> []
    console.log('Cuser.js', result); 
    console.log('result.length', result.length); 

    if (result.length) {
      res.send(true);
    } else {
      res.send(false)
    };
    
    // 성공 -> res.send(true)
    // 실패 -> res.send(false)

  })
};

exports.postProfile = (req, res) => {
  console.log('데이터',req.body)
  User.postProfile(req.body, (result) => {
    console.log('결과',result)
    
    res.render('profile', {data: result});
  });
};

exports.patchProfile = (req, res) => {
  User.patchProfile(req.body, (result) => {
    res.send(true);
  })
};

exports.deleteProfile = (req, res) => {
  User.deleteProfile(req.body, (result) => {
    res.send(true);
  })
};