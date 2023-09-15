import { Box } from "@mui/material";

const FlyingItems = () => {
  const items = [
    { top: '1rem', left: '25rem', src: '/Background/Fly/fly1.svg', filter: 'drop-shadow(10px 10px 2px #ffffffb5)' },
    { bottom: 0, left: '25rem', src: '/Background/Fly/fly2.svg' },
    { bottom: '-4rem', right: '25rem', src: '/Background/Fly/fly3.svg', filter: 'drop-shadow(10px 10px 2px #ffffffb5)' },
    { top: 0, right: '25rem', src: '/Background/Fly/fly4.svg' },
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
        <Box component={'img'} src='/Background/Vector.svg' alt="Vector"/>
        {items.map((item, index) => (
          <Box
            key={index}
            sx={{
              position: 'absolute',
              ...item,
            }}
          >
            <Box component={'img'} width="30" height="30" src={item.src} alt="launchpad" />
          </Box>
        ))}
      </Box>
    </>
  );
};

export default FlyingItems;
