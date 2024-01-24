/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Flex, Text, TextField } from "@radix-ui/themes";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
	const onRegister = () => {
		setLogin(true);
	};

	const { register, handleSubmit } = useForm<RegisterSchema>({
		resolver: zodResolver(registerSchema)
	});

	const onSubmit = (data: RegisterSchema) => {
		console.log(data);
	};

	return (
		<>
			<Text align="center" className="mt-5 text-wrap select-none font-thin dark:text-white">
                    Crie uma conta para ter acesso completo ao loader
			</Text>
			<Flex direction="column" className="mt-[15%]">
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
				</form>
				<Button className="mt-6 p-2 rounded-lg bg-neutral-700 hover:bg-neutral-600 dark:text-white cursor-pointer transition-colors duration-300">Registrar</Button>
				<Flex direction="column" className="mt-6 select-none transition-all duration-300">
					<span className="text-center dark:text-white">Já tem uma conta?</span>
					<span className="text-center dark:text-white"><span className="cursor-pointer dark:hover:text-white/80 transition-colors duration-300" onClick={onRegister}>Entrar</span></span>
				</Flex>
			</Flex>
		</>
	);
}