import React, { memo } from 'react';
import { useBlockStream } from './use-block-stream';

const PureBlockStreamHandler = ({ setBlock, streamingData }) => {
  useBlockStream({
    streamingData,
    setBlock,
  });

  return null;
};

const areEqual = (prevProps, nextProps) => {
  if (!prevProps.streamingData && !nextProps.streamingData) {
    return true;
  }

  if (!prevProps.streamingData || !nextProps.streamingData) {
    return false;
  }

  if (prevProps.streamingData.length !== nextProps.streamingData.length) {
    return false;
  }

  return true;
};

const BlockStreamHandler = memo(PureBlockStreamHandler, areEqual);

export { BlockStreamHandler, PureBlockStreamHandler };
