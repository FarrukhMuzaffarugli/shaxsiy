import React from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Button } from '@mui/material';
import { FancyButton } from '../components/stylecomponent';

interface CarouselArrowsProps {
  onPrev: () => void;
  onNext: () => void;
}

const CarouselArrows: React.FC<CarouselArrowsProps> = ({ onPrev, onNext }) => {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
     
      <FancyButton  onClick={onPrev}>
        <KeyboardArrowLeftIcon />
      </FancyButton>

     
      <FancyButton  onClick={onNext}>
        <KeyboardArrowRightIcon />
      </FancyButton>
    </div>
  );
};

export default CarouselArrows;
