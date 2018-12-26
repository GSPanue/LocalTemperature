import { connect } from 'react-redux';

import { changeScale } from '../../actions';

import Temperature from './Temperature';

export const mapStateToProps = ({ weather, scale }) => {
  const { currentTemperature, currentScale } = { ...weather, ...scale };

  return ({
    currentTemperature: currentTemperature[currentScale],
    currentScale
  });
};

export const mapDispatchToProps = (dispatch) => ({
  changeScale: (nextScale) => dispatch(changeScale(nextScale))
});

export default connect(mapStateToProps, mapDispatchToProps)(Temperature);
