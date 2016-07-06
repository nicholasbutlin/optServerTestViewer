import React from 'react';
import { Link } from 'react-router';
import { Row, Col, ListGroupItem, Button } from 'react-bootstrap';
import { Bert } from 'meteor/themeteorchef:bert';
import { removeAsset } from '../../../api/assets/methods';

// TODO: Asset: Go to detail view of asset
// TODO: Asset: availability override from console: technical availability, programme availability
const handleViewDetails = (assetId, event) => {
  event.preventDefault();
};

const handleRemoveAsset = (assetId, event) => {
  event.preventDefault();
  // TODO: Style: this should be replaced with a styled solution
  // disable the eslint `no-alert`
  // eslint-disable-next-line no-alert
  if (confirm('Are you sure? This is permanent.')) {
    removeAsset.call({
      _id: assetId,
    }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('Asset removed!', 'success');
      }
    });
  }
};

export const Asset = ({ asset }) => (
  <ListGroupItem key={ asset._id }>
    <Row>
      <Col xs={ 4 } md={ 2 }>
        {/* <Link to='assets' params={{ id: asset._id }}>
          { asset.assetName }
        </Link>*/}
        <Link to={ `/assets/${asset.assetId}` }>
          { asset.assetName }
        </Link>
      </Col>
      <Col xs={ 4 } md={ 2 }>
        { asset.assetId }
      </Col>
      <Col xs={ 4 } md={ 2 }>
        { asset.location }
      </Col>

      {/*
        <Col xs={ 12 } md={ 2 } mdOffset={2}>
        <Button
        bsStyle="danger"
        className="btn-block"
        onClick={ handleRemoveAsset.bind(this, asset._id) }>
        Remove
        </Button>
        </Col>
      */}

      {/*
        <Col xs={ 12 } md={ 2 }>
        <Button
        sStyle="warning"
        className="btn-block"
        onClick={ handleViewDetails.bind(this, asset._id) }>
        Edit
        </Button>
        </Col>
      */}

    </Row>
  </ListGroupItem>
);

Asset.propTypes = {
  asset: React.PropTypes.object,
};
