import React, { useState, useEffect, useRef } from "react";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import hair from "../assets/HairCut.webp";
import Msg from "../assets/Massage.webp";
import Acc from "../assets/Acc.webp";
import Drill from "../assets/Drill.webp";
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaCircleArrowLeft } from "react-icons/fa6";

const SliderCard = () => {
    const [offset, setOffset] = useState(0);
    const images = [hair, Msg, Acc, Drill, Drill, Drill];
    const imageWidth = 298;
    const maxOffset = -(imageWidth * (images.length - 1))/3; 
    const handleScroll = (event) => {
        console.log(event);
        setOffset((prev) => {
            let newOffset = prev - event.deltaX * 0.5;
            return Math.max(Math.min(newOffset, 0), maxOffset);
        });
    };



    const handleLeftClick = () => {
        setOffset((prev) => Math.min(prev + imageWidth, 0));
    };

    const handleRightClick = () => {
        setOffset((prev) => Math.max(prev - imageWidth, maxOffset));
    };

    return (
        <div className="slidercardContainer" onWheel={handleScroll}>
            <Button className="arrow-left" onClick={handleLeftClick} disabled={offset === 0}  ><FaCircleArrowLeft /></Button>
            <div className="scroll-wrapper" style={{ transform: `translateX(${offset}px)`, display: "flex", gap:"1rem" }}>
                {images.map((image, index) => (
                    <Card key={index} className="slidercardImg" >
                        <Card.Img variant="top" src={image} />
                    </Card>
                ))}
            </div>
            <Button className="arrow-right" onClick={handleRightClick} disabled={offset === maxOffset} ><FaCircleArrowRight /></Button>
        </div>
    );

};

export default SliderCard;
