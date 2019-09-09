// Npm libraries
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router';
import { connect } from 'react-redux';

// Redux store
import { fetchAllImages } from '../redux/images';

// React Components
import Upload from './Upload.jsx';
import SingleImage from './SingleImage.jsx';
import Scrapbook from './Scrapbook.jsx';
import Navbar from './Navbar.jsx';
import Home from './Home.jsx';
import Login from './Login.jsx';
import SignUp from './SignUp.jsx';
import FloatingUploadButton from './FUB.jsx';
import AddToAlbumModal from './AddToAlbumModal.jsx';
import TagImagesModal from './TagImagesModal.jsx';
import DeleteImagesModal from './DeleteImagesModal.jsx';

const propTypes = {
  getImages: PropTypes.func.isRequired,
};

class Main extends Component {
  componentDidMount() {
    const { getImages } = this.props;
    getImages();
  }

  render() {
    return (
      <div>
        <Navbar />
        <AddToAlbumModal />
        <DeleteImagesModal />
        <TagImagesModal />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/upload" component={Upload} />
          <Route exact path="/scrapbook" component={Scrapbook} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/images/:id" component={SingleImage} />
        </Switch>
        <FloatingUploadButton />
      </div>
    );
  }
}

Main.propTypes = propTypes;

const mapDispatchToProps = (dispatch) => ({
  getImages: () => dispatch(fetchAllImages()),
});

const connectedComponent = connect(
  null,
  mapDispatchToProps,
);

const connectedMain = connectedComponent(Main);

export default connectedMain;
