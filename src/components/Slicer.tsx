import { useState } from 'react';
import styled from 'styled-components';

interface ImageSlicerProps {
  images: string[];
  status: string
}

interface PropsStatus {
  status: string;
}

const ImageSlicer: React.FC<ImageSlicerProps> = ({ images, status }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const goToNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };
  

  return (
    <SlicerContainer>
      <LabelStatus status={status}>{status}</LabelStatus>
      {images.map((image, index) => (
        <SlicerImage
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          left={(index - currentIndex) * 500}
        />
      ))}
      <PrevButton onClick={goToPreviousImage}>
      {'<'}
      </PrevButton>
      <NextButton onClick={goToNextImage}>{'>'}</NextButton>
    </SlicerContainer>
  );
};

export default ImageSlicer;

const SlicerContainer = styled.div`
  position: relative;
  width: 460px;
  height: 600px;
  overflow: hidden;
  border-radius: 5px;
  left: 100px;
`;

const LabelStatus = styled.span<PropsStatus>`
  position:  absolute;
  top: 20px;
  right: -40px;
  transform: rotate(50deg);
  margin-left: 0px;
  width: 68px;
  padding: 5px 40px 5px 40px;
  font: normal normal 600 14px/21px "Poppins";
  font-size: 12px;
  border-radius: 0px;
  text-align: center;
  background-color: ${(props) =>
    props.status === "Check In"
      ? "#5AD07A"
      : props.status === "Check Out"
      ? "#E23428"
      : "#F7DE3A"};
  color: ${(props) =>
    props.status === "Check In"
      ? "#E8FFEE"
      : props.status === "Check Out"
      ? "#FFEDEC"
      : "#f8f8ed"};
  z-index: 5;
`
const SlicerImage = styled.img<{ left: number }>`
  position: absolute;
  top: 0;
  left: ${(props) => props.left}px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: left 0.3s ease;
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: white;
`;

const PrevButton = styled(NavigationButton)`
  left: 10px;
  background-color: #0000009a;
  border-radius: 10px;
  padding: 5px 15px 5px 15px;
`;

const NextButton = styled(NavigationButton)`
  right: 10px;
  background-color: #0000009a;
  border-radius: 10px;
  padding: 5px 15px 5px 15px;
`;