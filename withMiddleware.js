function withMiddleware(routeHandler) {
  return function (req, res) {
    // apply middleware here
    console.log("Applying middleware...");
    return routeHandler(req, res);
  };
}

export default withMiddleware;
