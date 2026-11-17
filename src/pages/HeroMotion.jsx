import { useState } from 'react';
import { Check, RotateCcw } from 'lucide-react';
import './HeroMotion.css';

export default function HeroMotion() {
  const [photoReady, setPhotoReady] = useState(false);
  const [playback, setPlayback] = useState(0);

  return (
    <div className="hero-motion">
      <div className="hero-motion__scene" key={playback} data-ready={photoReady} aria-hidden="true">
        <div className="hero-motion__orbit" />
        <div className="hero-motion__phone">
          <div className="hero-motion__screen">
            <img
              className="hero-motion__photo"
              src="/images/lojer-capture.webp"
              width="1120"
              height="840"
              alt=""
              fetchPriority="high"
              onLoad={() => setPhotoReady(true)}
              onError={() => setPhotoReady(true)}
            />
            <div className="hero-motion__camera-bar"><span>LOJER</span><span>PHOTO</span></div>
            <div className="hero-motion__viewfinder">
              <i /><i /><i /><i />
              <span className="hero-motion__scan" />
            </div>
            <div className="hero-motion__shutter" />
            <div className="hero-motion__flash" />
          </div>
        </div>
        <div className="hero-motion__token">
          <img src="/favicon.svg" alt="" width="32" height="32" />
          <span>LOJ</span>
        </div>
        <div className="hero-motion__verified">
          <span className="hero-motion__check"><Check size={18} /></span>
          <span><strong>Photo verified</strong><small>LOJ reward preview</small></span>
        </div>
      </div>
      <button
        type="button"
        className="hero-motion__replay"
        aria-label="Replay the photo-to-reward animation"
        onClick={() => setPlayback((previous) => previous + 1)}
      >
        <RotateCcw size={15} aria-hidden="true" /> Replay
      </button>
    </div>
  );
}
