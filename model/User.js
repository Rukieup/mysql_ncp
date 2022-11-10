// TODO: DB(mysql) 연결
// TODO: 모델 코드
const mysql = require('mysql');

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: 'alslalsl97',
  database: 'kdt',
});

exports.getSignup = (callback) => {
  conn.query('SELECT * FROM user', (err, rows) => {
    if (err) {
      throw err;
    };

    console.log('User.js', rows);
    callback(rows);
  });
}

exports.getSignup = (callback) => {
  conn.query('SELECT * FROM user', (err, rows) => {
    if (err) {
      throw err;
    };

    console.log('User.js', rows);
    callback(rows);
  });
}

exports.postSignup = (data, callback) => {
  conn.query(
    `INSERT INTO user (userid, pw, name) VALUE('${data.userid}','${data.pw}','${data.name}')`,
    (err, rows) => {
      if (err) {
        throw err;
      };

      console.log('User.js', rows);
      callback(rows.insertId)
    });
}

exports.postSignin = (data, callback) => {
  conn.query(
    `SELECT * FROM user WHERE userid = '${data.userid}' AND pw = '${data.pw}'`,
    (err, rows) => {
      if (err) {
        throw err;
      };

      console.log('User.js', rows)
      callback(rows)
    } 
  )
};

exports.postProfile = (data, callback) => {
  console.log(data);
  conn.query(
    `SELECT * FROM user WHERE userid = '${data.userid}'`,
    (err, rows) => {
      if (err) {
        throw err
      };
      callback(rows[0]);
      console.log('프로필',rows[0]);
    }
  )
}

exports.patchProfile = (data, callback) => {
  conn.query(
    `UPDATE user SET pw='${data.pw}', name='${data.name}' WHERE id='${data.id}'`,
    (err, row) => {
      if (err) {
        throw err;
      }
      callback();
    }
  )
}

exports.deleteProfile = (data, callback) => {
  conn.query(
    `DELETE FROM user WHERE id=${data.id}`,
    (err, row) => {
      if (err) {
        throw err;
      }
      callback();
    }
  )
}