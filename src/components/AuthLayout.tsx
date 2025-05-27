type Props = {
    title: string
}

const AuthLayout = ({title}: Props) => {
    return (
        <>
            <div className="text-center text-h6">
                {title}
            </div>
        </>
    )
}

export default AuthLayout