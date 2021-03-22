<template>
	<div>
		<div class="container">
      
		<!-- <SpType modulePath="sap200.shiaa3.assets" moduleType="TransferAsset"  /> -->
		<!-- <SpType modulePath="sap200.shiaa3.assets" moduleType="Asset"  /> -->
		<div>
			<SpH3> In Chain Transfer Of Asset</SpH3> <br><br>
			
			<input type="text" id="x1" class="sp-input" placeholder="Asset Serial" v-on:keyup="updateSerial" required/>
			<input type="text" id="x2" class="sp-input" placeholder="Receiver Address" v-on:keyup="updateReceiver" required/><br>
			<SpButton @click.native="sendAsset"> Send Asset </SpButton>
		</div>

		<div>
			<SpH3> IBC Transfer Of Asset </SpH3>
			<input type="text" id="x3" class="sp-input" placeholder="Port ID" v-on:keyup="updatePort" required/>
			<input type="text" id="x4" class="sp-input" placeholder="Channel ID" v-on:keyup="updateChannel" required/><br>
			<input type="text" id="x5" class="sp-input" placeholder="Asset Serial" v-on:keyup="updateIBCSerial" required/>
			<input type="text" id="x6" class="sp-input" placeholder="Receiver Address" v-on:keyup="updateIBCReceiver" required/><br>
			<SpButton @click.native="sendAssetIBC"> Send Asset </SpButton>
		</div>





		</div>
	</div>
</template>

<script>
export default {
	name: 'SendAsset',
	data() {
		return {
			serial: "",
			receiver: "",
			modulePath: "sap200.shiaa3.assets",
			moduleType: "TransferAsset",
			ibcserial: "",
			ibcreceiver: "",
			ibcport: "",
			ibcchannel: "",
			ibctype: "SendIbcAsset"
		}
	},

	computed: {
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
			this.serial = event.target.value
			console.log(this.serial)
		}, 

		updateReceiver(event) {
			this.receiver = event.target.value
			console.log(this.receiver)
		}, 

		updatePort(event) {
			this.ibcport = event.target.value
			console.log(this.ibcport)
		}, 

		updateChannel(event) {
			this.ibcchannel = event.target.value
			console.log(this.ibcchannel)
		}, 

		updateIBCReceiver(event) {
			this.ibcreceiver = event.target.value
			console.log(this.ibcreceiver)
		}, 

		updateIBCSerial(event) {
			this.ibcserial = event.target.value
			console.log(this.ibcserial)
		}, 

		async sendAsset(event) {
			if (this.selectedAccount != "") {
				if (this.serial !== "" && this.receiver !== "") {
					var r = confirm("Confirm your IBC Transaction\n" + "\nAsset Serial: " + this.serial + "\nReceiver: " + this.receiver);
					console.log(r)
					if(r == true) {
						console.log("Sending...")
						let payload = {AssetSerial: this.serial.trim(), Receiver: this.receiver.trim(), creator: this.selectedAccount, id:0}
						console.log(payload)

						// Dispatch
						let result = await this.$store.dispatch(
						this.modulePath + '/sendMsgCreate' + this.moduleType,
						{value:payload, fee: []},
						)

						console.log(result)

						alert(result.rawLog)

						this.serial = ""
						this.receiver = "" 
					
						this.$emit('Transferred')
				} else {
						alert("Cancelled")
					}
				} else {
					alert("None of the fields can be empty")
				}
			}
		}, 

		async sendAssetIBC(event) {
			if (this.selectedAccount != "") { 
				console.log("IBC tx fired")
				var r = confirm("Confirm your Transaction\nChannel ID: " + this.ibcchannel + "\nPort ID: " + this.ibcport + "\nAsset Serial: " + this.ibcserial + "\nReceiver: " + this.ibcreceiver);
				console.log(r)
				if(r == true) {

						console.log("Ibc sending...")

						// TODO
						let payload = {
							port: this.ibcport.trim(),
							channelID: this.ibcchannel.trim(),
							sender: this.selectedAccount, 
							timeoutTimestamp: new Date() + 10000, 
							AssetSerial: this.ibcserial.trim(),
							Receiver: this.ibcreceiver.trim(),
						}

						console.log(payload)
						// Dispatch
						let result = await this.$store.dispatch(
						this.modulePath + '/sendMsg' + this.ibctype,
						{value:payload, fee: []},
						)
						// END

						console.log(result.rawLog)
						console.log(result)
						alert(result.rawLog)
						this.ibcserial = ""
						this.ibcreceiver = "" 
						this.ibcchannel = ""
						this.ibcport = ""
					
						this.$emit(result)

				} else {
					alert("cancelled")
				}


			} else {
				alert("Please login with your wallet.")
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
	}

	#x2 {
		margin-bottom: 10px;
		width: 600px;
		border-radius: 10px;
	}

	#x3 {
		margin-bottom: 10px;
		width: 600px;
		border-radius: 10px;
	}

	#x4 {
		margin-bottom: 10px;
		width: 600px;
		border-radius: 10px;
	}

	#x5 {
		margin-bottom: 10px;
		width: 600px;
		border-radius: 10px;
	}

	#x6 {
		margin-bottom: 10px;
		width: 600px;
		border-radius: 10px;
	}
</style>

