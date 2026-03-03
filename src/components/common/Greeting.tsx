function Greeting({ isLoggedIn }) {
    return <h1>{isLoggedIn ? "Welcome back!" : "Please sign in."}</h1>;
}

export default Greeting;