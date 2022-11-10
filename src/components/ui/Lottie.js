import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import PropTypes from 'prop-types';

function Lottie({ animationData, autoplay, loop }) {
  const element = useRef(null);
  const lottieInstance = useRef();
  const executeRef = useRef(false);

  useEffect(() => {
    if (executeRef.current) return;
    if (element.current) {
      lottieInstance.current = lottie.loadAnimation({
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

  return <div ref={element} />;
}

Lottie.defaultProps = {
  autoplay: false,
  loop: false,
};

Lottie.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  animationData: PropTypes.any.isRequired,
  loop: PropTypes.bool,
  autoplay: PropTypes.bool,
};

export default Lottie;
