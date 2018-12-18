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
      reject(new Error('Your browser is not supported'))
    );
  }));
};

export {
  getCurrentPosition
};
