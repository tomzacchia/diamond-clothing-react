/* eslint-disable react/jsx-curly-newline */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import './shop.styles.scss';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

// import CategoryPage from '../category/category.component';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
// import Spinner from '../../hoc/spinner.component';
// import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selector';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CategroyContainer from '../category/category.container';

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsAsync } = this.props;
    fetchCollectionsAsync();
  }

  render() {
    /* 
      Notice: isFetching and isCollectionLoaded are irrelevant to shop.component
      they only matter to the component returned from Spinner(ComponentName)
      therefore it makes sense to refactor this component
      to only contain things that concern it
    */
    // const { match, isFetching, isCollectionLoaded } = this.props;
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={props => this.renderCollectionsOveriew(isFetching, props)}
        />

        <Route
          path={`${match.path}/:categoryId`}
          component={CategroyContainer}
          // render={props => (
          //   <CategoryPageWithSpinner
          //     isLoading={!isCollectionLoaded}
          //     {...props}
          //   />
          // )}
        />
      </div>
    );
  }
}

// const mapStateToProps = createStructuredSelector({
//   isCollectionLoaded: selectIsCollectionsLoaded
// });

const mapDispatchToProps = dispatch => ({
  fetchCollectionsAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);
