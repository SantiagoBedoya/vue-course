import Counter from '@/components/Counter';
import {shallowMount} from '@vue/test-utils';

describe('Counter Component', () =>{
	let wrapper;

	beforeEach(() => {
		wrapper = shallowMount(Counter);
	})
	// test('Debe de hacer match con el snapshot', () => {
	// 	expect(wrapper.html()).toMatchSnapshot();
	// });

	test('h2 debe de tener el valor por defecto', () => {
		expect(wrapper.find('h2').exists()).toBeTruthy()
		const h2Value = wrapper.find('h2').text();
		expect(h2Value).toBe('Counter');
	})

	test('el valor por defecto debe ser 10 en el p', () => {
		// const pTags = wrapper.findAll('p');
		const value = wrapper.find('[data-testid="counter"]').text();
		expect(value).toBe('10');
	});

	test('debe de incrementar y decrementar el valor del contador', async () => {
		const [increaseBtn, decreaseBtn] = wrapper.findAll('button');

		await increaseBtn.trigger('click');
		await increaseBtn.trigger('click');
		await increaseBtn.trigger('click');
		await decreaseBtn.trigger('click');
		await decreaseBtn.trigger('click');

		const value = wrapper.find('[data-testid="counter"]').text();

		expect(value).toBe('11');
	})

	test('debe de establecer el valor por defecto', () => {
		const {start} = wrapper.props();
		const value = wrapper.find('[data-testid="counter"]').text();

		expect(Number(value)).toBe(start);
	});

	test('debe de mostrar la prop title', () => {
		const title = 'Hello, World';
		const wrapper = shallowMount(Counter, {
			props: {
				title
			}
		});
		expect(wrapper.find('h2').text()).toBe(title);
	})

});