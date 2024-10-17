const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

const getUsers = async (req, reply) => {
  try {
    reply.code(200).send(users);
  }catch(err){
    reply.code(500).send({ message: err.message });
  }
}
const getUser = async (req, reply) => {
  try {
    const id = req.params.id;
    const user = users.find((user) => user.id === parseInt(id));
    if (!user) {
      reply.code(404).send({ message: "User not found" });
    }
    reply.code(200).send(user);
  }catch(err){
    reply.code(500).send({ message: err.message });
  }
}

const addUser = async (req, reply) => {
  try {
    const user = req.body;
    users.push({id:user.length + 1, ...user});
    reply.code(201).send(user);
  }catch(err){
    reply.code(500).send({ message: err.message });
  }
}


module.exports = { getUsers, getUser, addUser };
