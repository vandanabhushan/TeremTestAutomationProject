const { I } = inject();

module.exports = {

  fields:{
    signinbutton:'//a[contains(text(),"Sign in")]',
    email: '//input[@id="email"]',
    password: '//input[@id="passwd"]',
    submitlogin: '//button[@id="SubmitLogin"]',
    logout: '//a[@class="logout"]',
  },

  gotowebsite(){
   I.amOnPage('http://automationpractice.com/index.php');
  },

  valid_login(){
  //logging in for valid credentials
  I.click(this.fields.signinbutton);
  I.fillField(this.fields.email, 'vandanadn@gmail.com');
  I.fillField(this.fields.password, 'July@2021$');
  I.click(this.fields.submitlogin);
  I.wait(5);

  },

  logout(){
  //logout using the logout button
  I.click(this.fields.logout);
  },
}