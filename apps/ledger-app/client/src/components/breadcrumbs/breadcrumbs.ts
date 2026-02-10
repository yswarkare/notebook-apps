import path from '../../routes/path';

const labelWithProductName = (productName: string) => productName;

export const breadcrumbItems = {
	'0-0': {
		label: 'Home',
		pathname: path.home,
	},
	'0-1': {
		label: 'Ingredients',
		pathname: path.ingredients,
		links: {
			'0-1-0': {
				label: 'Ingredients',
				pathname: path._ingredient.default,
			},
			'0-1-1': {
				label: 'Ingredients Table',
				pathname: path._ingredient.table,
			},
			'0-1-2': {
				label: 'Create Ingredients',
				pathname: path._ingredient.create,
			},
		},
	},
	'0-2': {
		label: 'Inventory',
		pathname: path.inventory,
	},
	'0-3': {
		label: 'Products',
		pathname: path.products,
		links: {
			'0-3-0': {
				pathname: path._products.default,
				label: 'Products',
				links: {
					'0-3-0-0': {
						label: 'Manage Products',
						pathname: path._products._manage.default,
					},
					'0-3-0-1': {
						label: 'Product List',
						pathname: path._products._manage.table,
					},
					'0-3-0-2': {
						label: 'Create Product',
						pathname: path._products._manage.create,
					},
				},
			},
			'0-3-1': {
				label: 'Product',
				pathname: path._products._default,
				links: (productName: string) => ({
					'0-3-1-0': {
						label: labelWithProductName,
						pathname: path._products._recipes._recipeFn.default(productName),
						links: {
							'0-3-1-0-0': {
								label: 'Recipes',
								pathname: path._products._recipes._recipeFn.default(productName),
							},
							'0-3-1-0-1': {
								label: 'Recipe List',
								pathname: path._products._recipes._recipeFn.list(productName),
							},
							'0-3-1-0-2': {
								label: 'Create Recipe',
								pathname: path._products._recipes._recipeFn.create(productName),
							},
						},
					},
				}),
			},
		},
	},
	'0-4': {
		label: 'About',
		pathname: '/about',
	},
};
