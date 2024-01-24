import { CrossCircledIcon, MinusIcon } from "@radix-ui/react-icons";
import { Flex, Text, Button } from "@radix-ui/themes";
import { appWindow } from "@tauri-apps/api/window";

export default function Decoration() {

	const onMinus = () => {
		appWindow.minimize();
	};

	const onClose = () => {
		appWindow.close();
	};

	return (
		<Flex data-tauri-drag-region direction="row" justify="between" className='bg-slate-200 dark:bg-neutral-900 transition-all duration-300'>
			<Text weight="medium" className='pl-3 py-1 text-center dark:text-white select-none transition-all duration-300'>Loader</Text>
			<Flex direction="row">
				<Button onClick={onMinus} variant='ghost' radius='none' color='gray' className='dark:text-white text-center transition-all duration-300'><MinusIcon className="my-2 mx-4" /></Button>
				<Button onClick={onClose} variant='ghost' radius='none' color='crimson' className='dark:text-white transition-all duration-300'><CrossCircledIcon className="my-2 mx-4" /></Button>
			</Flex>
		</Flex>
	);
}