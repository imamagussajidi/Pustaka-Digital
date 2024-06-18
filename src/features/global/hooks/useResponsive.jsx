import { useMediaQuery } from 'react-responsive';

const useResponsive = () => {
    const isMobile = useMediaQuery({
        maxWidth: '480px',
    });

    const isTablet = useMediaQuery({
        maxWidth: '768px',
    });

    return { isMobile, isTablet };
};

export default useResponsive;
