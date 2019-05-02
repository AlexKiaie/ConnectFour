export const genColProps = (xs?: number, sm?: number, md?: number, lg?: number, xl?: number) => {
	return {
		xs: xs || 12,
		sm: sm || 12,
		md: md || 12,
		lg: lg || 12,
		xl: xl || 12
	};
}