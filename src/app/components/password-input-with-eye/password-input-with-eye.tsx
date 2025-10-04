"use client"
import EyeInvisibleOutlined from "@ant-design/icons/lib/icons/EyeInvisibleOutlined"
import EyeOutlined from "@ant-design/icons/lib/icons/EyeOutlined"
import { ComponentProps, useState } from "react"
import { twMerge } from "tailwind-merge"
import { Input } from "../input/Input"

type PasswordInputWithEyeProps = ComponentProps<"input">

export function PasswordInputWithEye({ ...rest }: PasswordInputWithEyeProps) {
	const [isVisible, setIsVisible] = useState(false)

	return (
		<div className="relative w-full flex items-center justify-end">
			<Input {...rest} type={isVisible ? "text" : "password"} className={twMerge("w-full", rest.className)} />
			{isVisible
				? (<EyeOutlined onClick={() => setIsVisible(oldIsVisible => !oldIsVisible)} className="absolute mr-4 text-2xl cursor pointer" />)
				: (<EyeInvisibleOutlined onClick={() => setIsVisible(oldIsVisible => !oldIsVisible)} className="absolute mr-4 text-2xl cursor pointer" />)
			}
		</div>
	)
}