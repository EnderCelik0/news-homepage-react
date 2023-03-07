export default function NewPosts() {
	return (
		<div className='w-full p-4 bg-[#00001a] mb-12'>
			<div className='text-[36px] text-[#e9ab53] font-bold'>New</div>

			<div className='py-5 border-b-[1px] border-b-[#5d5f79]'>
				<h3 className='mb-2 font-bold text-[20px] text-[#fffdfa]'>
					Hydrogen VS ELectric Cars
				</h3>
				<p className='font-normal text-[15px] text-[#c5c6ce]'>
					Will Hydrogen-fueled cars ever catch up to EVs?
				</p>
			</div>

			<div className='py-7 border-b-[1px] border-b-[#5d5f79]'>
				<h3 className='mb-2 font-bold text-[20px] text-[#fffdfa]'>
					The Downsidef of AI Artistry
				</h3>
				<p className='font-normal text-[15px] text-[#c5c6ce]'>
					What are the possible adverse effects of on-demand AI image
					generation?
				</p>
			</div>

			<div className='py-7 pb-3 pr-4'>
				<h3 className='mb-2 font-bold text-[20px] text-[#fffdfa]'>
					Is VC Funding Drying Up?
				</h3>

				<p className='font-normal text-[15px] text-[#c5c6ce]'>
					Private funding by VC firms is down 50% YOY. We take a look at what
					that means.
				</p>
			</div>
		</div>
	);
}
