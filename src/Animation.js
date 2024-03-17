import { useEffect, useState } from 'react';
import './Animation.css'

const Object = ({className, offset}) => {

	const [angle, setAngle] = useState(offset);
	const [radius, setRadius] = useState(1);

	useEffect(() => {
		const onScroll = e => {
			setRadius(1 + e.target.documentElement.scrollTop/window.innerHeight);
		};
		window.addEventListener("scroll", onScroll);

		return () => window.removeEventListener("srcoll", onScroll);
	}, [radius]);

	useEffect(() => {
		const interval = setInterval(() => {
			setAngle((prevAngle) => prevAngle + 0.01);
		}, 10);

		return () => clearInterval(interval);
	}, []);

	return (
		<div 
			className={className}
			style={{
				marginBottom: `${25 * radius * Math.cos(angle)}rem`,
				marginLeft: `${25 * radius * Math.sin(angle)}rem`
			}}
		>

		</div>
	);
}

export default function Animation() {
	return (
		<>
			<div className="Animation-path"/>
			<Object className="particle" offset={0}/>
			<Object className="particle" offset={Math.PI }/>
		</>
	);
};