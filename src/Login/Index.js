import "./Index.scss"

const Index = () => {
  return (
    <div className="login">
        <div className="card">
            <div className="left">
                <h1>Jess Talk</h1>
                    <p>Welcome to Jess talk and share your photos, ideas, and videos with others</p>
                </div>
                <p>Don't you have account?</p>
                <button>Register</button>    
            </div>
            <div className="right">
                <h1>Login</h1>
                <form>
                    <input type="text" placeholder="User name"/>
                    <input type="password" placeholder="Password"/>
                    <button>Login</button>
                </form>
        </div>
      Hello World
    </div>
  )
}

export default Index
