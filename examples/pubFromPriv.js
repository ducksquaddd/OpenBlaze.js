const Stateller = require('../build/index');
const config = require('./config.json');
(async () => {
  // Generate New Key
  let key = Stateller.generateKey();

  // Private key into a Keypair (PrivateKey and Public key)
  key = Stateller.PrivToKeypair(config.privkey);

  const client = new Stateller.Client({
    node: config.node,
    Keypair: key,
  });

  let pubKey = client.priv2pub(key.private);

  console.log(Stateller.BufferReader(pubKey));
})();
