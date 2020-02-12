import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { selectIsCollectionFetching } from '../../redux/shop/shop.selector';
import CollectionsOverview from './collections-overview.component';
import Spinner from '../../hoc/spinner.component';

const mapStateToProps = createStructuredSelector({
  // isLoading is what Spinner is expecting
  isLoading: selectIsCollectionFetching
});

// Compose evaludates rights to left.
// CollectionsOverview -> Spinner -> connect(mapStateToProps)

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  Spinner
)(CollectionsOverview);

// connect(mapStateToProps)(Spinner(CollectionsOverview))

export default CollectionsOverviewContainer;
