import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CollectionOverviewContainer from '../../components/CollectionsOverview/CollectionOverview.container';
import CollectionPageContainer from '../CollectionPage/CollectionPage.container';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';

const ShopPage = ({ fetchCollectionsStartAsync, match }) => {
    useEffect(() => {
        fetchCollectionsStartAsync();
    }, [fetchCollectionsStartAsync]);

    return (
        <div className="shop-page">
            <Route
                exact
                path={`${match.path}`}
                component={CollectionOverviewContainer}
            />
            <Route
                path={`${match.path}/:collectionId`}
                component={CollectionPageContainer}
            />
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
