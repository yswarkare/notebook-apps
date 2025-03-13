const path = {
	base: '/',
	home: '/',
	login: '/login',
	signup: '/signup',
	about: '/about',
	ingredients: '/ingredients',
	_ingredient: {
		default: '/ingredients/',
		table: '/ingredients/table',
		create: '/ingredients/create',
	},
	inventory: '/inventory',
	products: '/products',
	_products: {
		default: '/products/',
		product: '/products/product',
		_recipes: {
			default: '/products/product/:productName',
			recipe: '/products/product/:productName/recipe',
			_recipe_param: {
				default: '/products/product/:productName/recipe/',
				list: '/products/product/:productName/recipe/list',
				create: '/products/product/:productName/recipe/create',
			},
			_recipe: (productName: string) => ({
				default: `/products/product/${productName}/recipe/`,
				list: `/products/product/${productName}/recipe/list`,
				create: `/products/product/${productName}/recipe/create`,
			})
		},
		manage: '/products/manage',
		_manage: {
			default: '/products/manage/',
			table: '/products/manage/list',
			create: '/products/manage/create',
		}
	},
};

export default path;
