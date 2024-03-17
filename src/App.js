import './App.css';
import { React, useEffect, useState } from 'react';
import Typewriter from './Typewriter';

function App() {
	const [message, setMessage] = useState('Hello. My Name is Miles.');
	const [showInput, setShowInput] = useState(false);

	const typing_speed = 35;
	var type_time = ((message.length - (message.split('.').length - 1)) + (message.split('.').length - 1) * 10) * typing_speed;
	var clear_time = message.length * typing_speed;

	useEffect(() => {
		type_time = ((message.length - (message.split('.').length - 1)) + (message.split('.').length - 1) * 10) * typing_speed;
		clear_time = message.length * typing_speed;
	}, [message])

	return (
		<div className='App'>
			
			<div className='header'>
				<p>Header</p>
			</div>

			<div className='body' style={{ border: '1px blue dashed' }}>

				<div className='display-container' style={{ border: '1px green solid' }}>
	
					<Typewriter text={message} delay={typing_speed} />
	
					<div className='chat-buttons'>

						<button 
							className={'primary_button ' + `${ showInput ? 'slideOut' : 'slideIn' }`} 
							style={{ animationDelay: `${type_time}ms` }} 
							onClick={() => { setShowInput(true); }}
						>Let's Chat</button>
						
						<button className={'secondary_button ' + `${ showInput ? 'slideOut' : 'slideIn' }`} style={{ animationDelay: `${type_time + 200}ms` }}>Resume/CV</button>
						<button className={'secondary_button ' + `${ showInput ? 'slideOut' : 'slideIn' }`} style={{ animationDelay: `${type_time + 400}ms` }}>Network</button>

					</div>

				</div>

				<div className={'divider-container' + `${ showInput ? '' : 'hidden'}`}/>

				<div className='hidden input-container'>

				</div>

			</div>

			<div className='footer'>
				
				<p>Footer</p>
				{/* resume and cv download/preview buttons */}

			</div>

		</div>
	)
}

export default App;