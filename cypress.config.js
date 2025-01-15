module.exports = {

  projectId: "2omfoj",

  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'mochawesome-report',
    reportFilename: 'index.html',
    overwrite: true,
    html: true,
    json: true,
  },
  e2e: {

    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://localhost:3000/',
  },
}
