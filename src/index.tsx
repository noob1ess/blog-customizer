import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import {
	fontFamilyOptions,
	fontSizeOptions,
	defaultArticleState,
	fontColors,
	backgroundColors,
	contentWidthArr,
} from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';
import { Select } from './ui/select';
import { RadioGroup } from './ui/radio-group';
import { Separator } from './ui/separator';
import { Text } from './ui/text';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [selectedStyle, setSelectedStyle] = useState({
		fontFamilyOption: defaultArticleState.fontFamilyOption,
		fontSizeOption: defaultArticleState.fontSizeOption,
		fontColor: defaultArticleState.fontColor,
		backgroundColor: defaultArticleState.backgroundColor,
		contentWidth: defaultArticleState.contentWidth,
	});
	const [appliedStyle, setAppliedStyle] = useState(selectedStyle);

	return (
		<main
			className={clsx(styles.main)}
			style={
				{
					'--font-family': appliedStyle.fontFamilyOption.value,
					'--font-size': appliedStyle.fontSizeOption.value,
					'--font-color': appliedStyle.fontColor.value,
					'--container-width': appliedStyle.contentWidth.value,
					'--bg-color': appliedStyle.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm
				onApply={() => setAppliedStyle(selectedStyle)}
				onReset={() => {
					setSelectedStyle(defaultArticleState);
					setAppliedStyle(defaultArticleState);
				}}>
				<Text as={'h2'} size={31} weight={800} uppercase={true}>
					Задайте параметры
				</Text>
				<Select
					selected={selectedStyle.fontFamilyOption}
					options={fontFamilyOptions}
					title='Шрифт'
					onChange={(option) =>
						setSelectedStyle((prev) => ({
							...prev,
							fontFamilyOption: option,
						}))
					}
				/>
				<RadioGroup
					name='radio'
					options={fontSizeOptions}
					selected={selectedStyle.fontSizeOption}
					title='Размер шрифта'
					onChange={(option) =>
						setSelectedStyle((prev) => ({
							...prev,
							fontSizeOption: option,
						}))
					}
				/>
				<Select
					selected={selectedStyle.fontColor}
					options={fontColors}
					title='Цвет шрифта'
					onChange={(option) =>
						setSelectedStyle((prev) => ({
							...prev,
							fontColor: option,
						}))
					}
				/>
				<Separator />
				<Select
					selected={selectedStyle.backgroundColor}
					options={backgroundColors}
					title='Цвет фона'
					onChange={(option) =>
						setSelectedStyle((prev) => ({
							...prev,
							backgroundColor: option,
						}))
					}
				/>
				<Select
					selected={selectedStyle.contentWidth}
					options={contentWidthArr}
					title='Ширина контента'
					onChange={(option) =>
						setSelectedStyle((prev) => ({
							...prev,
							contentWidth: option,
						}))
					}
				/>
			</ArticleParamsForm>
			<Article />
		</main>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
