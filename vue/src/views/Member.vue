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
        <div>
         <SpH3> Members Ledger </SpH3>
          	<SpTypeList
					:modulePath=modulePath
					:moduleType=moduleType
					class="sp-type__list"
                    editOpen=false
                    deleteOpen=false
				/>
        </div>



		</div>
	</div>
</template>

<script>
export default {
    name: 'Member', 
    
      data() {
        return {
            modulePath: "sap200.shiaa3.shiaa3",
            moduleType: "Members",
        }

    },
}
</script>

