const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run

setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://automationpractice.com/index.php',
      show: true,
      windowSize: '1280x1280'
    },
  },
  include: {
    I: './steps_file.js',
    account_details_page:'./pages/account_details_page.js',
    index_page:'./pages/index_page.js',
    login_page: './pages/login_page.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptjsproject',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}