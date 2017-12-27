Run
```
nodejs main.js {command} {path-to-abi.json|function}
```

Example `abi2sig`
```
<<<<<<< HEAD
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
=======
0x06fdde03 -> [ function ] name
0x095ea7b3 -> [ function ] approve
0x18160ddd -> [ function ] totalSupply
0x23b872dd -> [ function ] transferFrom
0x313ce567 -> [ function ] decimals
0x475a9fa9 -> [ function ] issueTokens
0x70a08231 -> [ function ] balanceOf
0x95d89b41 -> [ function ] symbol
0xa9059cbb -> [ function ] transfer
0xdd62ed3e -> [ function ] allowance
0xddf252ad -> [ event ] Transfer
0x8c5be1e5 -> [ event ] Approval
>>>>>>> 76ac9b7413a84bdea16ed4b542f065e2c1dd0e0f
```