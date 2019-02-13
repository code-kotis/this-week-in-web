const colors = [
	{
		name: 'red_50',
		hex: '#fde0dc'
	},
	{
		name: 'red_100',
		hex: '#f9bdbb'
	},
	{
		name: 'red_200',
		hex: '#f69988'
	},
	{
		name: 'red_300',
		hex: '#f36c60'
	},
	{
		name: 'red_400',
		hex: '#e84e40'
	},
	{
		name: 'red_500',
		hex: '#e51c23'
	},
	{
		name: 'red_600',
		hex: '#dd191d'
	},
	{
		name: 'red_700',
		hex: '#d01716'
	},
	{
		name: 'red_800',
		hex: '#c41411'
	},
	{
		name: 'red_900',
		hex: '#b0120a'
	},
	{
		name: 'red_A100',
		hex: '#ff7997'
	},
	{
		name: 'red_A200',
		hex: '#ff5177'
	},
	{
		name: 'red_A400',
		hex: '#ff2d6f'
	},
	{
		name: 'red_A700',
		hex: '#e00032'
	},
	{
		name: 'pink_50',
		hex: '#fce4ec'
	},
	{
		name: 'pink_100',
		hex: '#f8bbd0'
	},
	{
		name: 'pink_200',
		hex: '#f48fb1'
	},
	{
		name: 'pink_300',
		hex: '#f06292'
	},
	{
		name: 'pink_400',
		hex: '#ec407a'
	},
	{
		name: 'pink_500',
		hex: '#e91e63'
	},
	{
		name: 'pink_600',
		hex: '#d81b60'
	},
	{
		name: 'pink_700',
		hex: '#c2185b'
	},
	{
		name: 'pink_800',
		hex: '#ad1457'
	},
	{
		name: 'pink_900',
		hex: '#880e4f'
	},
	{
		name: 'pink_A100',
		hex: '#ff80ab'
	},
	{
		name: 'pink_A200',
		hex: '#ff4081'
	},
	{
		name: 'pink_A400',
		hex: '#f50057'
	},
	{
		name: 'pink_A700',
		hex: '#c51162'
	},
	{
		name: 'purple_50',
		hex: '#f3e5f5'
	},
	{
		name: 'purple_100',
		hex: '#e1bee7'
	},
	{
		name: 'purple_200',
		hex: '#ce93d8'
	},
	{
		name: 'purple_300',
		hex: '#ba68c8'
	},
	{
		name: 'purple_400',
		hex: '#ab47bc'
	},
	{
		name: 'purple_500',
		hex: '#9c27b0'
	},
	{
		name: 'purple_600',
		hex: '#8e24aa'
	},
	{
		name: 'purple_700',
		hex: '#7b1fa2'
	},
	{
		name: 'purple_800',
		hex: '#6a1b9a'
	},
	{
		name: 'purple_900',
		hex: '#4a148c'
	},
	{
		name: 'purple_A100',
		hex: '#ea80fc'
	},
	{
		name: 'purple_A200',
		hex: '#e040fb'
	},
	{
		name: 'purple_A400',
		hex: '#d500f9'
	},
	{
		name: 'purple_A700',
		hex: '#aa00ff'
	},
	{
		name: 'dark_purple_50',
		hex: '#ede7f6'
	},
	{
		name: 'dark_purple_100',
		hex: '#d1c4e9'
	},
	{
		name: 'dark_purple_200',
		hex: '#b39ddb'
	},
	{
		name: 'dark_purple_300',
		hex: '#9575cd'
	},
	{
		name: 'dark_purple_400',
		hex: '#7e57c2'
	},
	{
		name: 'dark_purple_500',
		hex: '#673ab7'
	},
	{
		name: 'dark_purple_600',
		hex: '#5e35b1'
	},
	{
		name: 'dark_purple_700',
		hex: '#512da8'
	},
	{
		name: 'dark_purple_800',
		hex: '#4527a0'
	},
	{
		name: 'dark_purple_900',
		hex: '#311b92'
	},
	{
		name: 'dark_purple_A100',
		hex: '#b388ff'
	},
	{
		name: 'dark_purple_A200',
		hex: '#7c4dff'
	},
	{
		name: 'dark_purple_A400',
		hex: '#651fff'
	},
	{
		name: 'dark_purple_A700',
		hex: '#6200ea'
	},
	{
		name: 'indigo_50',
		hex: '#e8eaf6'
	},
	{
		name: 'indigo_100',
		hex: '#c5cae9'
	},
	{
		name: 'indigo_200',
		hex: '#9fa8da'
	},
	{
		name: 'indigo_300',
		hex: '#7986cb'
	},
	{
		name: 'indigo_400',
		hex: '#5c6bc0'
	},
	{
		name: 'indigo_500',
		hex: '#3f51b5'
	},
	{
		name: 'indigo_600',
		hex: '#3949ab'
	},
	{
		name: 'indigo_700',
		hex: '#303f9f'
	},
	{
		name: 'indigo_800',
		hex: '#283593'
	},
	{
		name: 'indigo_900',
		hex: '#1a237e'
	},
	{
		name: 'indigo_A100',
		hex: '#8c9eff'
	},
	{
		name: 'indigo_A200',
		hex: '#536dfe'
	},
	{
		name: 'indigo_A400',
		hex: '#3d5afe'
	},
	{
		name: 'indigo_A700',
		hex: '#304ffe'
	},
	{
		name: 'blue_50',
		hex: '#e7e9fd'
	},
	{
		name: 'blue_100',
		hex: '#d0d9ff'
	},
	{
		name: 'blue_200',
		hex: '#afbfff'
	},
	{
		name: 'blue_300',
		hex: '#91a7ff'
	},
	{
		name: 'blue_400',
		hex: '#738ffe'
	},
	{
		name: 'blue_500',
		hex: '#5677fc'
	},
	{
		name: 'blue_600',
		hex: '#4e6cef'
	},
	{
		name: 'blue_700',
		hex: '#455ede'
	},
	{
		name: 'blue_800',
		hex: '#3b50ce'
	},
	{
		name: 'blue_900',
		hex: '#2a36b1'
	},
	{
		name: 'blue_A100',
		hex: '#a6baff'
	},
	{
		name: 'blue_A200',
		hex: '#6889ff'
	},
	{
		name: 'blue_A400',
		hex: '#4d73ff'
	},
	{
		name: 'blue_A700',
		hex: '#4d69ff'
	},
	{
		name: 'light_blue_50',
		hex: '#e1f5fe'
	},
	{
		name: 'light_blue_100',
		hex: '#b3e5fc'
	},
	{
		name: 'light_blue_200',
		hex: '#81d4fa'
	},
	{
		name: 'light_blue_300',
		hex: '#4fc3f7'
	},
	{
		name: 'light_blue_400',
		hex: '#29b6f6'
	},
	{
		name: 'light_blue_500',
		hex: '#03a9f4'
	},
	{
		name: 'light_blue_600',
		hex: '#039be5'
	},
	{
		name: 'light_blue_700',
		hex: '#0288d1'
	},
	{
		name: 'light_blue_800',
		hex: '#0277bd'
	},
	{
		name: 'light_blue_900',
		hex: '#01579b'
	},
	{
		name: 'light_blue_A100',
		hex: '#80d8ff'
	},
	{
		name: 'light_blue_A200',
		hex: '#40c4ff'
	},
	{
		name: 'light_blue_A400',
		hex: '#00b0ff'
	},
	{
		name: 'light_blue_A700',
		hex: '#0091ea'
	},
	{
		name: 'cyan_50',
		hex: '#e0f7fa'
	},
	{
		name: 'cyan_100',
		hex: '#b2ebf2'
	},
	{
		name: 'cyan_200',
		hex: '#80deea'
	},
	{
		name: 'cyan_300',
		hex: '#4dd0e1'
	},
	{
		name: 'cyan_400',
		hex: '#26c6da'
	},
	{
		name: 'cyan_500',
		hex: '#00bcd4'
	},
	{
		name: 'cyan_600',
		hex: '#00acc1'
	},
	{
		name: 'cyan_700',
		hex: '#0097a7'
	},
	{
		name: 'cyan_800',
		hex: '#00838f'
	},
	{
		name: 'cyan_900',
		hex: '#006064'
	},
	{
		name: 'cyan_A100',
		hex: '#84ffff'
	},
	{
		name: 'cyan_A200',
		hex: '#18ffff'
	},
	{
		name: 'cyan_A400',
		hex: '#00e5ff'
	},
	{
		name: 'cyan_A700',
		hex: '#00b8d4'
	},
	{
		name: 'teal_50',
		hex: '#e0f2f1'
	},
	{
		name: 'teal_100',
		hex: '#b2dfdb'
	},
	{
		name: 'teal_200',
		hex: '#80cbc4'
	},
	{
		name: 'teal_300',
		hex: '#4db6ac'
	},
	{
		name: 'teal_400',
		hex: '#26a69a'
	},
	{
		name: 'teal_500',
		hex: '#009688'
	},
	{
		name: 'teal_600',
		hex: '#00897b'
	},
	{
		name: 'teal_700',
		hex: '#00796b'
	},
	{
		name: 'teal_800',
		hex: '#00695c'
	},
	{
		name: 'teal_900',
		hex: '#004d40'
	},
	{
		name: 'teal_A100',
		hex: '#a7ffeb'
	},
	{
		name: 'teal_A200',
		hex: '#64ffda'
	},
	{
		name: 'teal_A400',
		hex: '#1de9b6'
	},
	{
		name: 'teal_A700',
		hex: '#00bfa5'
	},
	{
		name: 'green_50',
		hex: '#d0f8ce'
	},
	{
		name: 'green_100',
		hex: '#a3e9a4'
	},
	{
		name: 'green_200',
		hex: '#72d572'
	},
	{
		name: 'green_300',
		hex: '#42bd41'
	},
	{
		name: 'green_400',
		hex: '#2baf2b'
	},
	{
		name: 'green_500',
		hex: '#259b24'
	},
	{
		name: 'green_600',
		hex: '#0a8f08'
	},
	{
		name: 'green_700',
		hex: '#0a7e07'
	},
	{
		name: 'green_800',
		hex: '#056f00'
	},
	{
		name: 'green_900',
		hex: '#0d5302'
	},
	{
		name: 'green_A100',
		hex: '#a2f78d'
	},
	{
		name: 'green_A200',
		hex: '#5af158'
	},
	{
		name: 'green_A400',
		hex: '#14e715'
	},
	{
		name: 'green_A700',
		hex: '#12c700'
	},
	{
		name: 'light_green_50',
		hex: '#f1f8e9'
	},
	{
		name: 'light_green_100',
		hex: '#dcedc8'
	},
	{
		name: 'light_green_200',
		hex: '#c5e1a5'
	},
	{
		name: 'light_green_300',
		hex: '#aed581'
	},
	{
		name: 'light_green_400',
		hex: '#9ccc65'
	},
	{
		name: 'light_green_500',
		hex: '#8bc34a'
	},
	{
		name: 'light_green_600',
		hex: '#7cb342'
	},
	{
		name: 'light_green_700',
		hex: '#689f38'
	},
	{
		name: 'light_green_800',
		hex: '#558b2f'
	},
	{
		name: 'light_green_900',
		hex: '#33691e'
	},
	{
		name: 'light_green_A100',
		hex: '#ccff90'
	},
	{
		name: 'light_green_A200',
		hex: '#b2ff59'
	},
	{
		name: 'light_green_A400',
		hex: '#76ff03'
	},
	{
		name: 'light_green_A700',
		hex: '#64dd17'
	},
	{
		name: 'lime_50',
		hex: '#f9fbe7'
	},
	{
		name: 'lime_100',
		hex: '#f0f4c3'
	},
	{
		name: 'lime_200',
		hex: '#e6ee9c'
	},
	{
		name: 'lime_300',
		hex: '#dce775'
	},
	{
		name: 'lime_400',
		hex: '#d4e157'
	},
	{
		name: 'lime_500',
		hex: '#cddc39'
	},
	{
		name: 'lime_600',
		hex: '#c0ca33'
	},
	{
		name: 'lime_700',
		hex: '#afb42b'
	},
	{
		name: 'lime_800',
		hex: '#9e9d24'
	},
	{
		name: 'lime_900',
		hex: '#827717'
	},
	{
		name: 'lime_A100',
		hex: '#f4ff81'
	},
	{
		name: 'lime_A200',
		hex: '#eeff41'
	},
	{
		name: 'lime_A400',
		hex: '#c6ff00'
	},
	{
		name: 'lime_A700',
		hex: '#aeea00'
	},
	{
		name: 'yellow_50',
		hex: '#fffde7'
	},
	{
		name: 'yellow_100',
		hex: '#fff9c4'
	},
	{
		name: 'yellow_200',
		hex: '#fff59d'
	},
	{
		name: 'yellow_300',
		hex: '#fff176'
	},
	{
		name: 'yellow_400',
		hex: '#ffee58'
	},
	{
		name: 'yellow_500',
		hex: '#ffeb3b'
	},
	{
		name: 'yellow_600',
		hex: '#fdd835'
	},
	{
		name: 'yellow_700',
		hex: '#fbc02d'
	},
	{
		name: 'yellow_800',
		hex: '#f9a825'
	},
	{
		name: 'yellow_900',
		hex: '#f57f17'
	},
	{
		name: 'yellow_A100',
		hex: '#ffff8d'
	},
	{
		name: 'yellow_A200',
		hex: '#ffff00'
	},
	{
		name: 'yellow_A400',
		hex: '#ffea00'
	},
	{
		name: 'yellow_A700',
		hex: '#ffd600'
	},
	{
		name: 'amber_50',
		hex: '#fff8e1'
	},
	{
		name: 'amber_100',
		hex: '#ffecb3'
	},
	{
		name: 'amber_200',
		hex: '#ffe082'
	},
	{
		name: 'amber_300',
		hex: '#ffd54f'
	},
	{
		name: 'amber_400',
		hex: '#ffca28'
	},
	{
		name: 'amber_500',
		hex: '#ffc107'
	},
	{
		name: 'amber_600',
		hex: '#ffb300'
	},
	{
		name: 'amber_700',
		hex: '#ffa000'
	},
	{
		name: 'amber_800',
		hex: '#ff8f00'
	},
	{
		name: 'amber_900',
		hex: '#ff6f00'
	},
	{
		name: 'amber_A100',
		hex: '#ffe57f'
	},
	{
		name: 'amber_A200',
		hex: '#ffd740'
	},
	{
		name: 'amber_A400',
		hex: '#ffc400'
	},
	{
		name: 'amber_A700',
		hex: '#ffab00'
	},
	{
		name: 'orange_50',
		hex: '#fff3e0'
	},
	{
		name: 'orange_100',
		hex: '#ffe0b2'
	},
	{
		name: 'orange_200',
		hex: '#ffcc80'
	},
	{
		name: 'orange_300',
		hex: '#ffb74d'
	},
	{
		name: 'orange_400',
		hex: '#ffa726'
	},
	{
		name: 'orange_500',
		hex: '#ff9800'
	},
	{
		name: 'orange_600',
		hex: '#fb8c00'
	},
	{
		name: 'orange_700',
		hex: '#f57c00'
	},
	{
		name: 'orange_800',
		hex: '#ef6c00'
	},
	{
		name: 'orange_900',
		hex: '#e65100'
	},
	{
		name: 'orange_A100',
		hex: '#ffd180'
	},
	{
		name: 'orange_A200',
		hex: '#ffab40'
	},
	{
		name: 'orange_A400',
		hex: '#ff9100'
	},
	{
		name: 'orange_A700',
		hex: '#ff6d00'
	},
	{
		name: 'deep_orange_50',
		hex: '#fbe9e7'
	},
	{
		name: 'deep_orange_100',
		hex: '#ffccbc'
	},
	{
		name: 'deep_orange_200',
		hex: '#ffab91'
	},
	{
		name: 'deep_orange_300',
		hex: '#ff8a65'
	},
	{
		name: 'deep_orange_400',
		hex: '#ff7043'
	},
	{
		name: 'deep_orange_500',
		hex: '#ff5722'
	},
	{
		name: 'deep_orange_600',
		hex: '#f4511e'
	},
	{
		name: 'deep_orange_700',
		hex: '#e64a19'
	},
	{
		name: 'deep_orange_800',
		hex: '#d84315'
	},
	{
		name: 'deep_orange_900',
		hex: '#bf360c'
	},
	{
		name: 'deep_orange_A100',
		hex: '#ff9e80'
	},
	{
		name: 'deep_orange_A200',
		hex: '#ff6e40'
	},
	{
		name: 'deep_orange_A400',
		hex: '#ff3d00'
	},
	{
		name: 'deep_orange_A700',
		hex: '#dd2c00'
	}
];

module.exports = colors;
