import React, { useState, useRef, useEffect } from "react";
import './Range.scss';

import { getProgressStyles, findStaticRange } from '../../utils';

export const Range = ({ range, staticRange = [] }) => {

    const sliderRefLeft = useRef(null);
    const sliderRefRight = useRef(null);
    const inputRangeRef = useRef(null);
    const [isSlidingLeft, setIsSlidingLeft] = useState(false);
    const [isSlidingRight, setIsSlidingRight] = useState(false);
    const [leftValue, setLeftValue] = useState(range.min);
    const [rightValue, setRightValue] = useState(range.max);
    const [leftProgess, setLeftProgress] = useState(0);
    const [rightProgress, setRightProgress] = useState(100);


    useEffect(() => {
        inputRangeRef.current.style.background = getProgressStyles(leftProgess, rightProgress);
    }, [leftProgess, rightProgress]);

    useEffect(() => {
        const { min, max } = range;
        setLeftProgress(((leftValue - min) / (max - min)) * 100);
        setRightProgress(((rightValue - min) / (max - min)) * 100);
    }, [leftValue, rightValue]);

    const getPositionAndProgress = (clientX, type) => {
        const { left, right } = inputRangeRef.current.getBoundingClientRect();
        const convertionNum = (range.max - range.min) / (right - left);
        const progress = ((clientX - left) * convertionNum) + range.min;
        if (type === 'left') {
            if (staticRange.length > 0) {
                const value = progress < range.min ? range.min : progress >= rightValue ? rightValue - 1 : progress;
                const selectedRange = findStaticRange(staticRange, value);
                setLeftValue(selectedRange);
                if (selectedRange) {
                    debugger
                    let addPx
                    if (selectedRange === range.min) {
                        addPx = 0

                    } else {
                        addPx = ((right - left) / (range.max - range.min)) * (selectedRange - range.min)
                    }

                    sliderRefLeft.current.style.left = addPx + "px";
                    document.current.style.cursor = 'grabbing';
                    console.log(findStaticRange(staticRange, value))

                }
            } else {
                setLeftValue(progress < range.min ? range.min : progress >= rightValue ? rightValue - 1 : progress);
            }
        } else {
            setRightValue(progress > range.max ? range.max : progress <= leftValue ? leftValue + 1 : progress);
        }
        return { left, right, progress };
    };

    const onMouseMoveLeft = ({ clientX }) => {
        const { left, right, progress } = getPositionAndProgress(clientX, 'left')

        if (clientX > left && clientX < right && progress < rightValue) {
            console.log(leftValue)
            if (staticRange.length > 0) {
                // const value = progress < range.min ? range.min : progress >= rightValue ? rightValue - 1 : progress;
                // findStaticRange(staticRange, value)
                // let currentX = (range.max - range.min) / left;
                // let addPx = (clientX - left) * currentX
                // if (leftValue === 10.99) console.log('hola')
                // sliderRefLeft.current.style.left = addPx + "px";
            } else {
                let currentX = clientX - left;
                sliderRefLeft.current.style.left = (currentX - 5) + "px";
            }
        }
    };
    const onMouseMoveRight = ({ clientX }) => {
        const { left, right, progress } = getPositionAndProgress(clientX);

        if (clientX > left && clientX < right && progress > leftValue) {
            let currentX = (clientX) - right;
            sliderRefRight.current.style.left = (currentX + 8) + "px";
        }
    };
    const onSetNewValueLeft = (value) => {
        const { min, max } = range;
        if (value.length === 0) setLeftValue(value);

        const { left, right } = inputRangeRef.current.getBoundingClientRect();
        const convertionNum = (right - left) / (max + 1);
        const pxAddSlider = convertionNum * (parseInt(value) - min);

        if (value >= min && value < max && parseInt(value) < parseInt(rightValue)) {
            setLeftValue(value);
            sliderRefLeft.current.style.left = pxAddSlider + "px";
        }
    };
    const onSetNewValueRight = (value) => {
        const { min, max } = range;
        if (value.length === 0) setRightValue(value);

        const { left, right } = inputRangeRef.current.getBoundingClientRect();
        const convertionNum = (right - left) / (max + 1);
        const pxAdd = convertionNum * (parseInt(value) - max);

        if (value >= min && value <= max && parseInt(value) > parseInt(leftValue)) {
            setRightValue(value);
            sliderRefRight.current.style.left = pxAdd + "px";
        }
    };
    /**
     * Left and Right onMouseUp
     */
    const onMouseUp = (e, slider) => {
        if (slider === 'left') {
            setIsSlidingLeft(false);
            document.removeEventListener("mousemove", onMouseMoveLeft);
        } else {
            setIsSlidingRight(false);
            document.removeEventListener("mousemove", onMouseMoveRight);
        }
    };

    useEffect(() => {
        if (isSlidingLeft || isSlidingRight) {
            document.addEventListener("mousemove", isSlidingLeft ? onMouseMoveLeft : onMouseMoveRight);
            document.addEventListener("mouseup", (e) => onMouseUp(e, (isSlidingLeft ? 'left' : 'right')));
        }
    }, [isSlidingLeft, isSlidingRight]);


    return (
        <>
            <div ref={inputRangeRef} className="range">
                <div
                    className="range__sliderleft"
                    ref={sliderRefLeft}
                    onMouseDown={(e) => {
                        console.log('down')
                        setIsSlidingRight(false);
                        setIsSlidingLeft(true);
                        sliderRefLeft.current.style.cursor = 'grabbing';
                    }
                    }
                    onMouseUp={(e) => {
                        console.log('up')
                        sliderRefLeft.current.style.cursor = 'grab';
                    }}
                >
                </div>
                <div
                    className="range__sliderright"
                    ref={sliderRefRight}
                    onMouseDown={(e) => {
                        console.log('down')
                        setIsSlidingLeft(false);
                        setIsSlidingRight(true);
                        sliderRefRight.current.style.cursor = 'grabbing';
                    }
                    }
                    onMouseUp={(e) => {
                        console.log('up')
                        sliderRefRight.current.style.cursor = 'grab'
                    }}
                >
                </div>
            </div>
            <div className="range__values">
                <input
                    onChange={({ target: { value } }) => onSetNewValueLeft(value)}
                    value={leftValue}
                    type="number"
                    disabled={staticRange.length > 0}
                />
                <span>-</span>
                <input
                    value={rightValue}
                    onChange={({ target: { value } }) => onSetNewValueRight(value)}
                    type="number"
                    disabled={staticRange.length > 0}
                />
            </div>
        </>
    );
};
