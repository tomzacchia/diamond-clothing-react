import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selector';
import Spinner from '../../hoc/spinner/spinner.component';
import categoryComponent from './category.component';

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionsLoaded(state)
});

const CategroyContainer = compose(
  connect(mapStateToProps),
  Spinner
)(categoryComponent);

export default CategroyContainer;
