/* eslint-disable @typescript-eslint/no-explicit-any */
import { DiscordLogoIcon } from "@radix-ui/react-icons";
import { Button, Flex, Separator, Text, TextField } from "@radix-ui/themes";
import { WebviewWindow } from "@tauri-apps/api/window";

interface LoginProps {
    setLogin: any
}

export default function Login({setLogin}: LoginProps) {
	const discord = WebviewWindow.getByLabel("discord");

	const onClick = () => {
		discord?.show();
	};

	const onRegister = () => {
		setLogin(false);
	};

	return (
		<>
			<Text align="center" className="mt-5 text-wrap select-none font-thin dark:text-white">
                    Logue na sua conta para ter acesso completo ao loader
			</Text>
			<Flex direction="column" className="mt-[15%]">
				<Button onClick={onClick} className="cursor-pointer flex items-center py-2 px-4 rounded-lg bg-[#5865F2] hover:bg-[#5865F2]/80 hover:text-white/80 transition-colors duration-300">
					<DiscordLogoIcon className="h-7 w-7 fill-white hover:fill-white/80 mr-4" />
					<span className="text-sm">Entrar com o Discord</span>
				</Button>
				<Separator size="4" color="gray" className="my-5" />
				<Flex direction="column" className="gap-4">
					<TextField.Input
						variant="soft"
						placeholder="Usuário"
						className="p-2 py-3 dark:bg-[#202020] bg-slate-200 rounded-lg dark:text-white transition-all duration-300"
					/>
					<Flex direction="column">
						<TextField.Input
							variant="soft"
							type="password"
							placeholder="Senha"
							className="p-2 py-3 dark:bg-[#202020] bg-slate-200 rounded-lg dark:text-white transition-all duration-300"
						/>
						<span className="select-none text-left text-sm"><span className="cursor-pointer dark:text-white dark:hover:text-white/80 transition-colors duration-300">Esqueceu a senha?</span></span>
					</Flex>
				</Flex>
				<Button className="mt-6 p-2 rounded-lg bg-neutral-700 hover:bg-neutral-600 dark:text-white cursor-pointer transition-colors duration-300">Entrar</Button>
				<Flex direction="column" className="mt-6 select-none transition-all duration-300">
					<span className="text-center dark:text-white">Não tem uma conta ainda?</span>
					<span className="text-center dark:text-white"><span className="cursor-pointer dark:hover:text-white/80 transition-colors duration-300" onClick={onRegister}>Registrar-se</span></span>
				</Flex>
			</Flex>
		</>
	);
}