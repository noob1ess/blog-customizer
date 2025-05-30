import { CSSProperties, useState } from 'react';
import { ArticleParamsContainer } from './ArticleParamsContainer';
import { Article } from './article';
import clsx from 'clsx';
import styles from '../styles/index.module.scss';
import { defaultArticleState } from 'src/constants/articleProps';

export const App = () => {
	const [appliedStyle, setAppliedStyle] = useState(defaultArticleState);

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
			<ArticleParamsContainer setAppliedStyle={setAppliedStyle} />
			<Article />
		</main>
	);
};
