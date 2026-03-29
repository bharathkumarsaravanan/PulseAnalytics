type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({
    children,
    ...props
}: ButtonProps) {
    return(
        <button
            {...props}
            className="w-full bg-black text-white py-2 rounded"
        >
            {children}
        </button>
    )
}