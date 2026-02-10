const ingredients = '/ingredients';
const products = '/products';
const productManager = `${products}/manage`;
const product = `${products}/product`;

const withProductName =
	(start: string, end: string = '') =>
	(productName: string) =>
		`${start}${productName}${end}`;

const path = {
	base: '/',
	home: '/',
	login: '/login',
	signup: '/signup',
	about: '/about',
	ingredients: ingredients,
	_ingredient: {
		default: `${ingredients}/`,
		table: `${ingredients}/table`,
		create: `${ingredients}/create`,
	},
	inventory: '/inventory',
	products: `${products}`,
	_products: {
		default: `${products}/`,
		_default: withProductName(`${product}/`),
		product: product,
		_recipes: {
			default: `${product}/:productName`,
			_recipe_param: {
				default: `${product}/:productName/`,
				list: `${product}/:productName/recipe-list`,
				create: `${product}/:productName/create-recipe`,
				recipe: `${product}/:productName/recipe/:recipeName`,
			},
			_recipe_page: (productName: string, recipeName: string) => `${product}/${productName}/recipe/${recipeName}`,
			_recipe: (productName: string) => ({
				default: `${product}/${productName}/`,
				list: `${product}/${productName}/recipe-list`,
				create: `${product}/${productName}/create-recipe`,
			}),
			_recipeFn: {
				default: withProductName(`${product}/`, '/'),
				list: withProductName(`${product}/`, '/recipe-list'),
				create: withProductName(`${product}/`, '/create-recipe'),
			},
		},
		manage: productManager,
		_manage: {
			default: `${productManager}/`,
			table: `${productManager}/list`,
			create: `${productManager}/create`,
		},
	},
};

export default path;
