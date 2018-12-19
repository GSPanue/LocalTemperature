/**
 * getCurrentPosition: Returns the current position of the device.
 */
const getCurrentPosition = () => {
  const { geolocation } = navigator;

  return (new Promise((resolve, reject) => {
    if (geolocation) {
      // Geolocation is supported
      // Return current position
      return (
        geolocation.getCurrentPosition(resolve, reject)
      );
    }

    // Geolocation isn't supported
    // Return rejected promise
    return (
      reject(Object.assign(new Error('Browser not supported'), { code: 0 }))
    );
  }));
};

export {
  getCurrentPosition
};
