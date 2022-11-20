import React from 'react'
import PropTypes from 'prop-types'
import '../styles/mediaObject.css'
import { FaPlay, FaImage, FaLink, FaDownload } from 'react-icons/fa'

const MediaObject = props => {
  const {
    coverPhotoUrl,
    mediaType,
    trackingLink,
    downloadUrl
  } = props;
  return (
    <div className="w-32 snap-proximity flex flex-col gap-4">
      <div className="relative flex w-fit rounded-lg">
        <img className="peer" src={coverPhotoUrl} alt={mediaType} />
        <div className="overlay peer-hover:scale-y-100">
          {
            mediaType === "video" ? <FaPlay /> : <FaImage />
          }
        </div>
      </div>
      <div className="flex justify-between gap-2 mb-2">
        <a href={trackingLink} className="p-4 text-xl text-slate-400 border border-slate-400"><FaLink /></a>
        <a href={downloadUrl} className="p-4 text-xl text-slate-400 border border-slate-400"><FaDownload /></a>
      </div>
    </div>
  )
}

MediaObject.propTypes = {
  coverPhotoUrl: PropTypes.string.isRequired,
  mediaType: PropTypes.string,
  trackingLink: PropTypes.string,
  downloadUrl: PropTypes.string,
};

MediaObject.defaultProps = {
  mediaType: 'photo',
  trackingLink: '#',
  downloadUrl: '#',
};

export default MediaObject;