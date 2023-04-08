import { PriceCard } from './components/PriceCard';
import { MainPriceCard } from './components/PriceCard/MainCard';

export function App() {
	return (
		<>
			<div className='w-full h-[50vh] bg-primary'></div>

			<header className='w-full p-4 top-16 left-1/2 -translate-x-1/2 absolute'>
				<h1 className='w-full text-white text-center text-5xl font-bold '>
					Conheça nossos planos
				</h1>

				<p className='w-full text-white text-center text-base font-normal mt-5 lg:w-1/3 lg:mx-auto'>
					Conheça nossas soluções e escolha o plano ideal para o seu próximo
					projeto.
				</p>
			</header>

			<div className='w-full flex items-center justify-center flex-col gap-5 -mt-24 mb-8 md:flex-wrap lg:flex-row lg:w-[90%] lg:mx-auto'>
				<PriceCard />
				<MainPriceCard />
				<PriceCard plan={'Professional'} price={'59'} />
			</div>
		</>
	);
}

export default App;
