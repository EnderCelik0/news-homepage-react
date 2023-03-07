import newsGamingGrowth from '../assets/images/image-gaming-growth.jpg';
import newsRetro from '../assets/images/image-retro-pcs.jpg';
import newsTopLaptops from '../assets/images/image-top-laptops.jpg';

export default function News({ img, newsNumber, newTitle, newDescription }) {
  return (
    <div className='flex flex-col pb-16'>
      <div className='flex  items-center mb-8'>
        <img src={newsRetro} className='h-[122px] mr-5' />
        <div className='flex flex-col'>
          <div className='text-[30px] text-[#c5c6ce] font-bold mb-1'>01</div>
          <h3 className='text-[16px] font-extrabold mb-1 '>
            Reviving Retro PCs
          </h3>
          <p className='text-[#5d5f79] text-[15px] pr-6'>
            What happens when old PCs are given modern upgrades?
          </p>
        </div>
      </div>

      <div className='flex  items-center mb-8'>
        <img src={newsTopLaptops} className='h-[122px] mr-5' />
        <div className='flex flex-col'>
          <div className='text-[30px] text-[#c5c6ce] font-bold'>02</div>
          <h3 className='text-[16px] font-extrabold mb-2'>
            Top 10 Laptops of 2022
          </h3>
          <p className='text-[#5d5f79] text-[15px] pr-6'>
            Our best picks for various need and budgets.
          </p>
        </div>
      </div>

      <div className='flex  items-center'>
        <img src={newsGamingGrowth} className='h-[122px] mr-5' />
        <div className='flex flex-col'>
          <div className='text-[30px] text-[#c5c6ce] font-bold'>03</div>
          <h3 className='text-[16px] font-extrabold mb-2'>
            The Growth of Gaming
          </h3>
          <p className='text-[#5d5f79] text-[15px] pr-6'>
            How the pandemic has sparked fresh opportunities.
          </p>
        </div>
      </div>
    </div>
  );
}
