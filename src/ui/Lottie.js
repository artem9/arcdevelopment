import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import PropTypes from 'prop-types';

function Lottie({ animationData, autoplay, loop, style }) {
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

  return <div ref={element} style={style} />;
}

Lottie.defaultProps = {
  autoplay: false,
  loop: false,
  style: undefined,
};

Lottie.propTypes = {
  animationData: PropTypes.any.isRequired,
  loop: PropTypes.bool,
  autoplay: PropTypes.bool,
  style: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
};

export default Lottie;
