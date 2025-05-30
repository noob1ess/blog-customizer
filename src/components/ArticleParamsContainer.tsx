import { Dispatch, SetStateAction, useState } from 'react';
import {
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
} from 'src/constants/articleProps';
import { ArticleParamsForm } from './article-params-form';
import { Text } from 'src/ui/text';
import { Select } from 'src/ui/select';
import { RadioGroup } from 'src/ui/radio-group';
import { Separator } from 'src/ui/separator';

type ArticleProps = {
	setAppliedStyle: Dispatch<SetStateAction<typeof defaultArticleState>>;
};

export const ArticleParamsContainer = ({ setAppliedStyle }: ArticleProps) => {
	const [selectedStyle, setSelectedStyle] = useState({
		fontFamilyOption: defaultArticleState.fontFamilyOption,
		fontSizeOption: defaultArticleState.fontSizeOption,
		fontColor: defaultArticleState.fontColor,
		backgroundColor: defaultArticleState.backgroundColor,
		contentWidth: defaultArticleState.contentWidth,
	});

	return (
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
	);
};
