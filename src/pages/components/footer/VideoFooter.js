import React from "react";
import "./VideoFooter.css";
import SpatialAudioIcon from '@mui/icons-material/SpatialAudio';

function VideoFooter({name, description, music}) {
  return (
    <div className="VideoFooter">
      <div className="VideoFooter__text">
        <h3>@{ name }</h3>
        <p>{ description }</p>
        <div className="VideoFooter__Music">
          <SpatialAudioIcon className="VideoFooter__Icon"/>
          <div className="VideoFooterMusic__text">
          <p>{ music }</p>
          </div>
          
        </div>
      </div>
      <img
      className="VideoFooter__Record"
      alt="Imagen de vinil girando"
      src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png"
            
      />
    </div>
  );
}

export default VideoFooter;
