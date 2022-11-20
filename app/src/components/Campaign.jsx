import React from 'react'
import PropTypes from 'prop-types'
import MediaObject from './MediaObject'
import image1 from '../images/image1.png'
import image2 from '../images/image2.png'
import image3 from '../images/image3.png'



const Campaign = props => {
  const { campaignName, campaignIcon, payPerInstall } = props;
  return (
    <div className="overflow-hidden">
      <div className="flex gap-2 m-3 mb-5 items-center">
        <img className="w-16" src={campaignIcon} alt={campaignName} />
        <div>
          <div className="font-bold">
            {campaignName}
          </div>
          <div className="text-green-400">
            <span className="text-semibold">{payPerInstall}</span>
            {' '}
            per Install
          </div>
        </div>
      </div>
      <div className="flex gap-2 overflow-x-scroll w-full snap-x snap-mandatory">
        <MediaObject coverPhotoUrl={image1} mediaType="video" />
        <MediaObject coverPhotoUrl={image2} mediaType="photo" />
        <MediaObject coverPhotoUrl={image3} />
        <MediaObject coverPhotoUrl={image1} mediaType="video" />
        <MediaObject coverPhotoUrl={image2} mediaType="photo" />
        <MediaObject coverPhotoUrl={image3} />
      </div>
    </div>
  )
}

Campaign.propTypes = {
  campaignIcon: PropTypes.string.isRequired,
  campaignName: PropTypes.string.isRequired,
  payPerInstall: PropTypes.number.isRequired,
};

export default Campaign