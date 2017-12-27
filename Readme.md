Run
```
nodejs main.js {command} {path-to-abi.json|function}
```

Example `abi2sig`
```
$ node main.js abi2sig cryptokitties-abi.json
Reading file cryptokitties-abi.json
0x95d89b41 -> symbol
0x9d6fac6f -> cooldowns
0xa45f4bfc -> kittyIndexToOwner
0xa9059cbb -> transfer
0xb047fb50 -> cooAddress
0xb0c35c05 -> autoBirthFee
0xbc4006f5 -> erc721Metadata
0xc3bea9af -> createGen0Auction
0xd3e6f49f -> isReadyToBreed
0xdefb9584 -> PROMO_CREATION_LIMIT
0xe17b25af -> setMetadataAddress
0xe6cbe351 -> saleAuction
0xe98b7f4d -> getKitty
0xed60ade6 -> bidOnSiringAuction
0xf1ca9410 -> gen0CreatedCount
```

Example `func2sig`
```
$ node main.js func2sig "receive()"
Computing function receive()
receive() -> 0xa3e76c0f
```