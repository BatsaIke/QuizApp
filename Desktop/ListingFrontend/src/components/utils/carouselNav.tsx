// carouselUtils.ts
export const handlePrev = (setCurrentIndex: React.Dispatch<React.SetStateAction<number>>) => {
  setCurrentIndex(prev => prev > 0 ? prev - 1 : prev);
};

export const handleNext = (setCurrentIndex: React.Dispatch<React.SetStateAction<number>>, maxIndex: number) => {
  setCurrentIndex(prev => (prev < maxIndex ? prev + 1 : prev));
};
