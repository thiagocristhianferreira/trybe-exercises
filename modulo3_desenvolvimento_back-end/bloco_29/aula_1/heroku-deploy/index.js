const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  try {
    res.status(200).json({ message: 'Está vivo!!!' })
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Rodando na porta ${ PORT }`);
});
