<template>
	<div>
		<div class="container">
      	<!-- this line is used by starport scaffolding # 4 -->
		<!-- <SpType modulePath="sap200.shiaa3.assets" moduleType="Asset"  /> -->
        <SpCard class="assets" @click.native="buy('Camel')"><p class="price">PRICE: {{ prices[0] }} Tokens</p><img src="https://image.freepik.com/free-vector/cartoon-camel-isolated-white_29190-5397.jpg" alt="camel"/><p>CAMEL</p></SpCard>
        <SpCard class="assets" @click.native="buy('House')"><p class="price">PRICE: {{ prices[1] }} Tokens</p><img src="https://thumbs.dreamstime.com/b/modern-villa-residence-expensive-mansion-palm-trees-luxury-cottage-house-exterior-blue-swimming-pool-cartoon-exotic-country-154443513.jpg"/><p>HOUSE</p></SpCard>
        <SpCard class="assets" @click.native="buy('Fossil Necklace')"><p class="price">PRICE: {{ prices[2] }} Tokens</p><img src="https://i.ebayimg.com/images/g/-UYAAOSw8i9aV-al/s-l400.jpg" alt="necklace"/><p>FOSSIL NECKLACE</p> </SpCard>
        <SpCard class="assets" @click.native="buy('Ceramic Plate')"><p class="price">PRICE: {{ prices[3] }} Tokens</p><img src="https://sep.yimg.com/ay/yhst-36248216921031/white-fluted-plain-dinner-plate-19.png" alt="ceramic_plate"/><p>CERAMIC PLATE</p></SpCard>
        <SpCard class="assets" @click.native="buy('Teracotta Lamp')"><p class="price">PRICE: {{ prices[4] }} Tokens</p><img src="https://www.kathykuohome.com/Content/config/product/primary/large/product_64420.jpg" alt="teracotta_lamp"/><p>TERACOTTA LAMP</p></SpCard>
		</div>
	</div>
</template>

<script>
export default {
    name: 'BuyAsset',

    data() {
        return {
            prices: [50, 200, 100, 10, 5],
            types: {"Camel": 0, "House": 1, "Fossil Necklace": 2, "Ceramic Plate": 3, "Teracotta Lamp": 4},
            modulePath: "sap200.shiaa3.assets",
            moduleType: "Asset",

        }
    },

    computed: {
        address() {
			return this.$store.getters['common/wallet/address']
        },
        
        selectedAccount() {
			if (this._depsLoaded) {
				return this.$store.getters['common/wallet/address']
			} else {
				return null
			}
        },
        
    },
    
    methods: {
        async buy(value) {
                
                if (this.address != "") {
                var r = confirm("You are about to purchase " + value + ". Press ok to confirm !");
                console.log(r)
                if (r == true) {
                    console.log("confirmed...")
                    let assetType = this.types[value]
                    console.log("Asset Type: ", assetType)
                    // Submit the transaction
                    let payload =  {
                        AssetType: assetType, 
                        creator: this.selectedAccount, 
                        id: 0,
                        Name: "",
                        Tokens: 0, 
                        Owner: this.selectedAccount,
                        Serial: "",
                        }
                    console.log(payload)
                    // TODO
                // Write code to dispatch thats all
                let result = await this.$store.dispatch(
                    this.modulePath + '/sendMsgCreate' + this.moduleType,
                     {value: payload, fee: []},
                )

                console.log(result)
                alert(result.rawLog)
                
                this.$emit('created')

                } else {
                    alert("cancelled")
                    console.log("cancelling...")
                    return
                }
            
            } else {
                alert("Please Log in with your wallet.")
            }
        }
    }
}
</script>

<style scoped>
.assets {
    background-color: white;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
    display: inline-block;
    border-radius: 20px;
}
p {
    text-align: center;
    color: fuchsia;
}

.price {
    color: blue;
}

img {
    width: 300px;
    height: 300px;
}

</style>

