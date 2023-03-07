import headerImg from '../assets/images/image-web-3-mobile.jpg';

export default function Header() {
	return (
		<div className='flex flex-col justify-center items-start mb-12'>
			<img src={headerImg} className='mb-5' />
			<h1 className='text-[40px] text-[#00001a] font-bold leading-[1] pr-10 mb-3 '>
				The Bright Future of Web 3.0?
			</h1>
			<p className='text-[15px] text-[#5d5f79] pr-4 mb-5'>
				We dive into the next evolution of the web that claimst to put the power
				of the platforms back into the hands of the people. But is it really
				fulfilling its promise?
			</p>
			<button className='py-3 px-10 font-bold text-[12px] tracking-[3px] bg-[#f15e50] text-[#fffdfa]'>
				READ MORE
			</button>
		</div>
	);
}
