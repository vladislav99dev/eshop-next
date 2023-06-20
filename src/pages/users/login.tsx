const Login = () => {
    return (
        <section className="bg-primary-100">
            <form action="" className="flex flex-col justify-center items-center">
                <h3>Login</h3>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" />
                </div>
            </form>

        </section>
    )
}
export default Login
