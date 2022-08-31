module.exports = {
    isAuthenticated: function(req, res, next) {
      if (req.isAuthenticated()) {
        return next();
      }
      req.flash('error_msg', 'Silahkan Login Terlebih Dahulu');
      res.redirect('/users/login');
    },
    notAuthenticated: function(req, res, next) {
      if (!req.isAuthenticated()) {
        return next();
      }
      res.redirect('/docs');      
    },
    captchaRegister: function(req, res, next) {
      if (req.recaptcha.error) {
          req.flash('error_msg','Silahkan Centang Kotak Captcha');
          res.redirect('/users/register');
      } else {
          return next();
     }
    },
    captchaLogin: function(req, res, next) {
      if (req.recaptcha.error) {
          res.redirect('/users/login');
      } else {
          return next();
      }
    }
  };
