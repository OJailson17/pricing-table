export const MainPriceCard = () => {
	return (
		<div className='w-[90%] max-w-[355px] pb-11 bg-white rounded-lg flex flex-col shadow'>
			<div className='w-full bg-secondary px-5 py-6 rounded-t-lg flex items-center justify-between'>
				<p className='text-lg text-primary font-semibold'>Básico</p>
				<button className='w-24 h-8 bg-primary text-white rounded-full font-semibold text-xs'>
					Popular
				</button>
			</div>

			<div className='text-secondary-text text-lg mt-5 px-5'>
				<strong className='text-primary-text font-bold text-3xl'>
					R$ 29,<span className='text-base'>00</span>
				</strong>{' '}
				/mês
			</div>

			<p className='mt-2 text-secondary-text text-sm px-5'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			</p>

			<hr className='m-5 px-5' />

			<div className='flex flex-col gap-5 px-5'>
				<div className=' text-secondary-text flex items-center gap-4'>
					<img src='/check.svg' alt='' />
					<p className='text-sm font-semibold'>Lorem ipsum dolor sit amet</p>
				</div>
				<div className=' text-secondary-text flex items-center gap-4'>
					<img src='/check.svg' alt='' />
					<p className='text-sm font-semibold'>Lorem ipsum dolor sit amet</p>
				</div>
			</div>

			<button className='w-[90%] h-12 px-5 border-[1px] rounded-xl bg-primary mx-auto mt-32 text-white text-lg font-semibold'>
				Assinar
			</button>
		</div>
	);
};
