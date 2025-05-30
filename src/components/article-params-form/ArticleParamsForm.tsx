import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';

import styles from './ArticleParamsForm.module.scss';
import { useRef, useState } from 'react';
import { useOutsideClickClose } from 'src/ui/select/hooks/useOutsideClickClose';

type formProps = {
	children: React.ReactNode;
	onApply?: () => void;
	onReset?: () => void;
};

export const ArticleParamsForm = ({
	children,
	onApply,
	onReset,
}: formProps) => {
	const [isOpen, setOpen] = useState(false);
	const formRef = useRef<HTMLDivElement>(null);

	useOutsideClickClose({
		isOpen,
		rootRef: formRef,
		onClose: () => setOpen(false),
		onChange: setOpen,
	});
	const containerClass = isOpen
		? `${styles.container} ${styles.container_open}`
		: styles.container;
	return (
		<>
			<ArrowButton
				isOpen={isOpen}
				onClick={() => {
					setOpen((prev) => !prev);
				}}
			/>
			<aside className={containerClass} ref={formRef}>
				<form
					className={styles.form}
					onSubmit={(e) => {
						e.preventDefault();
						onApply?.();
					}}
					onReset={() => {
						onReset?.();
					}}>
					{children}
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
