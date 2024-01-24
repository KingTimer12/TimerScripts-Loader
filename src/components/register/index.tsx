/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from "@hookform/resolvers/zod";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { Button, Callout, Flex, Text, TextField } from "@radix-ui/themes";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { motion } from "framer-motion";

interface RegisterProps {
    setLogin: any
}

const registerSchema = z.object({
	username: z.string(),
	password: z.string(),
	confirmPassword: z.string()
});

type RegisterSchema = z.infer<typeof registerSchema>

export default function Register({setLogin}: RegisterProps) {
	const [warn, setWarn] = useState<string>();

	const onRegister = () => {
		setLogin(true);
	};

	const { register, handleSubmit } = useForm<RegisterSchema>({
		resolver: zodResolver(registerSchema)
	});

	const onSubmit = (data: RegisterSchema) => {
		if (!data.username.length) {
			setWarn("Você precisa colocar o username.");
			return;
		}
		if (!data.password.length) {
			setWarn("Você precisa colocar uma senha.");
			return;
		}
		if (!data.confirmPassword.length) {
			setWarn("Você precisa confirmar a senha.");
			return;
		}
		if (data.confirmPassword != data.password) {
			setWarn("As senhas estão diferentes.");
			return;
		}
		console.log(data);
	};

	return (
		<>
			<Text align="center" className="mt-5 text-wrap select-none font-thin dark:text-white">
                    Crie uma conta para ter acesso completo ao loader
			</Text>
			<Flex direction="column" className="mt-[10%]">
				<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
					<Flex direction="column">
						<TextField.Input
							variant="soft"
							placeholder="Username do Discord"
							className="p-2 py-3 dark:bg-[#202020] bg-slate-200 rounded-lg dark:text-white transition-all duration-300"
							{...register("username")}
						/>
						<span className="select-none text-left text-sm"><a href="https://i.imgur.com/HICaIDd.png" target="_blank" rel="noopener noreferrer" className="cursor-pointer dark:text-white dark:hover:text-white/80 transition-colors duration-300">Como faço para pegar?</a></span>
					</Flex>
					<TextField.Input
						variant="soft"
						type="password"
						placeholder="Senha"
						className="p-2 py-3 dark:bg-[#202020] bg-slate-200 rounded-lg dark:text-white transition-all duration-300"
						{...register("password")}
					/>
					<TextField.Input
						variant="soft"
						type="password"
						placeholder="Confirmar Senha"
						className="p-2 py-3 dark:bg-[#202020] bg-slate-200 rounded-lg dark:text-white transition-all duration-300"
						{...register("confirmPassword")}
					/>
					<Button className="mt-2 p-2 rounded-lg bg-neutral-700 hover:bg-neutral-600 dark:text-white cursor-pointer transition-colors duration-300">Registrar</Button>
				</form>
	
				<Flex direction="column" className="mt-4 select-none transition-all duration-300">
					<span className="text-center dark:text-white">Já tem uma conta?</span>
					<span className="text-center dark:text-white"><span className="cursor-pointer dark:hover:text-white/80 transition-colors duration-300" onClick={onRegister}>Entrar</span></span>
				</Flex>
			</Flex>
			{
				warn && (
					<motion.div initial={{ scale:0 }} animate={{ scale:1 }}>
						<Callout.Root color="red" className="mt-2 flex flex-row items-center p-2 rounded-lg">
							<Callout.Icon className="mt-[0.16rem]">
								<ExclamationTriangleIcon />
							</Callout.Icon>
							<Callout.Text className="ml-1 select-none text-center">
								{warn}
							</Callout.Text>
						</Callout.Root>
					</motion.div>
				)
			}
		</>
	);
}