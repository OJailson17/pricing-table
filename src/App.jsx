import { PriceCard } from './components/PriceCard';
import { MainPriceCard } from './components/PriceCard/MainCard';

export function App() {
	return (
		<>
			<div className='w-full min-h-[350px] bg-primary lg:h-[50vh]'></div>

			<header className='w-full h-full p-4 top-16 left-1/2 -translate-x-1/2 absolute'>
				<h1 className='w-full text-white text-center text-5xl font-bold max-[375px]:text-4xl'>
					Conheça nossos planos
				</h1>

				<p className='w-full text-white text-center text-base font-normal mt-5 md:w-1/2 md:mx-auto lg:w-1/3'>
					Conheça nossas soluções e escolha o plano ideal para o seu próximo
					projeto.
				</p>
			</header>

			<div className='w-full flex items-center justify-center flex-col gap-5 -mt-24 mb-8 max-[375px]:-mt-16 md:flex-row md:flex-wrap lg:flex-nowrap lg:w-[90%] lg:mx-auto 2xl:-mt-32'>
				<PriceCard />
				<MainPriceCard />
				<PriceCard plan={'Profissional'} price={'59'} bonus={4} />
			</div>
		</>
	);
}

export default App;
