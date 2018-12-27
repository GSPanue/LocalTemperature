import { connect } from 'react-redux';

import Location from './Location';

export const mapStateToProps = ({ weather }) => {
  const { currentLocation } = weather;

  return ({
    currentLocation
  });
};

export default connect(mapStateToProps)(Location);
