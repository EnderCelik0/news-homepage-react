import Navbar from './components/Navbar';
import Header from './components/Header';
import NewPosts from './components/NewPosts';
import News from './components/News';
import newsGamingGrowth from './assets/images/image-gaming-growth.jpg';
import newsRetro from './assets/images/image-retro-pcs.jpg';
import newsTopLaptops from './assets/images/image-top-laptops.jpg';

export default function App() {
	return (
		<div className='h-screen w-screen p-4'>
			<Navbar />
			<Header />
			<NewPosts />
			<News />
		</div>
	);
}
