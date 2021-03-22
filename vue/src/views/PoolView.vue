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
            <SpH3> Pool-0 </SpH3>
          	<SpTypeList
					:modulePath=modulePath
					:moduleType=mpool0
					class="sp-type__list"
                    editOpen=false
                    deleteOpen=false
				/>
        </div>

          <div>
            <SpH3> Pool-1 </SpH3>
          	<SpTypeList
					:modulePath=modulePath
					:moduleType=mpool1
					class="sp-type__list"
                    editOpen=false
                    deleteOpen=false
				/>
        </div>

        <div>
            <SpH3> Pool-2 </SpH3>
          	<SpTypeList
					:modulePath=modulePath
					:moduleType=mpool2
					class="sp-type__list"
                    editOpen=false
                    deleteOpen=false
				/>
        </div>

        <div>
            <SpH3> Pool-3 </SpH3>
          	<SpTypeList
					:modulePath=modulePath
					:moduleType=mpool3
					class="sp-type__list"
                    editOpen=false
                    deleteOpen=false
				/>
        </div>

        <div>
            <SpH3> Pool-4 </SpH3>
          	<SpTypeList
					:modulePath=modulePath
					:moduleType=mpool4
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
    name: 'PoolView',
    
    data() {
        return {
            pool0: ["1jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj", "2", "3"],
            pool1: [],
            pool2: [],
            pool3: [],
            pool4: [],
            modulePath: "sap200.shiaa3.shiaa3",
            mpool0: "Pool0Ticket",
            mpool1: "Pool1Ticket",
            mpool2: "Pool2Ticket",
            mpool3: "Pool3Ticket",
            mpool4: "Pool4Ticket",
        }
    }, 

    methods: {
        async getPool0() {
              try {
                let res =  await this.$store.dispatch(this.modulePath + '/Query' + this.mpool0 + 'All', { options: {} } );
                console.log(res)
                this.pool0 = res.Pool0Ticket
            } catch (e) {
                console.log(e)
                this.pool0 = []
            }
        }, 

        async getPool1() {
              try {
                let res =  await this.$store.dispatch(this.modulePath + '/Query' + this.mpool1 + 'All', { options: {} } );
                console.log(res)
                this.pool1 = res.Pool1Ticket
            } catch (e) {
                console.log(e)
                this.pool1 = []
            }
        }, 

        async getPool2() {
              try {
                let res =  await this.$store.dispatch(this.modulePath + '/Query' + this.mpool2 + 'All', { options: {} } );
                console.log(res)
                this.pool2 = res.Pool1Ticket
            } catch (e) {
                console.log(e)
                this.pool2 = []
            }
        }, 

        async getPool3() {
              try {
                let res =  await this.$store.dispatch(this.modulePath + '/Query' + this.mpool3 + 'All', { options: {} } );
                console.log(res)
                this.pool3 = res.Pool3Ticket
            } catch (e) {
                console.log(e)
                this.pool3 = []
            }
        }, 

        async getPool4() {
              try {
                let res =  await this.$store.dispatch(this.modulePath + '/Query' + this.mpool4 + 'All', { options: {} } );
                console.log(res)
                this.pool4 = res.Pool4Ticket
            } catch (e) {
                console.log(e)
                this.pool4 = []
            }
        }, 


    }
}
</script>


