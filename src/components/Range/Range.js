import React, { useState, useRef, useEffect } from "react";
import './Range.scss';

import { getProgressStyles, findStaticRange, getPixelsToMove, getSliderProgress } from '../../utils';

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
        setLeftProgress(getSliderProgress(leftValue, range));
        setRightProgress(getSliderProgress(rightValue, range));
    }, [leftValue, rightValue]);

    const getPositionAndProgress = (clientX, type) => {
        const { left, right } = inputRangeRef.current.getBoundingClientRect();
        const convertionNum = (range.max - range.min) / (right - left);
        const progress = ((clientX - left) * convertionNum) + range.min;
        return { left, right, progress };
    };


    const onMouseMove = ({ clientX }, isLeftSlider) => {
        const { min, max } = range;
        const { left, right, progress } = getPositionAndProgress(clientX);

        let value;
        let sliderRef = isLeftSlider ? sliderRefLeft : sliderRefRight;
        let setValue = isLeftSlider ? setLeftValue : setRightValue;

        if (isLeftSlider) {
            value = progress < min ? min : progress >= rightValue ? rightValue - 1 : progress;
        } else {
            value = progress > max ? max : progress <= leftValue ? leftValue + 1 : progress;
        }

        if (staticRange.length > 0) {
            const selectedRange = findStaticRange(staticRange, value);
            if (selectedRange) {
                setValue(selectedRange);
                const pixelsToMove = isLeftSlider ?
                    getPixelsToMove(range, selectedRange, left, right).leftPixelsAdd - 12 :
                    getPixelsToMove(range, selectedRange, left, right).rightPixelsAdd;
                sliderRef.current.style.left = pixelsToMove + "px";
                sliderRef.current.style.cursor = 'grabbing';
            }
        } else {
            setValue(value);
            const isLinesCross = isLeftSlider ? (progress < rightValue) : (progress > leftValue);
            if (clientX > left && clientX < right && isLinesCross) {
                let currentX = isLeftSlider ? clientX - left : (clientX) - right;
                sliderRef.current.style.left = (currentX + (isLeftSlider ? -5 : 8)) + "px";
            }
        }
    };

    /**
     * Modify the position of the slider with input
     */
    const onSetNewValue = (value, isLeft) => {
        const { min, max } = range;
        if (value.length === 0) {
            isLeft ? setLeftValue(value) : setRightValue(value);
        }

        const { left, right } = inputRangeRef.current.getBoundingClientRect();
        const convertionNum = (right - left) / (max + 1);
        const pxAdd = convertionNum * (parseInt(value) - (isLeft ? min : max));

        if (
            value >= min &&
            value <= max &&
            (isLeft ? parseInt(value) < parseInt(rightValue) : parseInt(value) > parseInt(leftValue))
        ) {
            isLeft ? setLeftValue(value) : setRightValue(value);
            isLeft ? (sliderRefLeft.current.style.left = pxAdd + "px") : (sliderRefRight.current.style.left = pxAdd + "px");
        }
    };

    const onMoveListenerLeft = (e) => onMouseMove(e, true);
    const onMoveListenerRight = (e) => onMouseMove(e, false);
    const onMouseUpListener = (e) => onMouseUp(e, (isSlidingLeft ? 'left' : 'right'));

    /**
     * Left and Right onMouseUp
     */
    const onMouseUp = (e, slider) => {
        if (slider === 'left') {
            setIsSlidingLeft(false);
            document.removeEventListener("mousemove", onMoveListenerLeft);
        } else {
            setIsSlidingRight(false);
            document.removeEventListener("mousemove", onMoveListenerRight);
        }
    };

    useEffect(() => {
        if (isSlidingLeft || isSlidingRight) {
            document.addEventListener("mousemove", isSlidingLeft ? onMoveListenerLeft : onMoveListenerRight);
            document.addEventListener("mouseup", onMouseUpListener);
        }
    }, [isSlidingLeft, isSlidingRight]);


    return (
        <>
            <div ref={inputRangeRef} className="range">
                <div
                    className="range__sliderleft"
                    ref={sliderRefLeft}
                    onMouseDown={(e) => {
                        setIsSlidingRight(false);
                        setIsSlidingLeft(true);
                        sliderRefLeft.current.style.cursor = 'grabbing';
                    }}
                    onPointerDown={(e) => {
                        setIsSlidingRight(false);
                        setIsSlidingLeft(true);
                        sliderRefLeft.current.style.cursor = 'grabbing';
                    }}
                    onMouseUp={(e) => sliderRefLeft.current.style.cursor = 'grab'}
                    onPointerUp={(e) => sliderRefLeft.current.style.cursor = 'grab'}
                    
                >
                </div>
                <div
                    className="range__sliderright"
                    ref={sliderRefRight}
                    onMouseDown={(e) => {
                        setIsSlidingLeft(false);
                        setIsSlidingRight(true);
                        sliderRefRight.current.style.cursor = 'grabbing';
                    }}
                    onMouseUp={(e) => sliderRefRight.current.style.cursor = 'grab'}
                    onPointerDown={(e) => {
                        setIsSlidingLeft(false);
                        setIsSlidingRight(true);
                        sliderRefRight.current.style.cursor = 'grabbing';
                    }}
                    onPointerUp={(e) => sliderRefRight.current.style.cursor = 'grab'}
                >
                </div>
            </div>
            <div className="range__values">
                <input
                    onChange={({ target: { value } }) => onSetNewValue(value, true)}
                    value={leftValue}
                    type="number"
                    disabled={staticRange.length > 0}
                />
                <span>-</span>
                <input
                    value={rightValue}
                    onChange={({ target: { value } }) => onSetNewValue(value, false)}
                    type="number"
                    disabled={staticRange.length > 0}
                />
            </div>
        </>
    );
};
