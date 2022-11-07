import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import PropTypes from 'prop-types';

function Lottie({ animationData, loop, autoplay }) {
  const element = useRef(null);
  const lottieEnstance = useRef();
  const executeRef = useRef(false);

  useEffect(() => {
    if (executeRef.current) return;
    if (element.current) {
      lottieEnstance.current = lottie.loadAnimation({
        container: element.current,
        renderer: 'svg',
        loop,
        autoplay,
        animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMinYMin slice',
        },
      });
    }

    executeRef.current = true;
  });

  return <div ref={element} />
}

Lottie.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  animationData: PropTypes.any.isRequired,
  loop: PropTypes.bool.isRequired,
  autoplay: PropTypes.bool.isRequired,
};

export default Lottie;
