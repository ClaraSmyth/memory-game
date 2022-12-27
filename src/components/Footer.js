import React from 'react';
import { BsGithub, BsMusicNote } from 'react-icons/bs';

function Footer(props) {
  return (
    <div className="footer">
      <button
        className="footer-btn"
        canPlayAudio={props.canPlayAudio}
        onClick={() => props.setCanPlayAudio((prev) => (prev === 0 ? 1 : 0))}
      >
        <BsMusicNote />
      </button>
      <a className="footer-link" href="https://github.com/ClaraSmyth" target="_blank" rel="noreferrer">
        <p>Clara Smyth</p>
        <BsGithub />
      </a>
    </div>
  );
}

export default Footer;
