import { Oval } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Oval
      height={80}
      width={80}
      color="#4fa94d"
      wrapperStyle={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: '500',
      }}
      wrapperClass="Load-wrapper"
      visible={true}
      ariaLabel="loading"
      secondaryColor="#359c54"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  );
};
