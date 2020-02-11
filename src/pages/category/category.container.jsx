import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selector';
import Spinner from '../../hoc/spinner.component';
import categoryComponent from './category.component';

const mapStateToProps = createStructuredSelector({
  // this selector is still memoized, we want to ! the returned value
  isLoading: state => !selectIsCollectionsLoaded(state)
});

const CategroyContainer = compose(
  connect(mapStateToProps),
  Spinner
)(categoryComponent);

export default CategroyContainer;
