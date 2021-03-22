<template>
  <SpSidebar
					v-on:sidebar-open="sidebarOpen = true"
					v-on:sidebar-close="sidebarOpen = false"
				>
					<template v-slot:default>
						<SpLinkIcon link="/" text="Dashboard" icon="Dashboard" />
						<!-- <SpLinkIcon link="/types" text="Custom Type" icon="Form" /> -->
						<SpLinkIcon link="/buyasset" text="MarketPlace" icon="Form"/> 
						<SpLinkIcon link="/listasset" text="My Collection" icon="Docs"/>
						<SpLinkIcon link="/sendmyasset" text="Send Assets" icon="Form"/>
						<SpLinkIcon link="/poolview" text="Club" icon="Docs"/>
						<SpLinkIcon link="/gamble" text="Gamble" icon="Form"/>
						<SpLinkIcon link="/winners" text="Winners Ledger" icon="Docs"/>
						<SpLinkIcon link="/members" text="Members Ledger" icon="Docs"/>
						<SpLinkIcon link="/ibcsent" text="IBC Sent Ledger" icon="Docs"/>
						<SpLinkIcon link="/ibctimedout" text="IBC Timedout Ledger" icon="Docs"/>
						<div class="sp-dash"></div>
						<SpLinkIcon href="https://github.com/tendermint/starport" target="_blank" text="Documentation" icon="Docs" />
					</template>
					<template v-slot:footer>
						<SpStatusAPI :showText="sidebarOpen" />
						<SpStatusRPC :showText="sidebarOpen" />
						<SpStatusWS :showText="sidebarOpen" />
						<div class="sp-text">Build: v0.3.8</div>
					</template>
				</SpSidebar>
</template>

<script>
export default {
  name: 'Sidebar',
	data() {
		return {
			sidebarOpen: true
		}
	},
	computed: {
		hasWallet() {
			return this.$store.hasModule([ 'common', 'wallet'])
		}
	},
}
</script>
