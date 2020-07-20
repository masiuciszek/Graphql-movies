import * as React from 'react';
import { useSpring } from 'react-spring';
import {
  useMessageDispatch,
  useMessageState,
} from '../../context/message.context/Message.provider';
import { useWordState } from '../../context/word.context/Word.provider';
import { MessageStyles } from './Message.styles';

interface Props {}

const Message: React.FC<Props> = () => {
  const { wrongLetters } = useWordState();
  const dispatch = useMessageDispatch();
  const { haveUsed, resentTypedKey } = useMessageState();

  React.useEffect(() => {
    if (wrongLetters.includes(resentTypedKey)) {
      dispatch({ type: 'TOGGLE_USED_LETTER' });
      setTimeout(() => {
        dispatch({ type: 'TOGGLE_USED_LETTER' });
      }, 2300);
    }
  }, [dispatch, resentTypedKey, wrongLetters]);

  const { x, opacity } = useSpring({
    x: haveUsed ? 0 : -1000,
    opacity: haveUsed ? 1 : 0,
  });

  return (
    <MessageStyles
      style={{
        transform: x.interpolate((x) => `translate3d(${x * 1}%,0,0)`),
        opacity,
      }}>
      <h3>{resentTypedKey} is a wrong letter !!! 😂😱</h3>
    </MessageStyles>
  );
};
export default Message;
