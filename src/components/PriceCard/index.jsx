export const PriceCard = ({ price, plan }) => {
	return (
		<div className='w-[90%] max-w-[355px] p-5 bg-white rounded-lg flex flex-col shadow'>
			<p className='text-lg text-primary-text font-semibold'>
				{plan || 'Free'}
			</p>

			<div className='text-secondary-text text-lg mt-5'>
				<strong className='text-primary-text font-bold text-3xl'>
					R$ {price || '0'},<span className='text-base'>00</span>
				</strong>{' '}
				/mês
			</div>

			<p className='mt-2 text-secondary-text text-sm'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			</p>

			<hr className='m-5' />

			<div className='flex flex-col gap-5'>
				<div className=' text-secondary-text flex items-center gap-4'>
					<img src='/check.svg' alt='' />
					<p className='text-sm font-semibold'>Lorem ipsum dolor sit amet</p>
				</div>
				<div className=' text-secondary-text flex items-center gap-4'>
					<img src='/check.svg' alt='' />
					<p className='text-sm font-semibold'>Lorem ipsum dolor sit amet</p>
				</div>
			</div>

			<button className='w-[90%] h-12 border-[1px] border-primary rounded-xl bg-transparent mx-auto mt-32 text-primary text-lg font-semibold'>
				Assinar
			</button>
		</div>
	);
};
