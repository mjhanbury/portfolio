import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, delay }) => {
	const [currentText, setCurrentText] = useState('');
	const [currentIndex, setCurrentIndex] = useState(0);
	const [complete, setComplete] = useState(false);

	useEffect(() => {

		if (complete && text !== currentText) {

			if (currentIndex >= 0) {
				const timeout = setTimeout(() => {
					setCurrentText(currentText.substring(0, currentIndex));
					setCurrentIndex(prevIndex => prevIndex - 1);
				}, delay);
	
				return () => clearTimeout(timeout);
			}
			else {
				const timeout = setTimeout(() => {
					setCurrentIndex(0);
					setCurrentText('');
					setComplete(false);
				}, delay * 10);

				return () => clearTimeout(timeout);
			}
		}

		if (currentIndex < text.length) {

			const timeout = setTimeout(() => {
				setCurrentText(prevText => prevText + text[currentIndex]);
				setCurrentIndex(prevIndex => prevIndex + 1);
			}, text[currentIndex - 1] === '.' ? delay * 10 : delay);

			return () => clearTimeout(timeout);
		}
		else {
			setComplete(true);
		}

	}, [currentIndex, currentText, complete, delay, text]);

	return <span>{currentText}</span>;
};

export default Typewriter;