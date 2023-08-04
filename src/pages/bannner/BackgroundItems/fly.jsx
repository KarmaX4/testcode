import { Box } from "@mui/material";

const FlyingItems = () => {
    const items = [
      { top: '1rem', right: '1rem', src: '/Background/Fly/fly1.svg' },
      { bottom: 0, right: 0, src: '/Background/Fly/fly2.svg' },
      { bottom: '-5rem', left: '-3rem', src: '/Background/Fly/fly3.svg' },
      { top: 0, left: 0, src: '/Background/Fly/fly4.svg' },
    ];
  
    return (
      <>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            left: '54%',
            zIndex: '-1',
          }}
        >
          <img src='/Background/Vector.svg' />
        </Box>
        {items.map((item, index) => (
          <Box
            key={index}
            sx={{
              position: 'absolute',
              ...item,
            }}
          >
            <img width="30" height="30" src={item.src} alt="launchpad" />
          </Box>
        ))}
      </>
    );
  };
  
  export default FlyingItems;
  