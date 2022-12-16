const getEndPointOptions = (location) => {
  return {
    endpoint: "Dot",
    anchor: location,
    source: true,
    target: true,
    maxConnections: 3,
    uniqueEndpoint: true,
    deleteEndpointsOnDetach: false,
  };
};

export default getEndPointOptions;
