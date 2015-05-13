export function configure(aurelia) {
  aurelia.globalizeResources(['./converters']);
  aurelia.use
    .standardConfiguration()
    .developmentLogging();

  aurelia.start().then(a => a.setRoot());
}
