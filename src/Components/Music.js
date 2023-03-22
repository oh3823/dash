import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useRef, memo } from 'react';

const Music = () => {
  const [play, setPlay] = useState(false);
  // 'fa fa-play fa-2x'

  const audio = useRef();
  const onClick = () => {
    play ? audio.current.pause() : audio.current.play();
    setPlay((curr) => !curr);
  };
  return (
    <div>
      <audio src="bgm1.mp3" ref={audio}></audio>
      <button className="playBtn" onClick={onClick}>
        <FontAwesomeIcon icon={play ? faPause : faPlay} size="2x" />
      </button>
    </div>
  );
};

export default memo(Music);
