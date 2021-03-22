<template>
	<div>
		<div class="container">
      	<!-- this line is used by starport scaffolding # 4 -->
        <dropdown :options="poolNameList" :selected="object" v-on:updateOption="updatePoolName" id="x1"></dropdown>
		<!-- <input type="text" id="x1" class="sp-input" placeholder="Pool Name" v-on:keyup="updateSerial" required/> -->
		<input type="text" id="x2" class="sp-input" placeholder="Asset Serial" v-on:keyup="updateSerial" required/><br>
		<SpButton @click.native="joinAndStake"> Join And Stake </SpButton>

	




		</div>
	</div>
</template>

<script>
import dropdown from 'vue-dropdowns';
export default {
    name: 'Game', 
    
    data() {
		return {
			serial: "",
			poolName: "",
			modulePath: "sap200.shiaa3.shiaa3",
            moduleType: "JoinPoolAndStakeAsset",
            object: {
              name: 'Pool Name',
            },
            poolNameList: [{name: "pool-0"}, {name: "pool-1"}, {name: "pool-2"}, {name: "pool-3"}, {name: "pool-4"}]
		}
    },

    components: {
            'dropdown': dropdown,
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
        updateSerial(event) {
			this.serial = event.target.value.trim()
			console.log(this.serial)
		}, 

		updatePoolName(payload) {
			this.object = payload
			console.log(this.object.name)
        }, 
        
        async joinAndStake() {
            if (this.serial != "" && this.object.name != "") {
                console.log("Joining and staking")
                if (this.address != "") {
                    var r = confirm("You are about to stake in " + this.object.name + ". Press ok to confirm !");
                    console.log(r)
                    if (r == true) {
                        let payload = {creator: this.selectedAccount, id: 0, PoolNo: this.object.name, AssetSerial: this.serial}
                        // send
                        console.log(payload)
                        // TODO
                        // Write code to dispatch thats all
                    let result = await this.$store.dispatch(
                        this.modulePath + '/sendMsgCreate' + this.moduleType,
                        {value: payload, fee: []},
                    )
                    console.log(result)
                    alert(result.rawLog)
                    this.$emit('Joined Pool')
                    this.serial = ""
                    this.object = {name: "Pool Name"}

                    } else {
                        alert("Joining cancelled")
                          this.serial = ""
                          this.object = {name: "Pool Name"}
                    }

                } else {
                    alert("Please Sign in with your wallet")
                    this.serial = ""
                    this.object = {name: "Pool Name"}
                }
            } else {
                alert("All fields should be filled.")
            }
            
        }
    }
}
</script>


<style>
	#x1 {
		margin-bottom: 10px;
		width: 600px;
		border-radius: 10px;
        font-size: 18px;
	}

	#x2 {
		margin-bottom: 10px;
		width: 600px;
		border-radius: 10px;
	}
</style>


