import { Flex } from "@radix-ui/themes";
import Decoration from "../components/decorations";
import { motion } from "framer-motion";
import Login from "../components/login";
import { useState } from "react";
import Register from "../components/register";

export default function Auth() {
	const [isLogin, setLogin] = useState(true);

	return (
		<Flex direction="column" className="dark">
			<Decoration />
			<Flex className="dark:bg-zinc-900 bg-slate-50 h-[38.6rem] transition-all duration-300">
				<Flex direction="column" 
					align="center" 
					className="dark:bg-zinc-800 bg-slate-100 max-w-[24rem] ml-[2.2rem] px-12 my-8 rounded-xl max-h-[36.5rem] transition-all duration-300">
					<motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="dark:text-white mt-5 select-none text-3xl font-sans">
						<b>TIMER SCRIPTS</b>
					</motion.div>
					{
						isLogin ? ( <Login setLogin={setLogin} /> ) : ( <Register setLogin={setLogin} /> )
					}
				</Flex>
			</Flex>
		</Flex>
	);
}
