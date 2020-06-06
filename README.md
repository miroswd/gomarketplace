<p align="center">
<img src="https://github.com/miroswd/gomarketplace/blob/master/src/assets/logo%402x.png" width="250px">
</p>
<p align="center">Aplicativo mobile para acrescentar itens ao carrinho de compras.</p>

</br>
<p align="center">
  <img src="" width="400px" />
  <img src="" width="400px" />
</p>

<h4>Para rodar a aplicação no dispositivo físico</h4>

- Modificar o ip da máquina, no arquivo <a href="https://github.com/miroswd/gomarketplace/blob/master/src/services/api.ts"/>api.ts</a>

```bash
yarn # ou npm install
```

```bash
yarn android
yarn start

```

```bash
yarn json-server server.json -H IP.DA.MÁQUINA -p 3333 # Inicializando a fake api na porta 3333
```
