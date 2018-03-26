import React from 'react';
import styles from './styles.scss';
import Loading from 'components/Loading';
import ProfileDetail from 'components/ProfileDetail';
import PhotoDisplay from 'components/PhotoDisplay';

const Profile = props => {
  if (props.loading) {
    return <Loading />;
  } else if (props.profile) {
    return <RenderProfile {...props} />;
  }
};

const RenderProfile = props => (
  <div className={styles.container}>
    <div className={styles.profile}>
      <ProfileDetail
        followUser={props.followUser}
        unfollowUser={props.unfollowUser}
        {...props.profile}
      />
      <div className={styles.photoList}>
        <RenderPhotoDisplay images={props.profile.images} />
      </div>
    </div>
  </div>
);

const RenderPhotoDisplay = props => {
  let slicedImage = [];
  while (props.images.length) slicedImage.push(props.images.splice(0, 3));

  return slicedImage.map((row, index) => (
    <div key={index} className={styles.row}>
      {row.map(photo => <PhotoDisplay key={photo.id} photo={photo} />)}
    </div>
  ));
};

export default Profile;
