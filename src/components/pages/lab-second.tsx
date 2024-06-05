import  { useState, useRef, useEffect } from 'react';
import { Button, Group, useMantineTheme, Transition } from '@mantine/core';

function AnimatedBall() {
  const theme = useMantineTheme();
  const [isVisible, setIsVisible] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const ballRef = useRef(null);
  const [ballPosition, setBallPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(event) {
      if (isDragging) {
        const newPosition = {
          x: event.clientX - ballRef.current.offsetWidth / 2,
          y: event.clientY - ballRef.current.offsetHeight / 2,
        };
        setBallPosition(newPosition);
      }
    }

    function handleMouseUp() {
      if (isDragging) {
        setIsDragging(false);
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      }
    }

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleButtonClick = () => {
    setIsVisible(!isVisible);
    setIsDragging(false);
    setBallPosition({ x: 0, y: 0 });
  };

  return (
    <div style={{ position: 'relative', height: '400px', overflow: 'hidden' }}>
      <Transition
        transition="fade"
        duration={1000}
        mounted={isVisible}
        onUnmount={() => setIsVisible(true)}
      >
        {(transitionStyles) => (
          <div
            ref={ballRef}
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: theme.colors.blue[5],
              position: 'absolute',
              bottom: ballPosition.y + 'px',
              left: ballPosition.x + 'px',
              cursor: isDragging ? 'grabbing' : 'grab',
              ...transitionStyles,
            }}
            onMouseDown={handleMouseDown}
          />
        )}
      </Transition>
      <Group p="center" style={{ marginTop: '20px' }}>
        <Button onClick={handleButtonClick}>
          {isVisible ? 'Убрать шарик' : 'Показать шарик'}
        </Button>
      </Group>
    </div>
  );
}

export default AnimatedBall;
