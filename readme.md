# shiaa3

![Screenshot](shiaalogo2.jpeg)

**shiaa3** is a blockchain built using Cosmos SDK and Tendermint and created with [Starport](https://github.com/tendermint/starport).

**Shiaa3** is an implementation of NFT in cosmos-sdk. The native NFTs of shiaa3 is called as 
Assets

Assets can be of 5 kinds in shiaa3

− CAMEL (50 Tokens)

− HOUSE (200 Tokens)

− FOSSIL NECKLACE (100 Tokens)

− TERACOTTA LAMP (5 Tokens)

− CERAMIC PLATE (10 Token

The Assets are non-standard NFT and is inspired from the game of catan. They are like 
cards in the game of catan. But nevertheless as a property of NFT its ownership can be 
transferred and it can be burnt.

Another important aspect of it is Assets can be transferred over assets port over a 
channel, given both chains at endpoints has assets module enabled in app.go

# The monetary policies

◼ Assets can be transferred and sending your assets to other people earns you 20% of 
the base amount as a reward, always.

◼ Assets can be staked in a pool of a club. The club has got 5 pool, [0, 1, 2, 3, 4]. To 
enter into a pool an asset need to be staked.

◼ Pools has different limit pool-0 and pool-1 supports 2 player 

◼ Pool-2 and pool-3 supports 3 players 

◼ Pool-4 supports 5 players

◼ Each pool plays a game of shai . The winner in this game becomes the owner of 
all assets staked in the pool.

# Assets

Assets are defined by type struct of golang the assets has the following fields

◼ Id

◼ Creator

◼ SerialNumberPAGE 3

◼ AssetType

◼ AssetName

◼ PriceInTokens

◼ Owner

Assets can be of 5 types as described in the introduction but internally they are 
represented by integers.

CAMEL = 0

HOUSE = 1

FOSSIL_NECKLACE = 2

CERAMIC_PLATE = 3

TERACOTTA_LAMP = 4

# Usage

**Buying an Asset**
```
shiaa3d tx assets buy-Asset 0 --from alice --chain-id shiaa3-ibc1 --home ./.ibc1 --node http://localhost:26657
```

**Burning an Asset**
```
shiaa3d tx assets burn-Asset <<ASSET_SERIAL>> --from alice --chain-id shiaa3-ibc1 --home ./.ibc1 --node http://localhost:26657
```

**Gambling in Pool**
```
shiaa3d tx shiaa3 join-pool-and-stake-Asset pool-0 CAMEL23e005d4-5068-488b-b039-93696c0330da --from alice --home ./.ibc1 --chain-id shiaa3-ibc1 --node http://localhost:26657
```

**Seeing the Pool Status**
```
shiaa3d q shiaa3 list-Pool0Ticket --node http://localhost:26659
```

**Sending an Asset across Blockchains**
```
shiaa3d  tx assets send-IbcAsset assets channel-0 CAMELaa86d367-091b-44e0-9b49-171d5825d93c cosmos1eymf808cfrudmtczafcwzfqwm0tp9p5k9fgs03 --from alice --home $HOME/.ibc1 --chain-id shiaa3-ibc1 --node http://localhost:26657

```




