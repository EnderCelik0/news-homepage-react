import logo from '../assets/images/logo.svg';
import menu from '../assets/images/icon-menu.svg';

export default function Navbar() {
	return (
		<div className='flex items-center justify-between mb-7'>
			<div className='flex items-center justify-center '>
				<img src={logo} className='h-[25px]' />
			</div>
			<div className='flex items-center justify-center'>
				<img src={menu} className='cursor-pointer' />
			</div>
		</div>
	);
}
