<template>
	<div>
		<div class="container">
      	<!-- this line is used by starport scaffolding # 4 -->
		<!-- <SpType modulePath="sap200.shiaa3.shiaa3" moduleType="Winners"  />
		<SpType modulePath="sap200.shiaa3.shiaa3" moduleType="Members"  />
		<SpType modulePath="sap200.shiaa3.shiaa3" moduleType="Pool4Ticket"  />
		<SpType modulePath="sap200.shiaa3.shiaa3" moduleType="Pool3Ticket"  />
		<SpType modulePath="sap200.shiaa3.shiaa3" moduleType="Pool2Ticket"  />
		<SpType modulePath="sap200.shiaa3.shiaa3" moduleType="Pool1Ticket"  />
		<SpType modulePath="sap200.shiaa3.shiaa3" moduleType="Pool0Ticket"  />
		<SpType modulePath="sap200.shiaa3.shiaa3" moduleType="JoinPoolAndStakeAsset"  />
		<SpType modulePath="sap200.shiaa3.assets" moduleType="TimedOutAsset"  />
		<SpType modulePath="sap200.shiaa3.assets" moduleType="SentAsset"  />
		<SpType modulePath="sap200.shiaa3.assets" moduleType="TransferAsset"  /> -->
		<!-- <SpType modulePath="sap200.shiaa3.assets" moduleType="Asset"  /> -->
        <!-- <p>{{ getAllAssets() }}</p> -->

            <OwnerAssetList
					:modulePath=modulePath
					:moduleType=moduleType
					class="sp-type__list"
                    editOpen=false
                    deleteOpen=true
				/>

		</div>
	</div>
</template>

<script>
import OwnerAssetList from "../components/OwnerAssetList.vue"
export default {
    name: 'ListAsset', 

    components: {
        OwnerAssetList
    },

    data() {
        return {
            modulePath: "sap200.shiaa3.assets",
            moduleType: "Asset",
            dataList: [],
            selectedValue: ""
        };
    },

    computed: {
        	selectedAccount() {
			if (this._depsLoaded) {
				return this.$store.getters['common/wallet/address']
			} else {
				return null
			}
        }, 

        typeItems() {
			if (this._depsLoaded) {
				let items = this.$store.getters[
					this.modulePath + '/get' + this.moduleType + 'All'
				]({ params: {} })
				return items.Asset
			} else {
				return []
			}
		},

        returnAllAsset() {
            return this.$store.getters[this.modulePath + '/get' + this.moduleType + 'All']({params:{}})
        }
        
    },
    
    methods: {
        async getAllAsset() {
            try {
                let res =  await this.$store.dispatch(this.modulePath + '/Query' + this.moduleType + 'All', { options: {} } );
                let new_res = res.Asset.filter(v => v.Owner == this.selectedAccount)
                console.log(new_res)
               this.dataList = new_res
            } catch (e) {
                console.log(e)
                this.dataList = []
            }
        }, 

    }
}
</script>

<style scoped>

.list-items {
    text-align: center; 
    color: fuchsia; 
    background-color: rgb(25, 216, 152);
    font-size: 24px; 
    width: 600px;
    padding: 5px;
    background-color: white;
}

.selected {
    color: black;
}



</style>

