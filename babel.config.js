module.exports = function (api) {
	api.cache(true)
	return {
		presets: ['babel-preset-expo'],
		plugins: [
			'nativewind/babel',
			[
				'module-resolver',
				{
					root: ['./src'],
					extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
					alias: {
						'*': ['src/*'],
						'@components': ['src/components/*'],
						'@assets': ['./assets/*'],
						'@constants': ['src/core/constants/*'],
						'@hooks': ['src/core/hooks/*'],
						'@navigation': ['src/core/navigation/*'],
					},
				},
			],
		],
	}
}
