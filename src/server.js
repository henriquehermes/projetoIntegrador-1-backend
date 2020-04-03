const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
app.use(cors());

mongoose.connect(
  'mongodb+srv://admin:unisinos@clusterapi-v6fiw.mongodb.net/projetoIntegrador?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333);
