const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.post('/api/signup', (req, res) => {
    const {username, email, password} = req.body

    const existingUserByUsername = router.db.get('user').find((u) => u.username === username).value()
    console.log(existingUserByUsername)
    if (existingUserByUsername)
        return res.status(409).json({error: 'Username already exists'})

    const existingUserByEmail = router.db.get('user').find(u => u.email === email).value();
})

server.post('/api/login', (req, res) => {
    const { username, email, password } = req.body;

    if (!username && !email) {
        return res.status(400).json({ error: 'Username or email is required' });
    }

    if (!password) {
        return res.status(400).json({ error: 'Password is required' });
    }

    const user = router.db
        .get("users")
        .find({username})
        .value();

    if (!user || user.password !== password) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }

    return res.status(200).json({ message: 'Login successful', user });
});

server.use(router);

server.listen(3001, () => {
    console.log('JSON Server is running');
});
