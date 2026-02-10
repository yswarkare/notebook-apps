import { useEffect, useState } from "react";
import StyledSelect from "./StyledSelect";
import { useMatches, useParams } from "react-router-dom";

export type OptType = {
	[x: string]: {
		label: string;
		pathname: string | CallableFunction
		links?: OptType | CallableFunction
	}
}

type PropTypes = {
	options: OptType
}

function BreadcrumbNested({ options }: PropTypes) {
	const params = useParams()
	const matches = useMatches()
	const [selected, setSelected] = useState<string>('')

	useEffect(() => {
		if (matches) {
			const idKeys = Object.keys(options)
			matches.forEach(({ id }) => {
				if (idKeys.includes(id)) {
					setSelected(id);
				}
			})
		}
	}, [matches, options]);

	return (
		<>
			<StyledSelect
				onChange={(value: string) => setSelected(value)}
				selected={selected}
				options={options}
			></StyledSelect>
			{
				options[selected]?.links && (
					<>
						<span>-</span>
						<NestedBreadcrumbs options={
							typeof options[selected]?.links === 'function' && params.productName ? options[selected]?.links(params.productName) : options[selected]?.links
						} />
					</>
				)
			}
		</>
	);
}

function NestedBreadcrumbs({ options }: PropTypes) {
	const params = useParams()
	const matches = useMatches()
	const [selected, setSelected] = useState<string>('')

	useEffect(() => {
		if (matches) {
			const idKeys = Object.keys(options)
			matches.forEach(({ id }) => {
				if (idKeys.includes(id)) {
					setSelected(id);
				}
			})
		}
	}, [matches, options]);

	return (
		<>
			<StyledSelect
				onChange={(value: string) => setSelected(value)}
				selected={selected}
				options={options}
			></StyledSelect>
			{
				options[selected]?.links && (
					<>
						<span>-</span>
						<BreadcrumbNested options={
							typeof options[selected]?.links === 'function' && params.productName ? options[selected]?.links(params.productName) : options[selected]?.links
						} />
					</>
				)
			}
		</>
	);
}

export default NestedBreadcrumbs;
