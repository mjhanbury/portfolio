import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faContactCard } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Animation from './Animation.js';

function App() {
	return (
		<div className="App">
			<div className='App-header'>
				<div className='App-downloads'>
					<button>
						<p>Resume</p>
						<FontAwesomeIcon icon={faDownload} className="icon"></FontAwesomeIcon>
					</button>
					<button>
						<p>CV</p>
						<FontAwesomeIcon icon={faDownload} className="icon"></FontAwesomeIcon>
					</button>
				</div>
				<div className='App-media'>
					<FontAwesomeIcon icon={faGithub} className="icon"></FontAwesomeIcon>
					<FontAwesomeIcon icon={faLinkedin} className="icon"></FontAwesomeIcon>
					<FontAwesomeIcon icon={faContactCard} className="icon"></FontAwesomeIcon>
				</div>
			</div>

			<div className='App-body'>
				<Animation/>
			</div>
		</div>
	);
}

export default App;
