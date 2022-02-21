const translations = {
	common: {
		amam: {
			en: 'amam',
			ar: 'أمام'
		},
		Search: {
			en: 'Search',
			ar: 'ابحث'
		},
		coins: {},
		countries: {
			jordan: {
				en: 'Jordan',
				ar: 'األردن'
			},
			lebanon: {
				en: 'Lebanon',
				ar: 'لبنان'
			},
			'saudi arabia': {
				en: 'Saudi Arabia',
				ar: 'السعودية'
			},
			egypt: {
				en: 'Egypt',
				ar: 'مصر'
			},
			syria: {
				en: 'Syria',
				ar: 'سوريا'
			},
			tunisia: {
				en: 'Tunisia',
				ar: 'تونس'
			}
		}
	},
	nav: {
		Market: {
			en: 'Market',
			ar: 'السوق'
		},
		Learn: {
			en: 'Learn',
			ar: 'تعلم'
		},
		Company: {
			en: 'Company',
			ar: 'الشركة'
		}
	},
	splash: {
		welcome: {
			header: {
				en: 'The future starts here.',
				ar: 'يبدأ مستقبلنا هنا'
			},
			subheader: {
				en: 'The easiest way to buy and sell crypto in the Middle East and North Africa.',
				ar: 'أسهل طريقة لشراء وبيع العمالت المشفرة في الشرق األوسط وشمال أفريقيا'
			}
		}
	},
	market: {},
	learn: {},
	company: {
		company: {
			en: 'Company',
			ar: 'TODO'
		},
		foundation_card: {
			title: {
				en: "We're building the foundation of tomorrow's world",
				ar: 'TODO'
			},
			body: {
				en: 'The Middle East has been alienated for too long from the cryptocurrency world due to a multiplicity of reasons (such as lack of knowledge, reliance on cash and a lack of opportunity). As such, our journey started in 2022, to solve the previously mentioned issues and building the foundation for tomorrow’s world.',
				ar: 'TODO'
			},
			tagline: {
				en: 'Amam is tailored to open the doors of opportunities.',
				ar: 'TODO'
			}
		}
		// TODO
	},
	help: {},

	// == OLD ==
	'sign in': {
		en: 'Sign in',
		ar: 'تسجيل الدخول'
	},
	heading1: {
		en: 'The future starts here.',
		ar: 'يبدأ مستقبلنا هنا'
	},
	'sub-heading1': {
		en: 'The easiest way to buy and sell crypto in the Middle East and North Africa.',
		ar: 'أسهل طريقة لشراء وبيع العمالت المشفرة في الشرق األوسط وشمال أفريقيا'
	},
	'free courses': {
		en: 'Free courses',
		ar: 'دورات مجانية'
	},
	'get started investing': {
		en: 'Get started investing',
		ar: 'ابدأ باالستثمار'
	},
	bitcoin: {
		en: 'Bitcoin (BTC)',
		ar: '(BTC) بتكوين'
	},
	ethereum: {
		en: 'Ethereum (ETH)',
		ar: '(ETH) ايثيريوم'
	},
	cardano: {
		en: 'Cardano (ADA)',
		ar: '(ADA) كاردانو'
	},
	solana: {
		en: 'Solana (SOL)',
		ar: '(SOL) سوالنا'
	},
	'learn how to invest': {
		en: 'Learn how to invest',
		ar: 'تعلم كيفية االستثمار'
	},
	'heading (free courses)': {
		en: 'Free courses offered online and in-person',
		ar: ' شخصيا في مكتبندورات مجانية عبر اإلنترنت أو '
	},
	'sub-heading (free courses)': {
		en: 'What is crypto?',
		ar: 'ما هي العمالت المشفرة'
	},
	'sub-heading 2 (free courses)': {
		en: 'What is Blockchain and how does it work?',
		ar: 'ما هي سلسلة الكتل وكيف تعمل التكنولوجيا؟'
	},
	'Learn and earn': {
		en: 'Learn and earn',
		ar: 'تعلم واربح'
	},
	'Invite a friend heading': {
		en: 'Invite a friend to earn 5 JOD in BTC',
		ar: 'ادع صديقا وإربح ٥ دنانير من البتكوين'
	},
	Invite: {
		en: 'Invite',
		ar: 'يَدْعُو إلى'
	},
	'Get started': {
		en: 'Get started',
		ar: 'ابدأ'
	},
	'Forward heading': {
		en: 'Forward… into the future',
		ar: 'أمام... إلى المستقبل'
	},
	'Forward sub-heading': {
		en: 'Tailored for the Middle East and North Africa to better the region and create a better world.',
		ar: 'مصممة لمنطقة الشرق األوسط وشمال أفريقيا لتحسين وضع المنطقة وخلق عالم أفضل للجميع'
	},

	'heading - last section': {
		en: 'Kickstart your future and begin your journey in crypto',
		ar: 'انطلق نحو المستقبل وابدا رحلتك في عالم العمالت المشفرة'
	},
	'sub-heading - last section': {
		en: 'Start planning for tomorrow’s world.',
		ar: 'ابدأ بالتخطيط لعالم الغد'
	},
	'last section first button': {
		en: 'What is crypto?',
		ar: 'ما هي العمالت المشفرة'
	},
	'last section second button': {
		en: 'Get started investing',
		ar: 'ابدا باالستثمار'
	},
	Blog: {
		en: 'Blog',
		ar: 'مدونة إلكترونية'
	},
	Facebook: {
		en: 'Facebook',
		ar: 'فيسبوك'
	},
	Twitter: {
		en: 'Twitter',
		ar: 'تويتر'
	},
	Instagram: {
		en: 'Instagram',
		ar: 'انستغرام'
	}
};

export function t(key: string, lang: string) {
	const components = key.split('.');

	let item = translations;
	for (const k of components) {
		item = item[k];
	}

	return item[lang];
}
