const size = {
	mobileS: "320px",
	mobileM: "375px",
	mobileL: "425px",
	mobileXL: "480px",
	tabletS: "576px",
	tabletM: "600px",
	tabletXM: "700px",
	tablet: "768px",
	tabletL: "826px",
	tabletXL: "850px",
	laptopS: "900px",
	laptop: "1024px",
	laptopL: "1440px",
	laptopXL: "1600px",
	desktopS: "1980px",
	desktop: "2560px",
};

const getDevices = (mobileFirst = false) => {
	const mobileFirstAsString = mobileFirst ? "min-width" : "max-width";

	return {
		mobileS: `(${mobileFirstAsString}: ${size.mobileS})`,
		mobileM: `(${mobileFirstAsString}: ${size.mobileM})`,
		mobileL: `(${mobileFirstAsString}: ${size.mobileL})`,
		mobileXL: `(${mobileFirstAsString}: ${size.mobileXL})`,
		tabletS: `(${mobileFirstAsString}: ${size.tabletS})`,
		tabletM: `(${mobileFirstAsString}: ${size.tabletM})`,
		tabletXM: `(${mobileFirstAsString}: ${size.tabletXM})`,
		tablet: `(${mobileFirstAsString}: ${size.tablet})`,
		tabletL: `(${mobileFirstAsString}: ${size.tabletL})`,
		tabletXL: `(${mobileFirstAsString}: ${size.tabletXL})`,
		laptopS: `(${mobileFirstAsString}: ${size.laptopS})`,
		laptop: `(${mobileFirstAsString}: ${size.laptop})`,
		laptopL: `(${mobileFirstAsString}: ${size.laptopL})`,
		laptopXL: `(${mobileFirstAsString}: ${size.laptopXL})`,
		desktopS: `(${mobileFirstAsString}: ${size.desktopS})`,
		desktop: `(${mobileFirstAsString}: ${size.desktop})`,
	};
};

const theme = {
	color: {
		primary: {
			1: "#FFCE00",
		},
		secondary: { 1: "#0D98FF" },
		tertiary: { 1: "#850DFF" },
		neutral: {
			black: "#0a0a09",
			white: "#F3F3F3",
		},
		others: {},
	},
	typography: {
		fontFamily: {
			inter: "Inter",
			roboto: "Roboto",
		},
		fontSize: {
			sm: {
				x1: "10px",
				x2: "11px",
				x3: "12px",
				x4: "13px",
				x5: "14px",
				x6: "15px",
				x7: "16px",
				x8: "17px",
				x9: "18px",
			},
			md: {
				x1: "20px",
				x2: "22px",
				x3: "24px",
				x4: "26px",
				x5: "28px",
			},
			lg: {
				x1: "30px",
				x2: "32px",
				x3: "36px",
				x4: "40px",
				x5: "50px",
				x6: "56px",
				x7: "60px",
				x8: "64px",
			},
		},
		fontWeight: {
			100: 100,
			200: 200,
			300: 300,
			400: 400,
			500: 500,
			600: 600,
			700: 700,
			800: 800,
			900: 900,
			bold: "bold",
			bolder: "bolder",
			normal: "normal",
		},
	},
	device: {
		mobileFirst: getDevices(true),
		desktopFirst: getDevices(false),
		size,
	},
	space: {
		x0: "0",
		xpx: "1px",
		"x0.5": "2px", // 0.125rem
		x1: "4px", // 0.25rem
		"x1.5": "6px", // 0.375rem
		x2: "8px", // 0.5rem
		"x2.5": "10px", // 0.625rem
		x3: "12px", // 0.75rem
		"x3.5": "14px", // 0.875rem
		x4: "16px", // 1rem
		"x4.5": "18px",
		x5: "20px", // 1.25rem'
		"x5.5": "22px", // 1.375rem
		x6: "24px", // 1.5rem
		x7: "28px", // 1.75rem
		x8: "32px", // 2rem
		x9: "36px", // 2.25rem
		x10: "40px", // 2.5rem
		x11: "44px", // 2.75rem
		x12: "48px", // 3rem
		x14: "56px", // 3.5rem
		x15: "60px", // 3.75rem
		x16: "64px", // 4rem
		x17: "68px",
		x18: "72px",
		"x19.5": "78px",
		x20: "80px", // 5rem
		x24: "96px", // 6rem
		x28: "112px", // 7rem
		x32: "128px", // 8rem
		x36: "144px", // 9rem
		x39: "156px",
		x40: "160px", // 10rem
		x42: "168px", // 10.5rem
		x44: "176px", // 11rem
		x48: "192px", // 12rem
		x52: "208px", // 13rem
		x56: "224px", // 14rem
		x60: "240px", // 15rem
		x63: "252px",
		x64: "256px", // 16rem
		x72: "288px", // 18rem
		x78: "305px", // 18.75rem
		x80: "320px", // 20rem
		x88: "352px", // 22rem
		x96: "384px", // 24rem
		x104: "412px", // 26rem
		x112: "448px", // 28rem
		x128: "512px", // 32rem
		x144: "576px", // 36rem
		x160: "640px", // 40rem
		x224: "896px", // 56rem
	},
};

export { theme };
